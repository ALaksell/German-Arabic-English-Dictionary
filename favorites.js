/**
 * Favorites Module
 * Handles saving, loading, and managing favorite words
 */

const FavoritesManager = (() => {
  const STORAGE_KEY = "german_dictionary_favorites"
  let _favorites = new Set()

  /**
   * Initialize favorites from localStorage
   */
  function init() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const arr = JSON.parse(stored)
        _favorites = new Set(arr)
      }
    } catch (e) {
      console.warn("[FavoritesManager] Failed to load favorites:", e)
      _favorites = new Set()
    }
  }

  /**
   * Save favorites to localStorage
   */
  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([..._favorites]))
    } catch (e) {
      console.warn("[FavoritesManager] Failed to save favorites:", e)
    }
  }

  /**
   * Add a word to favorites
   */
  function add(wordId) {
    _favorites.add(wordId)
    save()
    dispatchChange()
  }

  /**
   * Remove a word from favorites
   */
  function remove(wordId) {
    _favorites.delete(wordId)
    save()
    dispatchChange()
  }

  /**
   * Toggle favorite status
   */
  function toggle(wordId) {
    if (_favorites.has(wordId)) {
      remove(wordId)
      return false
    } else {
      add(wordId)
      return true
    }
  }

  /**
   * Check if a word is favorited
   */
  function isFavorite(wordId) {
    return _favorites.has(wordId)
  }

  /**
   * Get all favorite word IDs
   */
  function getAll() {
    return [..._favorites]
  }

  /**
   * Get favorite words with full data
   */
  function getAllWithData(allWords) {
    return allWords.filter((w) => _favorites.has(w.id))
  }

  /**
   * Get favorites count
   */
  function count() {
    return _favorites.size
  }

  /**
   * Clear all favorites
   */
  function clear() {
    _favorites.clear()
    save()
    dispatchChange()
  }

  /**
   * Export favorites as JSON
   */
  function exportToJSON(allWords) {
    const favoriteWords = getAllWithData(allWords)
    return JSON.stringify(
      {
        version: "1.0",
        exportDate: new Date().toISOString(),
        favorites: favoriteWords,
      },
      null,
      2,
    )
  }

  /**
   * Import favorites from JSON
   */
  function importFromJSON(jsonString, allWords) {
    try {
      const data = JSON.parse(jsonString)
      if (!data.favorites || !Array.isArray(data.favorites)) {
        throw new Error("Invalid format")
      }

      // Get valid word IDs from imported data
      const validIds = new Set(allWords.map((w) => w.id))
      const importedIds = data.favorites.map((w) => w.id).filter((id) => validIds.has(id))

      // Add imported favorites
      importedIds.forEach((id) => _favorites.add(id))
      save()
      dispatchChange()

      return {
        success: true,
        imported: importedIds.length,
        total: data.favorites.length,
      }
    } catch (e) {
      console.error("[FavoritesManager] Import failed:", e)
      return {
        success: false,
        error: e.message,
      }
    }
  }

  /**
   * Dispatch change event
   */
  function dispatchChange() {
    window.dispatchEvent(
      new CustomEvent("favoritesChanged", {
        detail: { count: _favorites.size },
      }),
    )
  }

  // Initialize on load
  init()

  // Public API
  return {
    add,
    remove,
    toggle,
    isFavorite,
    getAll,
    getAllWithData,
    count,
    clear,
    exportToJSON,
    importFromJSON,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.FavoritesManager = FavoritesManager
}
