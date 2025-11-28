/**
 * Data Loader Module
 * Handles loading, caching (localStorage with TTL), and accessing dictionary data
 * Now uses embedded data from words-data.js for reliability
 */

const DataLoader = (() => {
  const CACHE_KEY = "german_dictionary_data"
  const CACHE_TTL_KEY = "german_dictionary_ttl"
  const DEFAULT_TTL = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

  let _data = null
  let _isLoaded = false

  /**
   * Check if cached data is still valid
   */
  function isCacheValid() {
    try {
      const ttl = localStorage.getItem(CACHE_TTL_KEY)
      if (!ttl) return false
      return Date.now() < Number.parseInt(ttl, 10)
    } catch (e) {
      console.warn("[DataLoader] Cache check failed:", e)
      return false
    }
  }

  /**
   * Get data from localStorage cache
   */
  function getFromCache() {
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        return JSON.parse(cached)
      }
    } catch (e) {
      console.warn("[DataLoader] Failed to parse cache:", e)
    }
    return null
  }

  /**
   * Save data to localStorage cache with TTL
   */
  function saveToCache(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data))
      localStorage.setItem(CACHE_TTL_KEY, String(Date.now() + DEFAULT_TTL))
    } catch (e) {
      console.warn("[DataLoader] Failed to save cache:", e)
    }
  }

  /**
   * Clear the cache
   */
  function clearCache() {
    try {
      localStorage.removeItem(CACHE_KEY)
      localStorage.removeItem(CACHE_TTL_KEY)
    } catch (e) {
      console.warn("[DataLoader] Failed to clear cache:", e)
    }
  }

  /**
   * Load dictionary data - uses embedded WORDS_DATA from words-data.js
   */
  async function loadData(forceRefresh = false) {
    // Return cached data if available and valid
    if (!forceRefresh && isCacheValid()) {
      const cached = getFromCache()
      if (cached) {
        _data = cached
        _isLoaded = true
        console.log("[DataLoader] Loaded from cache")
        return _data
      }
    }

    try {
      // Check if WORDS_DATA is available (loaded from words-data.js)
      if (typeof window !== "undefined" && window.WORDS_DATA) {
        _data = window.WORDS_DATA
        saveToCache(_data)
        _isLoaded = true
        console.log("[DataLoader] Loaded from embedded data")
        return _data
      }

      // Fallback: try to fetch from file (for server environments)
      const response = await fetch("data/words.json")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      _data = await response.json()
      saveToCache(_data)
      _isLoaded = true
      console.log("[DataLoader] Loaded from network")
      return _data
    } catch (e) {
      console.error("[DataLoader] Failed to load data:", e)
      // Try to use stale cache as fallback
      const staleCache = getFromCache()
      if (staleCache) {
        _data = staleCache
        _isLoaded = true
        console.log("[DataLoader] Using stale cache as fallback")
        return _data
      }
      throw e
    }
  }

  /**
   * Get all words
   */
  function getAllWords() {
    return _data?.words || []
  }

  /**
   * Get words by level
   */
  function getWordsByLevel(level) {
    if (!_data?.words) return []
    return _data.words.filter((w) => w.level === level)
  }

  /**
   * Get words by category
   */
  function getWordsByCategory(category) {
    if (!_data?.words) return []
    return _data.words.filter((w) => w.category === category)
  }

  /**
   * Get words by level and category
   */
  function getWordsByLevelAndCategory(level, category) {
    if (!_data?.words) return []
    return _data.words.filter((w) => w.level === level && w.category === category)
  }

  /**
   * Get unique categories with counts
   */
  function getCategories() {
    if (!_data?.words) return []
    const categories = {}
    _data.words.forEach((w) => {
      if (!categories[w.category]) {
        categories[w.category] = { name: w.category, count: 0, levels: {} }
      }
      categories[w.category].count++
      if (!categories[w.category].levels[w.level]) {
        categories[w.category].levels[w.level] = 0
      }
      categories[w.category].levels[w.level]++
    })
    return Object.values(categories).sort((a, b) => b.count - a.count)
  }

  /**
   * Get unique levels with counts
   */
  function getLevels() {
    if (!_data?.words) return []
    const levels = {}
    _data.words.forEach((w) => {
      if (!levels[w.level]) {
        levels[w.level] = { name: w.level, count: 0 }
      }
      levels[w.level].count++
    })
    return ["A1", "A2", "B1", "B2"].map((l) => levels[l] || { name: l, count: 0 })
  }

  /**
   * Get level info
   */
  function getLevelInfo(level) {
    return _data?.levelInfo?.[level] || null
  }

  /**
   * Get all level info
   */
  function getAllLevelInfo() {
    return _data?.levelInfo || {}
  }

  /**
   * Get exercises by level
   */
  function getExercises(level) {
    return _data?.exercises?.[level] || []
  }

  /**
   * Get a random word (optionally filtered by level)
   */
  function getRandomWord(level = null) {
    const words = level ? getWordsByLevel(level) : getAllWords()
    if (words.length === 0) return null
    return words[Math.floor(Math.random() * words.length)]
  }

  /**
   * Get word by ID
   */
  function getWordById(id) {
    if (!_data?.words) return null
    return _data.words.find((w) => w.id === id) || null
  }

  /**
   * Check if data is loaded
   */
  function isLoaded() {
    return _isLoaded
  }

  /**
   * Get data version
   */
  function getVersion() {
    return _data?.version || "0.0.0"
  }

  // Public API
  return {
    loadData,
    clearCache,
    getAllWords,
    getWordsByLevel,
    getWordsByCategory,
    getWordsByLevelAndCategory,
    getCategories,
    getLevels,
    getLevelInfo,
    getAllLevelInfo,
    getExercises,
    getRandomWord,
    getWordById,
    isLoaded,
    getVersion,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.DataLoader = DataLoader
}
