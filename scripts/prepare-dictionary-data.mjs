/* eslint-disable no-misleading-character-class */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const sourcesDir = path.join(root, "sources")
const outputPath = path.join(root, "src", "features", "dictionary", "data", "words.json")
const docsDir = path.join(root, "docs")
const reportPath = path.join(docsDir, "source-audit.md")
const generatedDate = "2026-06-16"

const sourceFiles = {
  cleanMaster: "german_dictionary_master.json",
  ponsReady: "pons_dictionary_ready_trilingual.json",
  ponsReview: "pons_dictionary_review_queue.json",
  ponsMaster: "german_dictionary_master_with_pons.json",
}

const missingCategoriesPath = process.env.MISSING_CATEGORIES_FILE
  ? path.resolve(process.env.MISSING_CATEGORIES_FILE)
  : path.join(sourcesDir, "missing_categories_combined_ready.json")
const invalidArabicCharacterPattern = new RegExp(
  "[^\\u0621-\\u064A\\u064B\\u064C\\u064D\\u064E\\u064F\\u0650\\u0651\\u0652\\u0653\\u0654\\u0655\\u0656\\u0657\\u0658\\u0659\\u065A\\u065B\\u065C\\u065D\\u065E\\u065F\\u0660-\\u06690-9\\s.,!?\\u061F\\u060C\\u061B:()\\-/%+]",
  "u",
)

function cleanText(value) {
  return String(value ?? "")
    .normalize("NFC")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeKey(value) {
  return cleanText(value).toLowerCase()
}

function fixCommonGermanEncoding(value) {
  return cleanText(value)
    .replace(/Ã¤/g, "ä")
    .replace(/Ã¶/g, "ö")
    .replace(/Ã¼/g, "ü")
    .replace(/Ã„/g, "Ä")
    .replace(/Ã–/g, "Ö")
    .replace(/Ãœ/g, "Ü")
    .replace(/ÃŸ/g, "ß")
    .replace(/â€™/g, "'")
    .replace(/â€“/g, "-")
}

const manualCorrectionList = [
  ["Auf Wiedersehen.", { ar: "مع السلامة", en: "Goodbye." }],
  ["Geburtsort", { ar: "مكان الميلاد", en: "place of birth" }],
  ["Viel Glück!", { ar: "حظا سعيدا!", en: "Good luck!" }],
  ["Ich bin mit meinen Kindern hier.", { ar: "أنا هنا مع أطفالي." }],
  ["Kann ich Ihre E-Mail-Adresse haben?", { ar: "هل يمكنني الحصول على عنوان بريدك الإلكتروني؟" }],
  ["Hallo!", { ar: "أهلا!", en: "Hello!" }],
  ["Hallol", { de: "Hallo!", ar: "مرحبا!", en: "Hello!" }],
  ["das Madchen", { de: "Mädchen", article: "das", ar: "فتاة", en: "girl" }],
  ["Tschüss’", { de: "Tschüss", ar: "وداعا", en: "bye" }],
]

const manualCorrections = new Map(
  manualCorrectionList.map(([german, correction]) => [normalizeKey(fixCommonGermanEncoding(german)), correction]),
)

function getCorrection(german) {
  return manualCorrections.get(normalizeKey(fixCommonGermanEncoding(german))) ?? {}
}

function readJsonFromPath(fullPath, fallback) {
  if (!fullPath || !fs.existsSync(fullPath)) return fallback
  return JSON.parse(fs.readFileSync(fullPath, "utf8"))
}

function readSource(fileName) {
  return readJsonFromPath(path.join(sourcesDir, fileName), [])
}

function isArticle(value) {
  return ["der", "die", "das"].includes(normalizeKey(value))
}

function normalizeArticle(row, german) {
  const article = cleanText(row.article).toLowerCase()
  if (isArticle(article)) return article
  const match = cleanText(german).match(/^(der|die|das)\s+/i)
  return match ? match[1].toLowerCase() : ""
}

function stripArticle(german, article, lemma) {
  const cleanGerman = fixCommonGermanEncoding(german).replace(/^\d+-\d+\s+/, "")
  const cleanLemma = fixCommonGermanEncoding(lemma).replace(/^\d+-\d+\s+/, "")
  if (article && cleanLemma && normalizeKey(cleanLemma) !== normalizeKey(article)) {
    return cleanLemma.replace(new RegExp(`^${article}\\s+`, "i"), "").trim()
  }
  if (article) return cleanGerman.replace(new RegExp(`^${article}\\s+`, "i"), "").trim()
  return cleanGerman
}

function mapType(type, category, article, english, german) {
  const value = normalizeKey(type)
  const categoryKey = normalizeKey(category)
  const englishKey = normalizeKey(english)
  const germanText = cleanText(german)

  if (value === "noun") return "noun"
  if (value === "verb") return "verb"
  if (value === "adjective" || value === "adj") return "adj"
  if (value === "adverb") return "adverb"
  if (value === "preposition") return "preposition"
  if (value === "phrase" || value === "expression" || value === "question" || value === "answer") return "expression"
  if (article) return "noun"
  if (categoryKey.includes("adjective") || categoryKey.includes("colors")) return "adj"
  if (categoryKey.includes("adverb")) return "adverb"
  if (
    categoryKey.includes("phrase") ||
    categoryKey.includes("greeting") ||
    categoryKey.includes("farewell") ||
    categoryKey.includes("apologies") ||
    categoryKey.includes("thanks")
  ) {
    return "expression"
  }
  if (categoryKey.includes("verb") || englishKey.startsWith("to ") || /\ben$/i.test(germanText)) return "verb"
  return "other"
}

function mapLevel(level) {
  const value = cleanText(level).toUpperCase()
  return ["A1", "A2", "B1", "B2"].includes(value) ? value : "A1"
}

function hasArabicLetters(value) {
  return /[\u0600-\u06ff]/.test(value)
}

function hasBadArabicNoise(value) {
  const text = cleanText(value)
  if (!text) return true
  const compact = text.replace(/\s+/g, "")
  const arabicLetters = (text.match(/[\u0600-\u06ff]/g) ?? []).length
  const digits = (text.match(/[\u0660-\u0669\d]/g) ?? []).length

  if (!hasArabicLetters(text)) return true
  if (/^[\u061F?\u060C\u061B.,:!()\-_/\s]+$/.test(text)) return true
  if (/^[\u0600-\u06ff][\u061F?\u060C\u061B.,:!()\-_/\s]*$/.test(compact)) return true
  if (text.includes("\u061F-\u061F") || text.includes("\u061F\u061F") || text.includes("\u061F?")) return true
  if (/[,،]?\s*\u061F\u0622\u0644/.test(text)) return true
  if (arabicLetters === 1 && compact.length <= 3) return true
  if (digits >= 3 && digits / Math.max(compact.length, 1) > 0.2) return true
  if (/[A-Za-z]{2,}/.test(text) && arabicLetters < compact.length * 0.5) return true
  if (invalidArabicCharacterPattern.test(text)) return true

  return false
}

function cleanArabic(value) {
  return cleanText(value)
    .replace(/(^|\s)[\u064b-\u065f]+/g, "$1")
    .replace(/\s+([\u061F\u060C\u061B.!?])/g, "$1")
    .replace(/السالمة/g, "السلامة")
    .replace(/األ/g, "الأ")
    .replace(/اإل/g, "الإ")
    .replace(/اأ/g, "أ")
    .replace(/اإ/g, "إ")
}

function shouldImport(row) {
  const german = fixCommonGermanEncoding(row.german)
  const correction = getCorrection(german)
  const english = cleanText(correction.en || row.english)
  const arabic = cleanArabic(correction.ar || row.arabic)

  if (!german || !english || !arabic) return false
  if (/^\d+[,.]/.test(german)) return false
  if (["der", "die", "das"].includes(normalizeKey(german))) return false
  if (hasBadArabicNoise(arabic)) return false
  return true
}

function germanToArabicPronunciation(value) {
  let text = fixCommonGermanEncoding(value).toLowerCase()
  if (!text || text.length > 56) return ""

  const replacements = [
    [/tsch/g, "تش"],
    [/sch/g, "ش"],
    [/ch/g, "خ"],
    [/sp/g, "شب"],
    [/st/g, "شت"],
    [/ei/g, "اي"],
    [/ie/g, "ي"],
    [/eu/g, "أوي"],
    [/äu/g, "أوي"],
    [/au/g, "او"],
    [/qu/g, "كف"],
    [/ph/g, "ف"],
    [/ß/g, "س"],
    [/ä/g, "ا"],
    [/ö/g, "و"],
    [/ü/g, "و"],
  ]

  for (const [pattern, replacement] of replacements) text = text.replace(pattern, replacement)

  const letters = {
    a: "ا",
    b: "ب",
    c: "ك",
    d: "د",
    e: "ه",
    f: "ف",
    g: "غ",
    h: "ه",
    i: "ي",
    j: "ي",
    k: "ك",
    l: "ل",
    m: "م",
    n: "ن",
    o: "و",
    p: "ب",
    q: "ك",
    r: "ر",
    s: "س",
    t: "ت",
    u: "و",
    v: "ف",
    w: "ف",
    x: "كس",
    y: "ي",
    z: "تس",
  }

  return text
    .split("")
    .map((char) => letters[char] ?? char)
    .join("")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeCategory(value, fallback = "General") {
  const category = cleanText(value)
  if (!category) return fallback
  return category
    .replace(/\s+and\s+/gi, " and ")
    .replace(/\s+/g, " ")
    .trim()
}

function buildTags(row, article, source) {
  return [
    cleanText(row.category_en),
    cleanText(row.main_category),
    cleanText(row.category_de),
    cleanText(row.category_ar),
    cleanText(row.all_categories_en),
    cleanText(row.cefr_level),
    cleanText(row.entry_type),
    article,
    source,
  ].filter(Boolean)
}

function flattenMissingCategories(bundle) {
  const categories = Object.values(bundle?.categories ?? {})
  const rows = categories.flatMap((category) =>
    (category.entries ?? []).map((entry) => ({
      ...entry,
      main_category: cleanText(entry.main_category || category.name),
      main_category_slug: cleanText(entry.main_category_slug || category.slug),
      _bundle_category: cleanText(category.name),
    })),
  )

  const mainCategoryCounts = Object.fromEntries(
    categories
      .map((category) => [cleanText(category.name), category.entries?.length ?? 0])
      .filter(([category]) => category)
      .sort(([a], [b]) => a.localeCompare(b, "en")),
  )

  return { rows, mainCategoryCounts }
}

function toLegacyEntry(row, index) {
  const rawGerman = fixCommonGermanEncoding(row.german)
  const correction = getCorrection(rawGerman)
  const article = correction.article || normalizeArticle(row, rawGerman)
  const correctedGerman = cleanText(correction.de)
  const de = correctedGerman || stripArticle(rawGerman, article, row.lemma)
  const source = cleanText(row.source_file || row.source_files || row._source_bundle)
  const category = normalizeCategory(row.category_en || row.main_category)
  const pos = mapType(row.entry_type, category, article, row.english, de)

  return {
    id: `dict-${String(index + 1).padStart(5, "0")}`,
    de,
    lemma: correctedGerman || stripArticle(rawGerman, article, row.lemma || de),
    article: article || undefined,
    pro_en: de,
    pro_ar: germanToArabicPronunciation(de),
    en: cleanText(correction.en || row.english),
    ar: cleanArabic(correction.ar || row.arabic),
    example_de: cleanText(row.example_de),
    example_en: cleanText(row.example_en),
    example_ar: cleanArabic(row.example_ar),
    pos,
    category,
    level: mapLevel(row.cefr_level),
    tags: buildTags(row, article, source),
    audio: null,
    source,
    quality: cleanText(row.quality_status || row.extraction_status || "ready"),
  }
}

function entryScore(entry) {
  let score = 0
  if (entry.article) score += 12
  if (entry.pos !== "other") score += 6
  if (entry.pos === "expression" && /\s|[!?؟]/.test(entry.de)) score += 5
  if (!hasBadArabicNoise(entry.ar)) score += 25
  if (entry.tags.some((tag) => normalizeKey(tag).includes("verified"))) score += 8
  if (!normalizeKey(entry.source).includes("pons")) score += 5
  if (entry.tags.some((tag) => normalizeKey(tag).includes("prior_master"))) score += 4
  if (entry.category && !["General", "Everyday phrases"].includes(entry.category)) score += 3
  if (entry.tags.some((tag) => normalizeKey(tag).includes("main"))) score += 1
  return score
}

function countMissing(rows, field) {
  return rows.filter((row) => !cleanText(row[field])).length
}

function duplicateGermanCount(rows) {
  const seen = new Set()
  let duplicates = 0
  for (const row of rows) {
    const key = normalizeKey(row.german)
    if (!key) continue
    if (seen.has(key)) duplicates += 1
    seen.add(key)
  }
  return duplicates
}

function categoryCountsFor(words) {
  return Object.fromEntries(
    [...new Set(words.map((word) => word.category))]
      .sort()
      .map((category) => [category, words.filter((word) => word.category === category).length]),
  )
}

function levelCountsFor(words) {
  return Object.fromEntries(
    ["A1", "A2", "B1", "B2"].map((level) => [level, words.filter((word) => word.level === level).length]),
  )
}

const cleanMaster = readSource(sourceFiles.cleanMaster)
const ponsReady = readSource(sourceFiles.ponsReady)
const ponsReview = readSource(sourceFiles.ponsReview)
const ponsMaster = readSource(sourceFiles.ponsMaster)
const missingCategoriesBundle = readJsonFromPath(missingCategoriesPath, null)
const { rows: missingCategoryRows, mainCategoryCounts } = flattenMissingCategories(missingCategoriesBundle)

const sourceRows = [
  ...cleanMaster.map((row) => ({ ...row, _source_bundle: sourceFiles.cleanMaster })),
  ...missingCategoryRows.map((row) => ({
    ...row,
    _source_bundle: path.basename(missingCategoriesPath),
  })),
]

const importableRows = sourceRows.filter(shouldImport)
const transformed = importableRows.map(toLegacyEntry)
const bestByMeaning = new Map()

for (const entry of transformed) {
  const key = normalizeKey(`${entry.de}::${entry.en}`)
  const current = bestByMeaning.get(key)
  if (!current || entryScore(entry) > entryScore(current)) bestByMeaning.set(key, entry)
}

const words = [...bestByMeaning.values()]
  .sort((a, b) => {
    const category = cleanText(a.category).localeCompare(cleanText(b.category), "en")
    if (category !== 0) return category
    return cleanText(a.de).localeCompare(cleanText(b.de), "de")
  })
  .map((entry, index) => ({ ...entry, id: `dict-${String(index + 1).padStart(5, "0")}` }))

const levelCounts = levelCountsFor(words)
const categoryCounts = categoryCountsFor(words)
const rejectedRows = sourceRows.length - importableRows.length
const duplicateMeaningsSkipped = importableRows.length - words.length

const output = {
  version: "2.2.0",
  lastUpdated: generatedDate,
  importPolicy:
    "Clean master entries plus the missing categories bundle. Damaged OCR Arabic and duplicate meanings are filtered before publishing.",
  sourceSummary: {
    importedEntries: words.length,
    cleanMasterRows: cleanMaster.length,
    missingCategoriesFile: fs.existsSync(missingCategoriesPath) ? missingCategoriesPath : null,
    missingCategoryRows: missingCategoryRows.length,
    rejectedRows,
    duplicateMeaningsSkipped,
    ponsReadyHeldForReview: ponsReady.length,
    ponsReviewHeldForReview: ponsReview.length,
    ponsCombinedMasterEntries: ponsMaster.length,
    levelCounts,
    categoryCounts,
    mainCategoryCounts,
  },
  words,
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8")

const suspiciousPonsReady = ponsReady.filter((row) => hasBadArabicNoise(row.arabic)).length
const report = `# Source Audit

Generated: ${generatedDate}

## Decision

The live website database now imports the clean master file and the missing-categories JSON bundle. Entries with obvious Arabic OCR damage are rejected before publishing, and duplicate German-English meanings are collapsed to the strongest available row.

## Imported Now

- Imported entries: ${words.length}
- Published categories: ${Object.keys(categoryCounts).length}
- Source rows checked: ${sourceRows.length}
- Rejected rows: ${rejectedRows}
- Duplicate meanings skipped: ${duplicateMeaningsSkipped}
- Missing-categories bundle rows: ${missingCategoryRows.length}
- Missing-categories file: \`${fs.existsSync(missingCategoriesPath) ? missingCategoriesPath : "not found"}\`

## Category Counts

${Object.entries(categoryCounts)
  .map(([category, count]) => `- ${category}: ${count}`)
  .join("\n")}

## Source Quality

| Source | Rows | Missing English | Missing Arabic | Duplicate German |
| --- | ---: | ---: | ---: | ---: |
| ${sourceFiles.cleanMaster} | ${cleanMaster.length} | ${countMissing(cleanMaster, "english")} | ${countMissing(cleanMaster, "arabic")} | ${duplicateGermanCount(cleanMaster)} |
| missing categories bundle | ${missingCategoryRows.length} | ${countMissing(missingCategoryRows, "english")} | ${countMissing(missingCategoryRows, "arabic")} | ${duplicateGermanCount(missingCategoryRows)} |
| ${sourceFiles.ponsReady} | ${ponsReady.length} | ${countMissing(ponsReady, "english")} | ${countMissing(ponsReady, "arabic")} | ${duplicateGermanCount(ponsReady)} |
| ${sourceFiles.ponsReview} | ${ponsReview.length} | ${countMissing(ponsReview, "english")} | ${countMissing(ponsReview, "arabic")} | ${duplicateGermanCount(ponsReview)} |
| ${sourceFiles.ponsMaster} | ${ponsMaster.length} | ${countMissing(ponsMaster, "english")} | ${countMissing(ponsMaster, "arabic")} | ${duplicateGermanCount(ponsMaster)} |

## Review Notes

- PONS ready rows held for separate review: ${ponsReady.length}
- PONS review rows held for separate review: ${ponsReview.length}
- Obvious Arabic OCR noise inside PONS ready rows: ${suspiciousPonsReady}
- Level values remain in the data for future study features, but the current UI no longer exposes A1/A2/B1/B2 filters.

## Next Data Pass

1. Keep JSON as the main import format.
2. Use CSV only for human review.
3. Keep XLSX as a readable workbook copy.
4. Review rejected OCR rows in small batches before importing them.
5. Add verified example sentences only when they are checked.
`

fs.mkdirSync(docsDir, { recursive: true })
fs.writeFileSync(reportPath, report, "utf8")

console.log(`Imported ${words.length} entries across ${Object.keys(categoryCounts).length} categories.`)
console.log(`Rejected ${rejectedRows} rows and skipped ${duplicateMeaningsSkipped} duplicate meanings.`)
console.log(`Report written to ${reportPath}`)
