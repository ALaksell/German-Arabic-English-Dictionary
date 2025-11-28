/**
 * UI Rendering Module
 * Handles rendering dictionary entries, cards, tables, and flashcards
 */

const UIRenderer = (() => {
  const ITEMS_PER_PAGE = 20
  let _currentPage = 1
  let _currentView = "card" // 'card', 'table', 'flashcard'
  let _currentWords = []
  let _searchQuery = ""

  function shuffleArray(array) {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  function getSearchEngine() {
    return typeof window !== "undefined" ? window.SearchEngine : null
  }

  function getFavoritesManager() {
    return typeof window !== "undefined" ? window.FavoritesManager : null
  }

  function getTTSEngine() {
    return typeof window !== "undefined" ? window.TTSEngine : null
  }

  function getDataLoader() {
    return typeof window !== "undefined" ? window.DataLoader : null
  }

  /**
   * Detect if mobile device
   */
  function isMobile() {
    return window.innerWidth < 768
  }

  /**
   * Set current view mode
   */
  function setView(view) {
    _currentView = view
  }

  /**
   * Get current view mode
   */
  function getView() {
    return _currentView
  }

  /**
   * Set words to render
   */
  function setWords(words, query = "") {
    _currentWords = words
    _searchQuery = query
    _currentPage = 1
  }

  /**
   * Get paginated words
   */
  function getPaginatedWords() {
    const start = (_currentPage - 1) * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE
    return _currentWords.slice(start, end)
  }

  /**
   * Get total pages
   */
  function getTotalPages() {
    return Math.ceil(_currentWords.length / ITEMS_PER_PAGE)
  }

  /**
   * Set page
   */
  function setPage(page) {
    _currentPage = Math.max(1, Math.min(page, getTotalPages()))
  }

  /**
   * Highlight search terms in text
   */
  function highlight(text, query) {
    if (!query || !text) return text
    const SearchEngine = getSearchEngine()
    if (SearchEngine && SearchEngine.highlightText) {
      return SearchEngine.highlightText(text, query)
    }
    return text
  }

  /**
   * Truncate text with "more" option
   */
  function truncateText(text, maxLength = 50) {
    if (!text || text.length <= maxLength) return { text: text || "", truncated: false }
    return {
      text: text.substring(0, maxLength) + "...",
      full: text,
      truncated: true,
    }
  }

  /**
   * Render a single card
   */
  function renderCard(word, index) {
    const FavoritesManager = getFavoritesManager()
    const isFav = FavoritesManager ? FavoritesManager.isFavorite(word.id) : false
    const exampleDe = truncateText(word.example_de, 60)
    const exampleAr = truncateText(word.example_ar, 60)

    return `
      <article class="word-card" data-word-id="${word.id}" data-index="${index}" role="article" aria-label="${word.de}">
        <div class="word-card-header">
          <div class="word-main">
            <span class="word-german">${highlight(word.de, _searchQuery)}</span>
            <span class="word-level badge-${word.level.toLowerCase()}">${word.level}</span>
          </div>
          <div class="word-actions">
            <button class="action-btn favorite-btn ${isFav ? "active" : ""}" 
                    data-action="favorite" 
                    data-word-id="${word.id}"
                    aria-label="${isFav ? "Remove from favorites" : "Add to favorites"}"
                    title="${isFav ? "Remove from favorites" : "Add to favorites"}">
              <i class="fa${isFav ? "s" : "r"} fa-heart"></i>
            </button>
            <button class="action-btn speak-btn" 
                    data-action="speak" 
                    data-text="${word.de}"
                    aria-label="Listen to pronunciation"
                    title="Listen">
              <i class="fas fa-volume-high"></i>
            </button>
            <button class="action-btn copy-btn" 
                    data-action="copy" 
                    data-text="${word.de}"
                    aria-label="Copy word"
                    title="Copy">
              <i class="fas fa-copy"></i>
            </button>
          </div>
        </div>
        
        <div class="word-pronunciations">
          <span class="pron-en" title="English pronunciation">${highlight(word.pro_en, _searchQuery)}</span>
          <span class="pron-ar" dir="rtl" title="Arabic pronunciation">${highlight(word.pro_ar, _searchQuery)}</span>
        </div>
        
        <div class="word-meanings">
          <div class="meaning-en">
            <span class="meaning-label">EN</span>
            <span>${highlight(word.en, _searchQuery)}</span>
          </div>
          <div class="meaning-ar" dir="rtl">
            <span class="meaning-label">AR</span>
            <span>${highlight(word.ar, _searchQuery)}</span>
          </div>
        </div>
        
        ${
          word.example_de
            ? `
        <div class="word-example">
          <div class="example-de">
            ${
              exampleDe.truncated
                ? `
              <span class="example-short">${highlight(exampleDe.text, _searchQuery)}</span>
              <button class="show-more-btn" data-full="${encodeURIComponent(exampleDe.full)}">more</button>
            `
                : highlight(word.example_de, _searchQuery)
            }
          </div>
          ${
            word.example_ar
              ? `
          <div class="example-ar" dir="rtl">
            ${
              exampleAr.truncated
                ? `
              <span class="example-short">${highlight(exampleAr.text, _searchQuery)}</span>
              <button class="show-more-btn" data-full="${encodeURIComponent(exampleAr.full)}">more</button>
            `
                : highlight(word.example_ar, _searchQuery)
            }
          </div>
          `
              : ""
          }
        </div>
        `
            : ""
        }
        
        <div class="word-meta">
          <span class="meta-category">
            <i class="fas fa-folder"></i> ${word.category}
          </span>
          <span class="meta-pos">${word.pos}</span>
        </div>
      </article>
    `
  }

  /**
   * Render cards view
   */
  function renderCards(container) {
    const words = getPaginatedWords()

    if (words.length === 0) {
      container.innerHTML = renderNoResults()
      return
    }

    const html = `
      <div class="cards-grid">
        ${words.map((word, index) => renderCard(word, index)).join("")}
      </div>
      ${renderPagination()}
    `

    container.innerHTML = html
    attachCardEventListeners(container)
  }

  /**
   * Render table view
   */
  function renderTable(container) {
    const words = getPaginatedWords()

    if (words.length === 0) {
      container.innerHTML = renderNoResults()
      return
    }

    const html = `
      <div class="table-wrapper" role="region" aria-label="Dictionary table" tabindex="0">
        <table class="dict-table" role="table">
          <thead>
            <tr>
              <th class="col-de" scope="col">German <i class="fas fa-volume-high tiny-icon"></i></th>
              <th class="col-pron-en" scope="col">Pronunciation (EN)</th>
              <th class="col-pron-ar" scope="col" dir="rtl">النطق (عربي)</th>
              <th class="col-en" scope="col">English</th>
              <th class="col-ar" scope="col" dir="rtl">العربية</th>
              <th class="col-ex" scope="col">Example</th>
              <th class="col-actions" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${words.map((word, index) => renderTableRow(word, index)).join("")}
          </tbody>
        </table>
      </div>
      ${renderPagination()}
    `

    container.innerHTML = html
    attachTableEventListeners(container)
  }

  /**
   * Render a single table row
   */
  function renderTableRow(word, index) {
    const FavoritesManager = getFavoritesManager()
    const isFav = FavoritesManager ? FavoritesManager.isFavorite(word.id) : false
    const example = truncateText(word.example_de, 40)

    return `
      <tr data-word-id="${word.id}" data-index="${index}">
        <td class="col-de">
          <span class="word-german">${highlight(word.de, _searchQuery)}</span>
          <span class="word-level-inline badge-${word.level.toLowerCase()}">${word.level}</span>
        </td>
        <td class="col-pron-en">${highlight(word.pro_en, _searchQuery)}</td>
        <td class="col-pron-ar" dir="rtl">${highlight(word.pro_ar, _searchQuery)}</td>
        <td class="col-en">${highlight(word.en, _searchQuery)}</td>
        <td class="col-ar" dir="rtl">${highlight(word.ar, _searchQuery)}</td>
        <td class="col-ex">
          ${
            example.truncated
              ? `
            <span class="example-short">${highlight(example.text, _searchQuery)}</span>
            <button class="show-more-btn-inline" data-full="${encodeURIComponent(example.full)}">more</button>
          `
              : highlight(word.example_de || "", _searchQuery)
          }
        </td>
        <td class="col-actions">
          <button class="action-btn-sm favorite-btn ${isFav ? "active" : ""}" 
                  data-action="favorite" 
                  data-word-id="${word.id}"
                  aria-label="${isFav ? "Remove from favorites" : "Add to favorites"}">
            <i class="fa${isFav ? "s" : "r"} fa-heart"></i>
          </button>
          <button class="action-btn-sm speak-btn" 
                  data-action="speak" 
                  data-text="${word.de}"
                  aria-label="Listen">
            <i class="fas fa-volume-high"></i>
          </button>
          <button class="action-btn-sm copy-btn" 
                  data-action="copy" 
                  data-text="${word.de}"
                  aria-label="Copy">
            <i class="fas fa-copy"></i>
          </button>
        </td>
      </tr>
    `
  }

  /**
   * Render flashcard view
   */
  function renderFlashcards(container) {
    const words = _currentWords

    if (words.length === 0) {
      container.innerHTML = renderNoResults()
      return
    }

    const html = `
      <div class="flashcard-container">
        <div class="flashcard-progress">
          <span class="progress-text">Card <span id="flashcard-current">1</span> of ${words.length}</span>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${(1 / words.length) * 100}%"></div>
          </div>
        </div>
        
        <div class="flashcard" id="flashcard" tabindex="0" role="button" aria-label="Click to flip card">
          <div class="flashcard-inner" id="flashcard-inner">
            <div class="flashcard-front">
              <div class="flashcard-word" id="flashcard-word">${words[0]?.de || ""}</div>
              <div class="flashcard-hint">Click to reveal</div>
            </div>
            <div class="flashcard-back">
              <div class="flashcard-meanings">
                <div class="flashcard-en" id="flashcard-en">${words[0]?.en || ""}</div>
                <div class="flashcard-ar" id="flashcard-ar" dir="rtl">${words[0]?.ar || ""}</div>
              </div>
              <div class="flashcard-example" id="flashcard-example">${words[0]?.example_de || ""}</div>
            </div>
          </div>
        </div>
        
        <div class="flashcard-controls">
          <button class="flashcard-btn" id="flashcard-prev" aria-label="Previous card">
            <i class="fas fa-chevron-left"></i> Previous
          </button>
          <button class="flashcard-btn speak-btn" data-action="speak" data-text="${words[0]?.de || ""}" aria-label="Listen">
            <i class="fas fa-volume-high"></i>
          </button>
          <button class="flashcard-btn shuffle-btn" id="flashcard-shuffle" aria-label="Shuffle cards">
            <i class="fas fa-shuffle"></i>
          </button>
          <button class="flashcard-btn" id="flashcard-next" aria-label="Next card">
            Next <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    `

    container.innerHTML = html
    attachFlashcardEventListeners(container, words)
  }

  /**
   * Render pagination controls
   */
  function renderPagination() {
    const totalPages = getTotalPages()
    if (totalPages <= 1) return ""

    const pages = []
    const maxVisible = 5
    let start = Math.max(1, _currentPage - Math.floor(maxVisible / 2))
    const end = Math.min(totalPages, start + maxVisible - 1)

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return `
      <nav class="pagination" aria-label="Results pagination">
        <button class="page-btn" data-page="1" ${_currentPage === 1 ? "disabled" : ""} aria-label="First page">
          <i class="fas fa-angles-left"></i>
        </button>
        <button class="page-btn" data-page="${_currentPage - 1}" ${_currentPage === 1 ? "disabled" : ""} aria-label="Previous page">
          <i class="fas fa-chevron-left"></i>
        </button>
        
        ${start > 1 ? '<span class="page-ellipsis">...</span>' : ""}
        
        ${pages
          .map(
            (p) => `
          <button class="page-btn ${p === _currentPage ? "active" : ""}" data-page="${p}" aria-label="Page ${p}" ${p === _currentPage ? 'aria-current="page"' : ""}>
            ${p}
          </button>
        `,
          )
          .join("")}
        
        ${end < totalPages ? '<span class="page-ellipsis">...</span>' : ""}
        
        <button class="page-btn" data-page="${_currentPage + 1}" ${_currentPage === totalPages ? "disabled" : ""} aria-label="Next page">
          <i class="fas fa-chevron-right"></i>
        </button>
        <button class="page-btn" data-page="${totalPages}" ${_currentPage === totalPages ? "disabled" : ""} aria-label="Last page">
          <i class="fas fa-angles-right"></i>
        </button>
        
        <span class="page-info">${_currentWords.length} words</span>
      </nav>
    `
  }

  /**
   * Render no results message
   */
  function renderNoResults() {
    const SearchEngine = getSearchEngine()
    const DataLoader = getDataLoader()
    let suggestions = []

    if (SearchEngine && DataLoader) {
      suggestions = SearchEngine.getNoResultsSuggestions(_searchQuery, DataLoader.getAllWords())
    }

    return `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No results found</h3>
        <p>We couldn't find any words matching "${_searchQuery || "your search"}"</p>
        
        ${suggestions
          .map((s) => {
            if (s.type === "similar") {
              return `
              <div class="suggestion-block">
                <p>${s.text}</p>
                <div class="suggestion-items">
                  ${s.items
                    .map(
                      (item) => `
                    <button class="suggestion-word" data-search="${item}">${item}</button>
                  `,
                    )
                    .join("")}
                </div>
              </div>
            `
            }
            return `<p class="suggestion-tip">${s.text}</p>`
          })
          .join("")}
      </div>
    `
  }

  /**
   * Attach event listeners for cards
   */
  function attachCardEventListeners(container) {
    // Action buttons
    container.querySelectorAll("[data-action]").forEach((btn) => {
      btn.addEventListener("click", handleActionClick)
    })

    // Show more buttons
    container.querySelectorAll(".show-more-btn").forEach((btn) => {
      btn.addEventListener("click", handleShowMore)
    })

    // Pagination
    container.querySelectorAll(".page-btn").forEach((btn) => {
      btn.addEventListener("click", handlePagination)
    })

    // Suggestion words
    container.querySelectorAll(".suggestion-word").forEach((btn) => {
      btn.addEventListener("click", handleSuggestionClick)
    })
  }

  /**
   * Attach event listeners for table
   */
  function attachTableEventListeners(container) {
    attachCardEventListeners(container)

    // Show more inline buttons
    container.querySelectorAll(".show-more-btn-inline").forEach((btn) => {
      btn.addEventListener("click", handleShowMoreInline)
    })
  }

  /**
   * Attach event listeners for flashcards
   */
  function attachFlashcardEventListeners(container, words) {
    let currentIndex = 0
    let isFlipped = false
    let shuffledWords = [...words]

    const flashcard = container.querySelector("#flashcard")
    const flashcardInner = container.querySelector("#flashcard-inner")
    const prevBtn = container.querySelector("#flashcard-prev")
    const nextBtn = container.querySelector("#flashcard-next")
    const shuffleBtn = container.querySelector("#flashcard-shuffle")
    const speakBtn = container.querySelector(".speak-btn")
    const currentSpan = container.querySelector("#flashcard-current")
    const progressFill = container.querySelector(".progress-fill")

    const TTSEngine = getTTSEngine()

    function updateCard() {
      const word = shuffledWords[currentIndex]
      container.querySelector("#flashcard-word").textContent = word.de
      container.querySelector("#flashcard-en").textContent = word.en
      container.querySelector("#flashcard-ar").textContent = word.ar
      container.querySelector("#flashcard-example").textContent = word.example_de || ""
      speakBtn.dataset.text = word.de
      currentSpan.textContent = currentIndex + 1
      progressFill.style.width = `${((currentIndex + 1) / shuffledWords.length) * 100}%`

      // Reset flip state
      isFlipped = false
      flashcardInner.classList.remove("flipped")
    }

    flashcard.addEventListener("click", () => {
      isFlipped = !isFlipped
      flashcardInner.classList.toggle("flipped", isFlipped)
    })

    flashcard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        isFlipped = !isFlipped
        flashcardInner.classList.toggle("flipped", isFlipped)
      }
    })

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + shuffledWords.length) % shuffledWords.length
      updateCard()
    })

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % shuffledWords.length
      updateCard()
    })

    shuffleBtn.addEventListener("click", () => {
      shuffledWords = shuffleArray([...words])
      currentIndex = 0
      updateCard()
    })

    speakBtn.addEventListener("click", () => {
      if (TTSEngine) {
        TTSEngine.speak(speakBtn.dataset.text)
      }
    })

    // Keyboard navigation
    const keyHandler = (e) => {
      if (e.target.tagName === "INPUT") return
      if (e.key === "ArrowLeft") prevBtn.click()
      if (e.key === "ArrowRight") nextBtn.click()
    }
    document.addEventListener("keydown", keyHandler)
  }

  /**
   * Handle action button clicks
   */
  function handleActionClick(e) {
    e.stopPropagation()
    const btn = e.currentTarget
    const action = btn.dataset.action

    const FavoritesManager = getFavoritesManager()
    const TTSEngine = getTTSEngine()

    switch (action) {
      case "favorite":
        if (FavoritesManager) {
          const wordId = btn.dataset.wordId
          const isFav = FavoritesManager.toggle(wordId)
          btn.classList.toggle("active", isFav)
          btn.querySelector("i").className = `fa${isFav ? "s" : "r"} fa-heart`
          showToast(isFav ? "Added to favorites" : "Removed from favorites")
        }
        break

      case "speak":
        if (TTSEngine) {
          TTSEngine.speak(btn.dataset.text)
          btn.classList.add("speaking")
          setTimeout(() => btn.classList.remove("speaking"), 1000)
        }
        break

      case "copy":
        navigator.clipboard
          .writeText(btn.dataset.text)
          .then(() => {
            showToast("Copied to clipboard")
          })
          .catch(() => {
            showToast("Failed to copy")
          })
        break
    }
  }

  /**
   * Handle show more button
   */
  function handleShowMore(e) {
    const btn = e.currentTarget
    const full = decodeURIComponent(btn.dataset.full)
    const parent = btn.parentElement
    parent.innerHTML = full
  }

  /**
   * Handle show more inline button
   */
  function handleShowMoreInline(e) {
    handleShowMore(e)
  }

  /**
   * Handle pagination
   */
  function handlePagination(e) {
    const page = Number.parseInt(e.currentTarget.dataset.page, 10)
    if (!isNaN(page)) {
      setPage(page)
      // Re-render by dispatching event
      window.dispatchEvent(new CustomEvent("pageChanged"))
    }
  }

  /**
   * Handle suggestion click
   */
  function handleSuggestionClick(e) {
    const search = e.currentTarget.dataset.search
    window.dispatchEvent(
      new CustomEvent("searchSuggestion", {
        detail: { search },
      }),
    )
  }

  /**
   * Show toast notification
   */
  function showToast(message, duration = 2000) {
    const container = document.getElementById("toast-container")
    if (!container) return

    const toast = document.createElement("div")
    toast.className = "toast"
    toast.textContent = message
    container.appendChild(toast)

    // Trigger animation
    setTimeout(() => toast.classList.add("visible"), 10)

    // Remove after duration
    setTimeout(() => {
      toast.classList.remove("visible")
      setTimeout(() => toast.remove(), 300)
    }, duration)
  }

  /**
   * Main render function
   */
  function render(container) {
    switch (_currentView) {
      case "table":
        renderTable(container)
        break
      case "flashcard":
        renderFlashcards(container)
        break
      case "card":
      default:
        renderCards(container)
    }
  }

  // Public API
  return {
    isMobile,
    setView,
    getView,
    setWords,
    setPage,
    render,
    showToast,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.UIRenderer = UIRenderer
}
