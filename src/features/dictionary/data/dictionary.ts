import legacyData from "./words.json"
import type { CategorySummary, DictionaryWord, LegacyWord } from "../types/dictionary"

function enrichWord(word: LegacyWord): DictionaryWord {
  const examples =
    word.example_de || word.example_en || word.example_ar
      ? [
          {
            de: word.example_de ?? "",
            en: word.example_en ?? "",
            ar: word.example_ar ?? "",
          },
        ]
      : []

  return {
    id: word.id,
    german: word.de,
    article: word.article,
    translations: {
      en: word.en,
      ar: word.ar,
    },
    type: word.pos || "other",
    category: word.category,
    examples,
    tags: word.tags ?? [],
  }
}

const rawWords = (legacyData as { words: LegacyWord[] }).words

export const words: DictionaryWord[] = rawWords.map(enrichWord)

const counts = new Map<string, number>()

for (const word of words) {
  counts.set(word.category, (counts.get(word.category) ?? 0) + 1)
}

export const categorySummaries: CategorySummary[] = [...counts.entries()]
  .map(([category, count]) => ({ category, count }))
  .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category, "en"))

export const categories = categorySummaries.map((item) => item.category)
