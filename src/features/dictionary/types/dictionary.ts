export type Level = "A1" | "A2" | "B1" | "B2"

export type WordType = "noun" | "verb" | "adj" | "expression" | "adverb" | "preposition" | "other"

export type ExerciseKind =
  | "multiple-choice"
  | "fill-blank"
  | "match"
  | "listening"
  | "pronunciation"
  | "translation"
  | "sentence-building"
  | "word-ordering"

export interface LegacyWord {
  id: string
  de: string
  lemma?: string
  article?: "der" | "die" | "das"
  pro_en: string
  pro_ar: string
  en: string
  ar: string
  example_de: string
  example_en?: string
  example_ar: string
  pos: WordType
  category: string
  level: Level
  tags: string[]
  audio: string | null
  source?: string
  quality?: string
}

export interface ExampleSet {
  de: string
  en: string
  ar: string
}

export interface DictionaryWord {
  id: string
  german: string
  article?: "der" | "die" | "das"
  plural?: string
  pronunciation: {
    latin: string
    arabic: string
    ipa?: string
    audio?: string | null
  }
  translations: {
    en: string
    ar: string
  }
  type: WordType
  gender?: "masculine" | "feminine" | "neuter"
  level: Level
  category: string
  frequency: number
  commonality: "core" | "common" | "useful" | "advanced"
  examples: ExampleSet[]
  grammarNotes: string[]
  synonyms: string[]
  antonyms: string[]
  relatedWords: string[]
  wordFamily: string[]
  collocations: string[]
  idioms: string[]
  tags: string[]
}

export interface LevelInfo {
  level: Level
  title: string
  description: string
  color: string
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  category: string
  level: Level
  description: string
  skills: string[]
  exerciseKinds: ExerciseKind[]
}
