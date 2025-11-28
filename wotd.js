/**
 * Word of the Day Module
 * Rotates word of the day based on date
 */

const WordOfTheDay = (() => {
  const STORAGE_KEY = "german_dictionary_wotd"

  /**
   * Get word of the day
   */
  function getWordOfTheDay(allWords) {
    if (!allWords || allWords.length === 0) return null

    // Get today's date string
    const today = new Date().toISOString().split("T")[0]

    // Check if we have a stored WOTD for today
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        if (data.date === today && data.wordId) {
          const word = allWords.find((w) => w.id === data.wordId)
          if (word) return word
        }
      }
    } catch (e) {
      console.warn("[WOTD] Failed to load stored WOTD:", e)
    }

    // Generate new WOTD based on date hash
    const dateHash = hashDate(today)
    const index = dateHash % allWords.length
    const word = allWords[index]

    // Store for today
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          date: today,
          wordId: word.id,
        }),
      )
    } catch (e) {
      console.warn("[WOTD] Failed to save WOTD:", e)
    }

    return word
  }

  /**
   * Simple hash function for date string
   */
  function hashDate(dateStr) {
    let hash = 0
    for (let i = 0; i < dateStr.length; i++) {
      const char = dateStr.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash
    }
    return Math.abs(hash)
  }

  /**
   * Get history of past words of the day (last 7 days)
   */
  function getRecentWords(allWords, days = 7) {
    const words = []
    const today = new Date()

    for (let i = 0; i < days; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split("T")[0]
      const hash = hashDate(dateStr)
      const index = hash % allWords.length
      words.push({
        date: dateStr,
        word: allWords[index],
      })
    }

    return words
  }

  // Public API
  return {
    getWordOfTheDay,
    getRecentWords,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.WordOfTheDay = WordOfTheDay
}
