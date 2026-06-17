import fs from "node:fs"
import path from "node:path"

const reviewPath = process.env.ARABIC_REVIEW_FILE

if (!reviewPath) {
  throw new Error("Set ARABIC_REVIEW_FILE to the corrected review JSON path.")
}

const wordsPath = path.join(process.cwd(), "src", "features", "dictionary", "data", "words.json")
const metaPath = path.join(process.cwd(), "src", "features", "dictionary", "data", "meta.json")

const currentData = JSON.parse(fs.readFileSync(wordsPath, "utf8"))
const reviewData = JSON.parse(fs.readFileSync(reviewPath, "utf8"))

if (!Array.isArray(currentData.words) || !Array.isArray(reviewData.words)) {
  throw new Error("Both the current data file and review file must contain a words array.")
}

const currentById = new Map(currentData.words.map((word) => [word.id, word]))
const mergedWords = []
let correctedTranslations = 0
let addedWords = 0

function cleanText(value) {
  return typeof value === "string" ? value.trim() : ""
}

function buildWordFromReview(reviewWord) {
  const arabicCorrected = cleanText(reviewWord.arabicCorrected)
  const arabicCurrent = cleanText(reviewWord.arabicCurrent)
  const arabic = arabicCorrected || arabicCurrent

  const word = {
    id: cleanText(reviewWord.id),
    de: cleanText(reviewWord.german),
    en: cleanText(reviewWord.english),
    ar: arabic,
    pos: cleanText(reviewWord.partOfSpeech) || "word",
    category: cleanText(reviewWord.category) || "General",
    tags: Array.isArray(reviewWord.tags) ? reviewWord.tags.map(cleanText).filter(Boolean) : [],
  }

  const article = cleanText(reviewWord.article)
  if (article) word.article = article

  const examples = Array.isArray(reviewWord.examples)
    ? reviewWord.examples
        .map((example) => ({
          de: cleanText(example.german),
          en: cleanText(example.english),
          ar: cleanText(example.arabicCorrected) || cleanText(example.arabicCurrent),
        }))
        .filter((example) => example.de || example.en || example.ar)
    : []

  if (examples.length) word.examples = examples

  return word
}

for (const reviewWord of reviewData.words) {
  const reviewId = cleanText(reviewWord.id)
  if (!reviewId) continue

  const existing = currentById.get(reviewId)
  const nextWord = buildWordFromReview(reviewWord)

  if (existing) {
    const correctedArabic = cleanText(reviewWord.arabicCorrected)
    if (correctedArabic && correctedArabic !== existing.ar) correctedTranslations += 1
    mergedWords.push({
      ...existing,
      ar: nextWord.ar || existing.ar,
      examples: nextWord.examples || existing.examples,
    })
  } else {
    addedWords += 1
    mergedWords.push(nextWord)
  }
}

const categoryCounts = mergedWords.reduce((counts, word) => {
  counts[word.category] = (counts[word.category] || 0) + 1
  return counts
}, {})

const sortedCategoryCounts = Object.fromEntries(Object.entries(categoryCounts).sort(([a], [b]) => a.localeCompare(b)))

const nextData = {
  ...currentData,
  version: "2.3.0",
  lastUpdated: "2026-06-17",
  importPolicy:
    "Clean master entries plus missing categories, followed by user-reviewed Modern Standard Arabic corrections and curated additions.",
  sourceSummary: {
    ...currentData.sourceSummary,
    importedEntries: mergedWords.length,
    arabicCorrectionsApplied: correctedTranslations,
    userReviewedAdditions: addedWords,
    categoryCounts: sortedCategoryCounts,
  },
  words: mergedWords,
}

const nextMeta = {
  version: nextData.version,
  lastUpdated: nextData.lastUpdated,
  importedEntries: mergedWords.length,
  categoryCounts: sortedCategoryCounts,
  rejectedRows: currentData.sourceSummary?.rejectedRows ?? 0,
  duplicateMeaningsSkipped: currentData.sourceSummary?.duplicateMeaningsSkipped ?? 0,
  arabicCorrectionsApplied: correctedTranslations,
  userReviewedAdditions: addedWords,
}

fs.writeFileSync(wordsPath, `${JSON.stringify(nextData, null, 2)}\n`, "utf8")
fs.writeFileSync(metaPath, `${JSON.stringify(nextMeta, null, 2)}\n`, "utf8")

console.log(
  JSON.stringify(
    {
      mergedWords: mergedWords.length,
      correctedTranslations,
      addedWords,
      categories: Object.keys(sortedCategoryCounts).length,
    },
    null,
    2,
  ),
)
