import legacyData from "./words.json"
import type { DictionaryWord, ExerciseKind, LegacyWord, Lesson, Level, LevelInfo, WordType } from "../types/dictionary"

const grammarNoteByType: Record<WordType, string> = {
  noun: "Check the article and plural form together. German nouns should be learned as a small phrase, not as an isolated word.",
  verb: "Practice the present tense with ich, du, er/sie/es, wir, ihr, and sie forms before using the verb in longer sentences.",
  adj: "Adjectives change their endings depending on article, case, gender, and number.",
  expression: "Expressions are best memorized as complete chunks because word-for-word translation can sound unnatural.",
  adverb: "Adverbs usually modify the verb or the whole sentence and often affect sentence rhythm.",
  preposition: "Prepositions often control the case of the noun that follows them.",
  other: "Review this word in a complete sentence to understand its natural usage.",
}

const frequencyByLevel: Record<Level, number> = {
  A1: 95,
  A2: 78,
  B1: 58,
  B2: 42,
}

const commonalityByLevel: Record<Level, DictionaryWord["commonality"]> = {
  A1: "core",
  A2: "common",
  B1: "useful",
  B2: "advanced",
}

function inferGender(article?: DictionaryWord["article"]): DictionaryWord["gender"] {
  if (article === "der") return "masculine"
  if (article === "die") return "feminine"
  if (article === "das") return "neuter"
  return undefined
}

function enrichWord(word: LegacyWord): DictionaryWord {
  const article = word.article
  const examples =
    word.example_de || word.example_en || word.example_ar
      ? [
          {
            de: word.example_de,
            en: word.example_en || "",
            ar: word.example_ar,
          },
        ]
      : []

  return {
    id: word.id,
    german: word.de,
    article,
    pronunciation: {
      latin: word.pro_en,
      arabic: word.pro_ar,
      audio: word.audio,
    },
    translations: {
      en: word.en,
      ar: word.ar,
    },
    type: word.pos || "other",
    gender: inferGender(article),
    level: word.level,
    category: word.category,
    frequency: frequencyByLevel[word.level] ?? 50,
    commonality: commonalityByLevel[word.level] ?? "useful",
    examples,
    grammarNotes: [grammarNoteByType[word.pos || "other"]],
    synonyms: [],
    antonyms: [],
    relatedWords: word.tags.filter((tag) => tag !== word.category).slice(0, 3),
    wordFamily: [],
    collocations: [],
    idioms: [],
    tags: word.tags,
  }
}

const rawWords = (legacyData as { words: LegacyWord[] }).words

export const words: DictionaryWord[] = rawWords.map(enrichWord)

export const levels: LevelInfo[] = [
  {
    level: "A1",
    title: "Absolute Beginner",
    description: "Essential words, introductions, family, numbers, colors, food, and simple daily language.",
    color: "emerald",
    lessons: [
      lesson("a1-greetings", "Greetings", "greetings", "A1", "Meet people, say hello, and use polite everyday phrases."),
      lesson("a1-family", "Family", "family", "A1", "Describe family members and simple relationships."),
      lesson("a1-numbers", "Numbers", "numbers", "A1", "Count, ask prices, and understand basic quantities."),
      lesson("a1-colors", "Colors", "colors", "A1", "Describe objects with simple color adjectives."),
      lesson("a1-food", "Food", "food", "A1", "Order food and talk about simple meals."),
      lesson("a1-shopping", "Shopping", "shopping", "A1", "Ask for items, prices, and sizes."),
      lesson("a1-time", "Time", "time", "A1", "Talk about days, time, and simple schedules."),
      lesson("a1-transport", "Transportation", "transportation", "A1", "Use travel words for buses, trains, and directions."),
      lesson("a1-routine", "Daily Routine", "routine", "A1", "Describe simple daily actions."),
      lesson("a1-school", "School", "school", "A1", "Use beginner words for class and learning."),
    ],
  },
  {
    level: "A2",
    title: "Elementary",
    description: "Routine tasks, travel, work, health, weather, and short conversations with more detail.",
    color: "sky",
    lessons: [
      lesson("a2-travel", "Travel", "places", "A2", "Book trips, ask directions, and describe locations."),
      lesson("a2-work", "Work", "professions", "A2", "Talk about jobs, schedules, colleagues, and common work needs."),
      lesson("a2-health", "Health", "health", "A2", "Explain symptoms and understand basic pharmacy language."),
      lesson("a2-routines", "Daily Routines", "verbs", "A2", "Describe habits and past routine events."),
    ],
  },
  {
    level: "B1",
    title: "Intermediate",
    description: "Opinions, experiences, plans, stories, culture, technology, and longer everyday texts.",
    color: "amber",
    lessons: [
      lesson("b1-opinions", "Opinions", "verbs", "B1", "Explain what you think and support your ideas."),
      lesson("b1-technology", "Technology", "technology", "B1", "Discuss common digital tools and media."),
      lesson("b1-culture", "Culture", "culture", "B1", "Talk about traditions, holidays, and public life."),
    ],
  },
  {
    level: "B2",
    title: "Upper Intermediate",
    description: "Complex texts, academic vocabulary, professional topics, argumentation, and fluent expression.",
    color: "violet",
    lessons: [
      lesson("b2-academic", "Academic German", "academic", "B2", "Use structured language for study and formal writing."),
      lesson("b2-professional", "Professional German", "professional", "B2", "Handle meetings, reports, and workplace discussions."),
      lesson("b2-arguments", "Arguments", "verbs", "B2", "Build precise arguments with nuance and connectors."),
    ],
  },
]

function lesson(id: string, title: string, category: string, level: Level, description: string): Lesson {
  const exerciseKinds: ExerciseKind[] = [
    "multiple-choice",
    "fill-blank",
    "match",
    "listening",
    "pronunciation",
    "translation",
    "sentence-building",
    "word-ordering",
  ]

  return {
    id,
    title,
    category,
    level,
    description,
    skills: ["Vocabulary", "Grammar", "Listening", "Reading", "Flashcards", "Quiz"],
    exerciseKinds,
  }
}

export const categories = Array.from(new Set(words.map((word) => word.category))).sort()
