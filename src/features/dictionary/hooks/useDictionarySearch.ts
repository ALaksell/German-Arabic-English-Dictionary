import { useMemo } from "react"
import Fuse from "fuse.js"
import { words } from "../data/dictionary"
import type { DictionaryWord, Level } from "../types/dictionary"

export function useDictionarySearch(query: string, level: Level | "all", category: string) {
  const filteredWords = useMemo(() => {
    return words.filter((word) => {
      const levelMatch = level === "all" || word.level === level
      const categoryMatch = category === "all" || word.category === category
      return levelMatch && categoryMatch
    })
  }, [category, level])

  const fuse = useMemo(() => {
    return new Fuse(filteredWords, {
      threshold: 0.32,
      includeScore: true,
      keys: [
        "german",
        "translations.en",
        "translations.ar",
        "pronunciation.latin",
        "pronunciation.arabic",
        "category",
        "type",
        "level",
        "tags",
        "examples.de",
        "examples.en",
        "examples.ar",
      ],
    })
  }, [filteredWords])

  const results = useMemo<DictionaryWord[]>(() => {
    if (!query.trim()) return filteredWords
    return fuse.search(query).map((result) => result.item)
  }, [filteredWords, fuse, query])

  const suggestions = useMemo(() => {
    const source = query.trim() ? results : filteredWords
    return source.slice(0, 7).flatMap((word) => [word.german, word.translations.en, word.translations.ar]).slice(0, 8)
  }, [filteredWords, query, results])

  return { results, suggestions, total: filteredWords.length }
}
