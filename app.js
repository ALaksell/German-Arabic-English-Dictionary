/**
 * Main Application Module
 * Orchestrates all other modules and handles global state
 */

const App = (() => {
  // State
  let _currentPage = "dictionary"
  let _currentLevel = "A1"
  let _currentCategory = null
  let _currentView = "card"
  let _searchScope = "all"
  let _isInitialized = false

  // DOM Elements
  let _elements = {}

  function getDataLoader() {
    return window.DataLoader
  }
  function getTTSEngine() {
    return window.TTSEngine
  }
  function getParticleBackground() {
    return window.ParticleBackground
  }
  function getUIRenderer() {
    return window.UIRenderer
  }
  function getCategoriesManager() {
    return window.CategoriesManager
  }
  function getSearchEngine() {
    return window.SearchEngine
  }
  function getLevelsPage() {
    return window.LevelsPage
  }
  function getFavoritesManager() {
    return window.FavoritesManager
  }
  function getWordOfTheDay() {
    return window.WordOfTheDay
  }

  /**
   * Initialize the application
   */
  async function init() {
    console.log("[v0] App initializing...")

    // Cache DOM elements
    cacheElements()

    // Show loading state
    showLoading(true)

    try {
      const DataLoader = getDataLoader()
      const TTSEngine = getTTSEngine()
      const ParticleBackground = getParticleBackground()
      const UIRenderer = getUIRenderer()

      if (!DataLoader) {
        throw new Error("DataLoader module not found")
      }

      // Load data
      console.log("[v0] Loading data...")
      await DataLoader.loadData()
      console.log("[v0] Data loaded, version:", DataLoader.getVersion())

      // Initialize TTS (non-blocking)
      if (TTSEngine) {
        TTSEngine.init()
          .then(() => {
            console.log("[v0] TTS initialized")
          })
          .catch((err) => {
            console.warn("[v0] TTS init failed:", err)
          })
      }

      // Initialize particle background (non-blocking)
      if (ParticleBackground) {
        try {
          if (ParticleBackground.init("scene")) {
            ParticleBackground.start()
            console.log("[v0] Particles initialized")
          }
        } catch (err) {
          console.warn("[v0] Particles init failed:", err)
        }
      }

      // Set initial view based on device
      if (UIRenderer) {
        _currentView = UIRenderer.isMobile() ? "card" : "table"
        UIRenderer.setView(_currentView)
      }

      // Render initial state
      renderApp()

      // Setup event listeners
      setupEventListeners()

      // Setup keyboard shortcuts
      setupKeyboardShortcuts()

      // Show Word of the Day
      showWordOfTheDay()

      _isInitialized = true
      showLoading(false)
      console.log("[v0] Initialization complete")
    } catch (error) {
      console.error("[v0] Initialization failed:", error)
      showLoading(false)
      showError("Failed to load dictionary data. Please refresh the page. Error: " + error.message)
    }
  }

  /**
   * Cache DOM elements
   */
  function cacheElements() {
    _elements = {
      mainNav: document.querySelectorAll(".main-nav-btn"),
      dictionaryPage: document.getElementById("dictionary-page"),
      levelsPage: document.getElementById("levels-page"),
      sidebar: document.getElementById("categories-sidebar"),
      levelTabs: document.getElementById("level-tabs"),
      searchInput: document.getElementById("dict-search"),
      searchSuggestions: document.getElementById("search-suggestions"),
      scopeToggle: document.getElementById("scope-toggle"),
      viewToggle: document.querySelectorAll(".view-toggle-btn"),
      resultsContainer: document.getElementById("results-container"),
      levelInfo: document.getElementById("level-info"),
      scrollTopBtn: document.getElementById("scroll-top"),
      particleToggle: document.getElementById("particle-toggle"),
      wotdContainer: document.getElementById("wotd-container"),
      loadingScreen: document.getElementById("loading-screen"),
    }
  }

  /**
   * Render the entire application
   */
  function renderApp() {
    renderLevelTabs()
    renderSidebar()
    renderLevelInfo()
    renderResults()
  }

  /**
   * Render level tabs
   */
  function renderLevelTabs() {
    const CategoriesManager = getCategoriesManager()
    const DataLoader = getDataLoader()
    if (!_elements.levelTabs || !CategoriesManager || !DataLoader) return
    const levels = DataLoader.getLevels()
    CategoriesManager.renderLevelTabs(_elements.levelTabs, levels, _currentLevel)
  }

  /**
   * Render sidebar
   */
  function renderSidebar() {
    const CategoriesManager = getCategoriesManager()
    const DataLoader = getDataLoader()
    if (!_elements.sidebar || !CategoriesManager || !DataLoader) return
    const categories = DataLoader.getCategories()
    CategoriesManager.renderSidebar(_elements.sidebar, categories, _currentLevel)
  }

  /**
   * Render level info header
   */
  function renderLevelInfo() {
    const DataLoader = getDataLoader()
    if (!_elements.levelInfo || !DataLoader) return
    const info = DataLoader.getLevelInfo(_currentLevel)
    if (info) {
      _elements.levelInfo.innerHTML = `
        <h2>${info.title}</h2>
        <p>${info.desc}</p>
      `
    }
  }

  /**
   * Render results based on current filters
   */
  function renderResults() {
    const DataLoader = getDataLoader()
    const UIRenderer = getUIRenderer()
    if (!_elements.resultsContainer || !DataLoader || !UIRenderer) return

    let words
    if (_currentCategory) {
      words = DataLoader.getWordsByLevelAndCategory(_currentLevel, _currentCategory)
    } else {
      words = DataLoader.getWordsByLevel(_currentLevel)
    }

    UIRenderer.setWords(words)
    UIRenderer.render(_elements.resultsContainer)
  }

  /**
   * Setup event listeners
   */
  function setupEventListeners() {
    const SearchEngine = getSearchEngine()
    const ParticleBackground = getParticleBackground()
    const LevelsPage = getLevelsPage()
    const UIRenderer = getUIRenderer()

    // Main navigation
    _elements.mainNav.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const page = e.currentTarget.dataset.page
        switchPage(page)
      })
    })

    // Search input
    if (_elements.searchInput) {
      _elements.searchInput.addEventListener("input", handleSearch)
      _elements.searchInput.addEventListener("focus", showSearchSuggestions)
      _elements.searchInput.addEventListener("blur", () => {
        setTimeout(hideSearchSuggestions, 200)
      })
    }

    // Scope toggle
    if (_elements.scopeToggle && SearchEngine) {
      _elements.scopeToggle.addEventListener("change", (e) => {
        _searchScope = e.target.value
        SearchEngine.setScope(_searchScope, _currentCategory, _currentLevel)
        handleSearch()
      })
    }

    // View toggle
    _elements.viewToggle.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const view = e.currentTarget.dataset.view
        switchView(view)
      })
    })

    // Custom events
    window.addEventListener("levelChanged", (e) => {
      _currentLevel = e.detail.level
      if (SearchEngine) SearchEngine.setScope(_searchScope, _currentCategory, _currentLevel)
      renderLevelInfo()
      renderSidebar()
      renderResults()
    })

    window.addEventListener("categoryChanged", (e) => {
      _currentCategory = e.detail.category
      if (SearchEngine) SearchEngine.setScope(_searchScope, _currentCategory, _currentLevel)
      renderResults()
    })

    window.addEventListener("pageChanged", () => {
      renderResults()
      scrollToTop()
    })

    window.addEventListener("searchSuggestion", (e) => {
      if (_elements.searchInput) {
        _elements.searchInput.value = e.detail.search
        handleSearch()
      }
    })

    window.addEventListener("showLevelWords", (e) => {
      _currentLevel = e.detail.level
      _currentCategory = null
      switchPage("dictionary")
      renderApp()
    })

    window.addEventListener("sidebarToggled", (e) => {
      document.body.classList.toggle("sidebar-collapsed", e.detail.collapsed)
    })

    window.addEventListener("favoritesChanged", () => {
      renderSidebar()
    })

    // Scroll to top button
    if (_elements.scrollTopBtn) {
      window.addEventListener("scroll", () => {
        _elements.scrollTopBtn.classList.toggle("visible", window.scrollY > 300)
      })
      _elements.scrollTopBtn.addEventListener("click", scrollToTop)
    }

    // Particle toggle
    if (_elements.particleToggle && ParticleBackground) {
      _elements.particleToggle.addEventListener("click", () => {
        const isReduced = ParticleBackground.isReduced()
        ParticleBackground.setReduced(!isReduced)
        _elements.particleToggle.classList.toggle("reduced", !isReduced)
        _elements.particleToggle.setAttribute("aria-pressed", !isReduced)
      })
    }

    // Resize handler
    if (UIRenderer) {
      window.addEventListener(
        "resize",
        debounce(() => {
          if (UIRenderer.isMobile() && _currentView === "table") {
            switchView("card")
          }
        }, 250),
      )
    }
  }

  /**
   * Setup keyboard shortcuts
   */
  function setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      // Don't trigger if typing in input
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
        // Escape to blur search
        if (e.key === "Escape") {
          e.target.blur()
          hideSearchSuggestions()
        }
        return
      }

      switch (e.key) {
        case "/":
          e.preventDefault()
          _elements.searchInput?.focus()
          break
        case "f":
        case "F":
          e.preventDefault()
          showFavoritesOnly()
          break
        case "r":
        case "R":
          e.preventDefault()
          showRandomWord()
          break
        case "Escape":
          hideSearchSuggestions()
          break
      }
    })
  }

  /**
   * Switch page
   */
  function switchPage(page) {
    const LevelsPage = getLevelsPage()
    _currentPage = page

    // Update nav
    _elements.mainNav.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.page === page)
    })

    // Show/hide pages
    if (_elements.dictionaryPage) {
      _elements.dictionaryPage.classList.toggle("active", page === "dictionary")
    }
    if (_elements.levelsPage) {
      _elements.levelsPage.classList.toggle("active", page === "levels")
      if (page === "levels" && LevelsPage) {
        LevelsPage.render(_elements.levelsPage)
      }
    }
  }

  /**
   * Switch view
   */
  function switchView(view) {
    const UIRenderer = getUIRenderer()
    _currentView = view
    if (UIRenderer) UIRenderer.setView(view)

    _elements.viewToggle.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === view)
    })

    renderResults()
  }

  /**
   * Handle search
   */
  function handleSearch() {
    const SearchEngine = getSearchEngine()
    const DataLoader = getDataLoader()
    const UIRenderer = getUIRenderer()

    if (!SearchEngine || !DataLoader || !UIRenderer) return

    const query = _elements.searchInput?.value || ""

    if (query.length === 0) {
      renderResults()
      hideSearchSuggestions()
      return
    }

    let words
    if (_currentCategory) {
      words = DataLoader.getWordsByLevelAndCategory(_currentLevel, _currentCategory)
    } else if (_searchScope === "level") {
      words = DataLoader.getWordsByLevel(_currentLevel)
    } else {
      words = DataLoader.getAllWords()
    }

    SearchEngine.debouncedSearch(query, words, (result) => {
      UIRenderer.setWords(result.results, result.query)
      UIRenderer.render(_elements.resultsContainer)

      if (query.length >= 2) {
        SearchEngine.addToHistory(query)
      }
    })

    // Show suggestions
    if (query.length >= 1) {
      showSearchSuggestions()
    }
  }

  /**
   * Show search suggestions
   */
  function showSearchSuggestions() {
    const SearchEngine = getSearchEngine()
    const DataLoader = getDataLoader()

    if (!_elements.searchSuggestions || !_elements.searchInput || !SearchEngine || !DataLoader) return

    const query = _elements.searchInput.value
    const words = DataLoader.getAllWords()
    const suggestions = SearchEngine.getSuggestions(query, words)

    if (suggestions.length === 0) {
      hideSearchSuggestions()
      return
    }

    _elements.searchSuggestions.innerHTML = suggestions
      .map(
        (s) => `
      <button class="suggestion-item" data-text="${s.text}" data-type="${s.type}">
        <i class="fas ${s.type === "history" ? "fa-clock" : s.type === "word" ? "fa-book" : "fa-language"}"></i>
        <span>${s.text}</span>
        ${s.level ? `<span class="suggestion-level">${s.level}</span>` : ""}
      </button>
    `,
      )
      .join("")

    _elements.searchSuggestions.classList.add("visible")

    // Attach click handlers
    _elements.searchSuggestions.querySelectorAll(".suggestion-item").forEach((item) => {
      item.addEventListener("click", () => {
        _elements.searchInput.value = item.dataset.text
        handleSearch()
        hideSearchSuggestions()
      })
    })
  }

  /**
   * Hide search suggestions
   */
  function hideSearchSuggestions() {
    if (_elements.searchSuggestions) {
      _elements.searchSuggestions.classList.remove("visible")
    }
  }

  /**
   * Show favorites only
   */
  function showFavoritesOnly() {
    const FavoritesManager = getFavoritesManager()
    const DataLoader = getDataLoader()
    const UIRenderer = getUIRenderer()

    if (!FavoritesManager || !DataLoader || !UIRenderer) return

    const allWords = DataLoader.getAllWords()
    const favorites = FavoritesManager.getAllWithData(allWords)

    if (favorites.length === 0) {
      UIRenderer.showToast("No favorites yet. Click the heart icon to add words.")
      return
    }

    UIRenderer.setWords(favorites)
    UIRenderer.render(_elements.resultsContainer)
    UIRenderer.showToast(`Showing ${favorites.length} favorite words`)
  }

  /**
   * Show random word
   */
  function showRandomWord() {
    const DataLoader = getDataLoader()
    const TTSEngine = getTTSEngine()

    if (!DataLoader) return

    const word = DataLoader.getRandomWord(_currentLevel)
    if (word) {
      _elements.searchInput.value = word.de
      handleSearch()
      if (TTSEngine) TTSEngine.speak(word.de)
    }
  }

  /**
   * Show Word of the Day
   */
  function showWordOfTheDay() {
    const WordOfTheDay = getWordOfTheDay()
    const DataLoader = getDataLoader()
    const TTSEngine = getTTSEngine()

    if (!_elements.wotdContainer || !WordOfTheDay || !DataLoader) return

    const words = DataLoader.getAllWords()
    const wotd = WordOfTheDay.getWordOfTheDay(words)

    if (wotd) {
      _elements.wotdContainer.innerHTML = `
        <div class="wotd-card">
          <div class="wotd-header">
            <span class="wotd-label"><i class="fas fa-star"></i> Word of the Day</span>
            <span class="wotd-level badge-${wotd.level.toLowerCase()}">${wotd.level}</span>
          </div>
          <div class="wotd-word">${wotd.de}</div>
          <div class="wotd-meanings">
            <span class="wotd-en">${wotd.en}</span>
            <span class="wotd-ar" dir="rtl">${wotd.ar}</span>
          </div>
          <button class="wotd-speak" data-action="speak" data-text="${wotd.de}">
            <i class="fas fa-volume-high"></i>
          </button>
        </div>
      `

      // Attach speaker button
      _elements.wotdContainer.querySelector(".wotd-speak")?.addEventListener("click", () => {
        if (TTSEngine) TTSEngine.speak(wotd.de)
      })
    }
  }

  /**
   * Show loading state
   */
  function showLoading(show) {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      loadingScreen.style.display = show ? "flex" : "none"
    }
    document.body.classList.toggle("loading", show)
  }

  /**
   * Show error message
   */
  function showError(message) {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) {
      loadingScreen.style.display = "none"
    }

    if (_elements.resultsContainer) {
      _elements.resultsContainer.innerHTML = `
        <div class="error-message">
          <i class="fas fa-exclamation-triangle"></i>
          <p>${message}</p>
          <button onclick="location.reload()">Refresh Page</button>
        </div>
      `
    }
  }

  /**
   * Scroll to top
   */
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  /**
   * Debounce helper
   */
  function debounce(func, wait) {
    let timeout
    return function (...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

  // Public API
  return {
    init,
  }
})()

// Initialize when DOM is ready
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", App.init)
  } else {
    App.init()
  }
}
