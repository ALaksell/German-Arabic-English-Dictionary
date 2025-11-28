/**
 * Search Module
 * Handles debounced search, multi-field tokenized search, suggestions, and history
 */

const SearchEngine = (() => {
  const HISTORY_KEY = "german_dictionary_search_history"
  const MAX_HISTORY = 20
  const MAX_SUGGESTIONS = 6
  const DEBOUNCE_DELAY = 250

  let _debounceTimer = null
  let _searchHistory = []
  let _lastQuery = ""
  let _currentScope = "all" // 'all', 'category', 'level'
  let _currentCategory = null
  let _currentLevel = null

  /**
   * Initialize search module
   */
  function init() {
    loadHistory()
  }

  /**
   * Load search history from localStorage
   */
  function loadHistory() {
    try {
      const stored = localStorage.getItem(HISTORY_KEY)
      if (stored) {
        _searchHistory = JSON.parse(stored)
      }
    } catch (e) {
      console.warn("[SearchEngine] Failed to load history:", e)
      _searchHistory = []
    }
  }

  /**
   * Save search history to localStorage
   */
  function saveHistory() {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(_searchHistory))
    } catch (e) {
      console.warn("[SearchEngine] Failed to save history:", e)
    }
  }

  /**
   * Add query to history
   */
  function addToHistory(query) {
    if (!query || query.length < 2) return

    // Remove if already exists
    _searchHistory = _searchHistory.filter((h) => h.toLowerCase() !== query.toLowerCase())

    // Add to front
    _searchHistory.unshift(query)

    // Trim to max length
    if (_searchHistory.length > MAX_HISTORY) {
      _searchHistory = _searchHistory.slice(0, MAX_HISTORY)
    }

    saveHistory()
  }

  /**
   * Get search history
   */
  function getHistory() {
    return [..._searchHistory]
  }

  /**
   * Clear search history
   */
  function clearHistory() {
    _searchHistory = []
    saveHistory()
  }

  /**
   * Set search scope
   */
  function setScope(scope, category = null, level = null) {
    _currentScope = scope
    _currentCategory = category
    _currentLevel = level
  }

  /**
   * Tokenize a search query
   */
  function tokenize(query) {
    return query
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter((t) => t.length > 0)
  }

  /**
   * Check if text matches all tokens
   */
  function matchesAllTokens(text, tokens) {
    if (!text) return false
    const lowerText = text.toLowerCase()
    return tokens.every((token) => lowerText.includes(token))
  }

  /**
   * Calculate match score for ranking
   */
  function calculateScore(word, tokens) {
    let score = 0
    const query = tokens.join(" ")

    // Exact match in German word (highest priority)
    if (word.de.toLowerCase() === query) score += 100
    else if (word.de.toLowerCase().startsWith(query)) score += 50
    else if (word.de.toLowerCase().includes(query)) score += 25

    // Match in English
    if (word.en.toLowerCase() === query) score += 80
    else if (word.en.toLowerCase().includes(query)) score += 20

    // Match in Arabic
    if (word.ar.includes(query)) score += 70

    // Token matches in various fields
    tokens.forEach((token) => {
      if (word.de.toLowerCase().includes(token)) score += 10
      if (word.en.toLowerCase().includes(token)) score += 8
      if (word.ar.includes(token)) score += 8
      if (word.example_de?.toLowerCase().includes(token)) score += 3
      if (word.example_ar?.includes(token)) score += 3
      if (word.category.toLowerCase().includes(token)) score += 5
      if (word.level.toLowerCase().includes(token)) score += 5
      if (word.tags?.some((t) => t.toLowerCase().includes(token))) score += 4
    })

    return score
  }

  /**
   * Search words based on query and current scope
   */
  function search(query, allWords) {
    if (!query || query.trim().length === 0) {
      return { results: allWords, query: "", highlighted: false }
    }

    const tokens = tokenize(query)
    if (tokens.length === 0) {
      return { results: allWords, query: "", highlighted: false }
    }

    // Filter words based on scope
    let words = allWords
    if (_currentScope === "category" && _currentCategory) {
      words = words.filter((w) => w.category === _currentCategory)
    } else if (_currentScope === "level" && _currentLevel) {
      words = words.filter((w) => w.level === _currentLevel)
    }

    // Search across multiple fields
    const results = words.filter((word) => {
      const searchableText = [
        word.de,
        word.en,
        word.ar,
        word.pro_en,
        word.pro_ar,
        word.example_de,
        word.example_ar,
        word.category,
        word.level,
        ...(word.tags || []),
      ].join(" ")

      return matchesAllTokens(searchableText, tokens)
    })

    // Sort by relevance score
    results.sort((a, b) => calculateScore(b, tokens) - calculateScore(a, tokens))

    return {
      results,
      query: tokens.join(" "),
      highlighted: true,
      totalMatches: results.length,
    }
  }

  /**
   * Get search suggestions based on partial query
   */
  function getSuggestions(query, allWords) {
    if (!query || query.length < 1) {
      // Return recent searches if no query
      return _searchHistory.slice(0, MAX_SUGGESTIONS).map((h) => ({
        text: h,
        type: "history",
      }))
    }

    const tokens = tokenize(query)
    if (tokens.length === 0) return []

    const suggestions = []
    const seen = new Set()

    // Add matching German words
    allWords.forEach((word) => {
      if (suggestions.length >= MAX_SUGGESTIONS) return

      const lowerDe = word.de.toLowerCase()
      const lowerQuery = query.toLowerCase()

      if (lowerDe.startsWith(lowerQuery) && !seen.has(lowerDe)) {
        seen.add(lowerDe)
        suggestions.push({
          text: word.de,
          type: "word",
          level: word.level,
          category: word.category,
        })
      }
    })

    // Add matching English words
    if (suggestions.length < MAX_SUGGESTIONS) {
      allWords.forEach((word) => {
        if (suggestions.length >= MAX_SUGGESTIONS) return

        const lowerEn = word.en.toLowerCase()
        const lowerQuery = query.toLowerCase()

        if (lowerEn.startsWith(lowerQuery) && !seen.has(lowerEn)) {
          seen.add(lowerEn)
          suggestions.push({
            text: word.en,
            type: "translation",
            german: word.de,
          })
        }
      })
    }

    // Add matching from history
    if (suggestions.length < MAX_SUGGESTIONS) {
      _searchHistory.forEach((h) => {
        if (suggestions.length >= MAX_SUGGESTIONS) return
        if (h.toLowerCase().includes(query.toLowerCase()) && !seen.has(h.toLowerCase())) {
          seen.add(h.toLowerCase())
          suggestions.push({
            text: h,
            type: "history",
          })
        }
      })
    }

    return suggestions
  }

  /**
   * Highlight search terms in text
   */
  function highlightText(text, query, isArabic = false) {
    if (!text || !query) return text

    const tokens = tokenize(query)
    if (tokens.length === 0) return text

    let result = text
    tokens.forEach((token) => {
      const regex = new RegExp(`(${escapeRegex(token)})`, "gi")
      result = result.replace(regex, '<mark class="search-highlight">$1</mark>')
    })

    return result
  }

  /**
   * Escape special regex characters
   */
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }

  /**
   * Debounced search function
   */
  function debouncedSearch(query, allWords, callback) {
    clearTimeout(_debounceTimer)
    _debounceTimer = setTimeout(() => {
      const results = search(query, allWords)
      _lastQuery = query
      callback(results)
    }, DEBOUNCE_DELAY)
  }

  /**
   * Get friendly suggestions for no results
   */
  function getNoResultsSuggestions(query, allWords) {
    const suggestions = []

    // Suggest similar words
    const tokens = tokenize(query)
    if (tokens.length > 0) {
      const firstToken = tokens[0]
      const similar = allWords
        .filter((w) => {
          const de = w.de.toLowerCase()
          // Check for partial match or similar start
          return de.startsWith(firstToken.slice(0, 2)) || levenshteinDistance(de, firstToken) <= 2
        })
        .slice(0, 3)

      if (similar.length > 0) {
        suggestions.push({
          type: "similar",
          text: "Did you mean:",
          items: similar.map((w) => w.de),
        })
      }
    }

    // Suggest browsing categories
    suggestions.push({
      type: "browse",
      text: "Try browsing by category or level",
    })

    // Suggest clearing filters
    if (_currentScope !== "all") {
      suggestions.push({
        type: "scope",
        text: 'Try searching in "All" instead of current filter',
      })
    }

    return suggestions
  }

  /**
   * Simple Levenshtein distance for fuzzy matching
   */
  function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length
    if (b.length === 0) return a.length

    const matrix = []
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i]
    }
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j
    }

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1]
        } else {
          matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        }
      }
    }

    return matrix[b.length][a.length]
  }

  // Initialize on load
  init()

  // Public API
  return {
    search,
    debouncedSearch,
    getSuggestions,
    highlightText,
    addToHistory,
    getHistory,
    clearHistory,
    setScope,
    getNoResultsSuggestions,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.SearchEngine = SearchEngine
}
