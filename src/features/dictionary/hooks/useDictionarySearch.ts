import { useMemo } from "react"
import Fuse from "fuse.js"
import { words } from "../data/dictionary"
import type { DictionaryWord } from "../types/dictionary"

export function useDictionarySearch(query: string, category: string) {
  const filteredWords = useMemo(() => {
    return words.filter((word) => {
      const categoryMatch = category === "all" || word.category === category
      return categoryMatch
    })
  }, [category])

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
