export type WordType = "noun" | "verb" | "adj" | "expression" | "adverb" | "preposition" | "other"

export interface LegacyWord {
  id: string
  de: string
  article?: "der" | "die" | "das"
  en: string
  ar: string
  example_de?: string
  example_en?: string
  example_ar?: string
  pos: WordType
  category: string
  tags?: string[]
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
  translations: {
    en: string
    ar: string
  }
  type: WordType
  category: string
  examples: ExampleSet[]
  tags: string[]
}

export interface CategorySummary {
  category: string
  count: number
}
