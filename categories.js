/**
 * Categories Module
 * Handles sidebar categories rendering and filtering
 */

const CategoriesManager = (() => {
  const CATEGORY_ICONS = {
    greetings: "fa-hand-wave",
    numbers: "fa-hashtag",
    family: "fa-users",
    food: "fa-utensils",
    colors: "fa-palette",
    verbs: "fa-running",
    places: "fa-map-marker-alt",
    professions: "fa-briefcase",
    clothing: "fa-shirt",
    default: "fa-folder",
  }

  const CATEGORY_LABELS = {
    greetings: "Greetings & Basics",
    numbers: "Numbers",
    family: "Family & People",
    food: "Food & Drinks",
    colors: "Colors",
    verbs: "Verbs",
    places: "Places",
    professions: "Professions",
    clothing: "Clothing",
  }

  let _selectedCategory = null
  let _sidebarCollapsed = false

  /**
   * Get icon for category
   */
  function getIcon(category) {
    return CATEGORY_ICONS[category] || CATEGORY_ICONS.default
  }

  /**
   * Get label for category
   */
  function getLabel(category) {
    return CATEGORY_LABELS[category] || category.charAt(0).toUpperCase() + category.slice(1)
  }

  /**
   * Set selected category
   */
  function setSelected(category) {
    _selectedCategory = category
  }

  /**
   * Get selected category
   */
  function getSelected() {
    return _selectedCategory
  }

  /**
   * Toggle sidebar collapsed state
   */
  function toggleSidebar() {
    _sidebarCollapsed = !_sidebarCollapsed
    return _sidebarCollapsed
  }

  /**
   * Set sidebar collapsed state
   */
  function setSidebarCollapsed(collapsed) {
    _sidebarCollapsed = collapsed
  }

  /**
   * Is sidebar collapsed
   */
  function isSidebarCollapsed() {
    return _sidebarCollapsed
  }

  function getFavoritesCount() {
    if (
      typeof window !== "undefined" &&
      window.FavoritesManager &&
      typeof window.FavoritesManager.count === "function"
    ) {
      return window.FavoritesManager.count()
    }
    return 0
  }

  /**
   * Render categories sidebar
   */
  function renderSidebar(container, categories, selectedLevel = null) {
    const html = `
      <div class="sidebar-header">
        <h3><i class="fas fa-folder-tree"></i> Categories</h3>
        <button class="sidebar-toggle" id="sidebar-toggle" aria-label="Toggle sidebar">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      
      <div class="sidebar-content">
        <button class="category-item ${!_selectedCategory ? "active" : ""}" 
                data-category="" 
                aria-pressed="${!_selectedCategory}">
          <i class="fas fa-globe"></i>
          <span class="category-name">All Categories</span>
          <span class="category-count">${categories.reduce((sum, c) => sum + c.count, 0)}</span>
        </button>
        
        ${categories
          .map((cat) => {
            const levelCount = selectedLevel && cat.levels[selectedLevel] ? cat.levels[selectedLevel] : cat.count
            return `
            <button class="category-item ${_selectedCategory === cat.name ? "active" : ""}" 
                    data-category="${cat.name}"
                    aria-pressed="${_selectedCategory === cat.name}">
              <i class="fas ${getIcon(cat.name)}"></i>
              <span class="category-name">${getLabel(cat.name)}</span>
              <span class="category-count">${levelCount}</span>
            </button>
          `
          })
          .join("")}
      </div>
      
      <div class="sidebar-footer">
        <div class="favorites-summary">
          <i class="fas fa-heart"></i>
          <span>${getFavoritesCount()} favorites</span>
        </div>
      </div>
    `

    container.innerHTML = html
    attachSidebarListeners(container)
  }

  /**
   * Attach sidebar event listeners
   */
  function attachSidebarListeners(container) {
    // Category selection
    container.querySelectorAll(".category-item").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.category || null
        setSelected(category)

        // Update active state
        container.querySelectorAll(".category-item").forEach((b) => {
          b.classList.remove("active")
          b.setAttribute("aria-pressed", "false")
        })
        e.currentTarget.classList.add("active")
        e.currentTarget.setAttribute("aria-pressed", "true")

        // Dispatch event
        window.dispatchEvent(
          new CustomEvent("categoryChanged", {
            detail: { category },
          }),
        )
      })
    })

    // Toggle button
    const toggleBtn = container.querySelector("#sidebar-toggle")
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const collapsed = toggleSidebar()
        window.dispatchEvent(
          new CustomEvent("sidebarToggled", {
            detail: { collapsed },
          }),
        )
      })
    }
  }

  /**
   * Render level tabs
   */
  function renderLevelTabs(container, levels, selectedLevel) {
    const html = levels
      .map(
        (level) => `
      <button class="level-btn ${selectedLevel === level.name ? "active" : ""}" 
              data-level="${level.name}"
              aria-pressed="${selectedLevel === level.name}">
        <span class="lvl-code">${level.name}</span>
        <span class="lvl-count">${level.count}</span>
      </button>
    `,
      )
      .join("")

    container.innerHTML = html
    attachLevelListeners(container)
  }

  /**
   * Attach level tab listeners
   */
  function attachLevelListeners(container) {
    container.querySelectorAll(".level-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const level = e.currentTarget.dataset.level

        // Update active state
        container.querySelectorAll(".level-btn").forEach((b) => {
          b.classList.remove("active")
          b.setAttribute("aria-pressed", "false")
        })
        e.currentTarget.classList.add("active")
        e.currentTarget.setAttribute("aria-pressed", "true")

        // Dispatch event
        window.dispatchEvent(
          new CustomEvent("levelChanged", {
            detail: { level },
          }),
        )
      })
    })
  }

  // Public API
  return {
    getIcon,
    getLabel,
    setSelected,
    getSelected,
    toggleSidebar,
    setSidebarCollapsed,
    isSidebarCollapsed,
    renderSidebar,
    renderLevelTabs,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.CategoriesManager = CategoriesManager
}
