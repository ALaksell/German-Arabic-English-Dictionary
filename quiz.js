/**
 * Quiz Generator Module
 * Generates quizzes based on level
 */

const QuizGenerator = (() => {
  /**
   * Generate a quiz for a specific level
   */
  function generateQuiz(words, numQuestions = 5) {
    if (!words || words.length < 4) {
      return []
    }

    const shuffled = shuffleArray([...words])
    const questions = []
    const usedWords = new Set()

    for (let i = 0; i < Math.min(numQuestions, shuffled.length); i++) {
      const word = shuffled[i]
      if (usedWords.has(word.id)) continue
      usedWords.add(word.id)

      // Randomly choose question type
      const questionType = Math.floor(Math.random() * 3)
      let question

      switch (questionType) {
        case 0:
          question = createGermanToEnglish(word, shuffled)
          break
        case 1:
          question = createEnglishToGerman(word, shuffled)
          break
        case 2:
          question = createGermanToArabic(word, shuffled)
          break
        default:
          question = createGermanToEnglish(word, shuffled)
      }

      if (question) {
        questions.push(question)
      }
    }

    return questions
  }

  /**
   * Create German to English question
   */
  function createGermanToEnglish(word, allWords) {
    const options = getRandomOptions(word, allWords, "en", 4)
    const correctIndex = options.findIndex((o) => o === word.en)

    return {
      type: "german-to-english",
      question: `What does "${word.de}" mean in English?`,
      questionAr: `ماذا تعني "${word.de}" بالإنجليزية؟`,
      german: word.de,
      options: options,
      correct: correctIndex,
      wordId: word.id,
    }
  }

  /**
   * Create English to German question
   */
  function createEnglishToGerman(word, allWords) {
    const options = getRandomOptions(word, allWords, "de", 4)
    const correctIndex = options.findIndex((o) => o === word.de)

    return {
      type: "english-to-german",
      question: `How do you say "${word.en}" in German?`,
      questionAr: `كيف تقول "${word.en}" بالألمانية؟`,
      english: word.en,
      options: options,
      correct: correctIndex,
      wordId: word.id,
    }
  }

  /**
   * Create German to Arabic question
   */
  function createGermanToArabic(word, allWords) {
    const options = getRandomOptions(word, allWords, "ar", 4)
    const correctIndex = options.findIndex((o) => o === word.ar)

    return {
      type: "german-to-arabic",
      question: `What does "${word.de}" mean in Arabic?`,
      questionAr: `ماذا تعني "${word.de}" بالعربية؟`,
      german: word.de,
      options: options,
      correct: correctIndex,
      wordId: word.id,
    }
  }

  /**
   * Get random options including the correct answer
   */
  function getRandomOptions(correctWord, allWords, field, count) {
    const correct = correctWord[field]
    const options = [correct]
    const shuffled = shuffleArray([...allWords])

    for (const word of shuffled) {
      if (options.length >= count) break
      if (word.id !== correctWord.id && word[field] && !options.includes(word[field])) {
        options.push(word[field])
      }
    }

    // Fill with placeholder if not enough options
    while (options.length < count) {
      options.push(`Option ${options.length + 1}`)
    }

    return shuffleArray(options)
  }

  /**
   * Shuffle array (Fisher-Yates)
   */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  /**
   * Calculate score
   */
  function calculateScore(answers, questions) {
    let correct = 0
    answers.forEach((answer, index) => {
      if (answer === questions[index].correct) {
        correct++
      }
    })
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
    }
  }

  // Public API
  return {
    generateQuiz,
    calculateScore,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.QuizGenerator = QuizGenerator
}
