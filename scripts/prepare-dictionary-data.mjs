import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const sourcesDir = path.join(root, "sources")
const outputPath = path.join(root, "src", "features", "dictionary", "data", "words.json")
const docsDir = path.join(root, "docs")
const reportPath = path.join(docsDir, "source-audit.md")

const sourceFiles = {
  cleanMaster: "german_dictionary_master.json",
  ponsReady: "pons_dictionary_ready_trilingual.json",
  ponsReview: "pons_dictionary_review_queue.json",
  ponsMaster: "german_dictionary_master_with_pons.json",
}

const manualCorrections = new Map([
  ["Auf Wiedersehen.", { ar: "مع السلامة", en: "Goodbye." }],
  ["Geburtsort", { ar: "مكان الميلاد", en: "place of birth" }],
  ["Viel Glück!", { ar: "حظا سعيدا!", en: "Good luck!" }],
  ["Ich bin mit meinen Kindern hier.", { ar: "أنا هنا مع أطفالي." }],
  ["Kann ich Ihre E-Mail-Adresse haben?", { ar: "هل يمكنني الحصول على عنوان بريدك الإلكتروني؟" }],
])

function readJson(fileName) {
  const fullPath = path.join(sourcesDir, fileName)
  return JSON.parse(fs.readFileSync(fullPath, "utf8"))
}

function cleanText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizeKey(value) {
  return cleanText(value).toLowerCase()
}

function isArticle(value) {
  return ["der", "die", "das"].includes(cleanText(value).toLowerCase())
}

function normalizeArticle(row, german) {
  const article = cleanText(row.article).toLowerCase()
  if (isArticle(article)) return article
  const match = german.match(/^(der|die|das)\s+/i)
  return match ? match[1].toLowerCase() : ""
}

function stripArticle(german, article, lemma) {
  const cleanGerman = cleanText(german).replace(/^\d+-\d+\s+/, "")
  const cleanLemma = cleanText(lemma).replace(/^\d+-\d+\s+/, "")
  if (article && cleanLemma && normalizeKey(cleanLemma) !== normalizeKey(article)) {
    return cleanLemma.replace(new RegExp(`^${article}\\s+`, "i"), "").trim()
  }
  if (article) return cleanGerman.replace(new RegExp(`^${article}\\s+`, "i"), "").trim()
  return cleanGerman
}

function mapType(type, category, article, english, german) {
  const value = normalizeKey(type)
  if (value === "noun") return "noun"
  if (value === "verb") return "verb"
  if (value === "adjective" || value === "adj") return "adj"
  if (value === "adverb") return "adverb"
  if (value === "preposition") return "preposition"
  if (value === "phrase" || value === "expression" || value === "question" || value === "answer") return "expression"
  if (article) return "noun"
  if (normalizeKey(category).includes("adjective")) return "adj"
  if (normalizeKey(category).includes("adverb")) return "adverb"
  if (normalizeKey(category).includes("phrase")) return "expression"
  if (normalizeKey(category).includes("verb") || normalizeKey(english).startsWith("to ") || /\ben$/i.test(cleanText(german))) {
    return "verb"
  }
  return "other"
}

function mapLevel(level) {
  const value = cleanText(level).toUpperCase()
  return ["A1", "A2", "B1", "B2"].includes(value) ? value : null
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
  if (arabicLetters === 1 && compact.length <= 3) return true
  if (digits >= 3 && digits / Math.max(compact.length, 1) > 0.2) return true
  if (/[٠0]{4,}/.test(text)) return true
  if (text.includes("؟-؟")) return true
  if (/(^|\s)[ظآ](\s|$)/.test(text) || (text.match(/ظ/g) ?? []).length >= 2) return true
  return false
}

function cleanArabic(value) {
  return cleanText(value)
    .replace(/(^|\s)[\u064b-\u065f]+/g, "$1")
    .replace(/األ/g, "الأ")
    .replace(/اإل/g, "الإ")
    .replace(/اأ/g, "أ")
    .replace(/اإ/g, "إ")
}

function shouldImport(row) {
  const german = cleanText(row.german)
  const english = cleanText(row.english)
  const arabic = cleanText(row.arabic)
  const level = mapLevel(row.cefr_level)
  if (!german || !english || !arabic || !level) return false
  if (/^\d+[,.]/.test(german)) return false
  if (["der", "die", "das"].includes(normalizeKey(german))) return false
  if (hasBadArabicNoise(arabic)) return false
  return true
}

function germanToArabicPronunciation(value) {
  let text = cleanText(value).toLowerCase()
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

function buildTags(row, article, source) {
  return [
    cleanText(row.category_en),
    cleanText(row.category_de),
    cleanText(row.category_ar),
    cleanText(row.cefr_level),
    cleanText(row.entry_type),
    article,
    source,
  ].filter(Boolean)
}

function toLegacyEntry(row, index) {
  const rawGerman = cleanText(row.german)
  const correction = manualCorrections.get(rawGerman) ?? {}
  const article = normalizeArticle(row, rawGerman)
  const de = stripArticle(rawGerman, article, row.lemma)
  const source = cleanText(row.source_file || row.source_files)
  const level = mapLevel(row.cefr_level)

  return {
    id: `dict-${String(index + 1).padStart(5, "0")}`,
    de,
    lemma: cleanText(row.lemma || de),
    article: article || undefined,
    pro_en: de,
    pro_ar: germanToArabicPronunciation(de),
    en: cleanText(correction.en || row.english),
    ar: cleanArabic(correction.ar || row.arabic),
    example_de: "",
    example_en: "",
    example_ar: "",
    pos: mapType(row.entry_type, row.category_en, article, row.english, de),
    category: cleanText(row.category_en || "General"),
    level,
    tags: buildTags(row, article, source),
    audio: null,
    source,
    quality: cleanText(row.quality_status || row.extraction_status || "ready"),
  }
}

function entryScore(entry) {
  let score = 0
  if (entry.article) score += 12
  if (entry.pos !== "expression" || /\s/.test(entry.de)) score += 6
  if (!hasBadArabicNoise(entry.ar)) score += 20
  if (!normalizeKey(entry.source).includes("popular_words")) score += 4
  if (entry.category && entry.category !== "Everyday phrases") score += 3
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

const cleanMaster = readJson(sourceFiles.cleanMaster)
const ponsReady = readJson(sourceFiles.ponsReady)
const ponsReview = readJson(sourceFiles.ponsReview)
const ponsMaster = readJson(sourceFiles.ponsMaster)

const readyRows = cleanMaster.filter(shouldImport)
const transformed = readyRows.map(toLegacyEntry)
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

const levelCounts = Object.fromEntries(
  ["A1", "A2", "B1", "B2"].map((level) => [level, words.filter((word) => word.level === level).length]),
)
const categoryCounts = Object.fromEntries(
  [...new Set(words.map((word) => word.category))]
    .sort()
    .map((category) => [category, words.filter((word) => word.category === category).length]),
)

const output = {
  version: "2.1.0",
  lastUpdated: "2026-06-16",
  importPolicy: "Clean non-PONS master entries only. PONS OCR entries are held for a separate review pass.",
  sourceSummary: {
    importedFrom: sourceFiles.cleanMaster,
    importedEntries: words.length,
    skippedFromCleanMaster: cleanMaster.length - words.length,
    ponsReadyHeldForReview: ponsReady.length,
    ponsReviewHeldForReview: ponsReview.length,
    ponsCombinedMasterEntries: ponsMaster.length,
    levelCounts,
    categoryCounts,
  },
  words,
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8")

const suspiciousPonsReady = ponsReady.filter((row) => hasBadArabicNoise(row.arabic)).length
const report = `# Source Audit

Generated: 2026-06-16

## Decision

The website database was rebuilt from \`${sourceFiles.cleanMaster}\` because it is the cleanest complete trilingual source in the current bundle.

PONS was not imported directly yet. It is large and useful, but many Arabic values come from OCR and some entries marked as ready still contain damaged Arabic text.

## Imported Now

- Imported entries: ${words.length}
- Duplicate meanings skipped: ${readyRows.length - words.length}
- Source file: \`${sourceFiles.cleanMaster}\`
- Levels: ${Object.entries(levelCounts)
  .map(([level, count]) => `${level}: ${count}`)
  .join(", ")}
- Categories: ${Object.keys(categoryCounts).length}

## Current Source Quality

| Source | Rows | Missing English | Missing Arabic | Duplicate German |
| --- | ---: | ---: | ---: | ---: |
| ${sourceFiles.cleanMaster} | ${cleanMaster.length} | ${countMissing(cleanMaster, "english")} | ${countMissing(cleanMaster, "arabic")} | ${duplicateGermanCount(cleanMaster)} |
| ${sourceFiles.ponsReady} | ${ponsReady.length} | ${countMissing(ponsReady, "english")} | ${countMissing(ponsReady, "arabic")} | ${duplicateGermanCount(ponsReady)} |
| ${sourceFiles.ponsReview} | ${ponsReview.length} | ${countMissing(ponsReview, "english")} | ${countMissing(ponsReview, "arabic")} | ${duplicateGermanCount(ponsReview)} |
| ${sourceFiles.ponsMaster} | ${ponsMaster.length} | ${countMissing(ponsMaster, "english")} | ${countMissing(ponsMaster, "arabic")} | ${duplicateGermanCount(ponsMaster)} |

## PONS Warning

- PONS ready rows held for review: ${ponsReady.length}
- PONS review rows held for review: ${ponsReview.length}
- Obvious Arabic OCR noise inside PONS ready rows: ${suspiciousPonsReady}

Examples found during audit:

- \`der Ehemann\` had Arabic OCR text \`زذج\`, but should be reviewed/corrected as husband.
- \`abbiegen\` had long repeated Arabic-Indic digit noise.
- Some time expressions had Arabic OCR mistakes even when English was usable.

## Next Data Pass

1. Keep JSON as the main import format.
2. Use CSV only for human review.
3. Keep XLSX as a readable workbook copy.
4. Clean PONS in batches by category before importing it into the live dictionary.
5. Add verified examples only when they are checked; do not generate fake examples.
`

fs.mkdirSync(docsDir, { recursive: true })
fs.writeFileSync(reportPath, report, "utf8")

console.log(`Imported ${words.length} clean entries.`)
console.log(`Report written to ${reportPath}`)
