import { useMemo } from "react"
import Fuse from "fuse.js"
import { words } from "../data/dictionary"
import type { DictionaryWord } from "../types/dictionary"

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
}

function editDistance(first: string, second: string) {
  const a = normalize(first)
  const b = normalize(second)
  if (!a || !b) return Number.POSITIVE_INFINITY

  const dp = Array.from({ length: a.length + 1 }, (_, index) => index)

  for (let i = 1; i <= b.length; i += 1) {
    let previous = dp[0]
    dp[0] = i

    for (let j = 1; j <= a.length; j += 1) {
      const temp = dp[j]
      dp[j] =
        b[i - 1] === a[j - 1]
          ? previous
          : Math.min(previous + 1, dp[j] + 1, dp[j - 1] + 1)
      previous = temp
    }
  }

  return dp[a.length]
}

function isNearMatch(query: string, candidate: string) {
  const cleanQuery = normalize(query)
  const cleanCandidate = normalize(candidate)
  if (cleanQuery.length < 3 || cleanCandidate.length < 3) return false
  const distance = editDistance(cleanQuery, cleanCandidate)
  return distance <= Math.max(2, Math.floor(cleanQuery.length * 0.28))
}

function hasExactMatch(query: string, word: DictionaryWord) {
  const cleanQuery = normalize(query)
  return [word.german, word.translations.en, word.translations.ar].some((value) => normalize(value) === cleanQuery)
}

export function useDictionarySearch(query: string, category: string) {
  const trimmedQuery = query.trim()

  const filteredWords = useMemo(() => {
    if (category === "all") return words
    return words.filter((word) => word.category === category)
  }, [category])

  const fuse = useMemo(() => {
    return new Fuse(filteredWords, {
      threshold: 0.36,
      distance: 80,
      ignoreLocation: true,
      includeScore: true,
      minMatchCharLength: 2,
      keys: [
        { name: "german", weight: 0.42 },
        { name: "translations.ar", weight: 0.28 },
        { name: "translations.en", weight: 0.2 },
        { name: "category", weight: 0.05 },
        { name: "type", weight: 0.03 },
        { name: "tags", weight: 0.02 },
      ],
    })
  }, [filteredWords])

  const search = useMemo(() => {
    if (!trimmedQuery) {
      return {
        results: filteredWords,
        didYouMean: null as string | null,
        exactMatch: false,
      }
    }

    const rawResults = fuse.search(trimmedQuery, { limit: 240 })
    const confidentResults = rawResults.filter((result) => (result.score ?? 1) <= 0.38)
    const exactMatch = filteredWords.some((word) => hasExactMatch(trimmedQuery, word))
    const best = rawResults[0]?.item
    const didYouMean =
      !exactMatch &&
      best &&
      (isNearMatch(trimmedQuery, best.german) || isNearMatch(trimmedQuery, best.translations.en))
        ? best.german
        : null

    return {
      results: confidentResults.map((result) => result.item),
      didYouMean,
      exactMatch,
    }
  }, [filteredWords, fuse, trimmedQuery])

  const suggestions = useMemo(() => {
    if (!trimmedQuery) return []
    const unique = new Set<string>()
    for (const word of search.results.slice(0, 8)) {
      unique.add(word.german)
      if (unique.size >= 5) break
    }
    return [...unique]
  }, [search.results, trimmedQuery])

  return {
    results: search.results,
    suggestions,
    didYouMean: search.didYouMean,
    hasQuery: Boolean(trimmedQuery),
    total: filteredWords.length,
  }
}
