import fs from "node:fs"
import path from "node:path"

const inputPath = path.join(process.cwd(), "src", "features", "dictionary", "data", "words.json")
const outputPath = path.join(process.cwd(), "dictionary-arabic-translation-review.json")

const raw = JSON.parse(fs.readFileSync(inputPath, "utf8"))
const sourceWords = Array.isArray(raw.words) ? raw.words : []

const reviewWords = sourceWords.map((word) => {
  const examples = Array.isArray(word.examples) ? word.examples : []

  return {
    id: word.id,
    german: word.de || "",
    article: word.article || "",
    english: word.en || "",
    arabicCurrent: word.ar || "",
    arabicCorrected: "",
    partOfSpeech: word.pos || "",
    category: word.category || "",
    tags: Array.isArray(word.tags) ? word.tags : [],
    examples: examples.map((example) => ({
      german: example.de || "",
      english: example.en || "",
      arabicCurrent: example.ar || "",
      arabicCorrected: "",
    })),
  }
})

const output = {
  filePurpose: "Arabic translation review for the German-English-Arabic dictionary website.",
  generatedAt: new Date().toISOString(),
  sourceFile: "src/features/dictionary/data/words.json",
  totalWords: reviewWords.length,
  instructions: [
    "Keep id unchanged. It is required to merge corrections back into the website.",
    "Review arabicCurrent. If it is correct, leave arabicCorrected empty.",
    "If arabicCurrent is wrong, write the corrected Modern Standard Arabic translation in arabicCorrected.",
    "For examples, only fill examples[].arabicCorrected when the example Arabic translation needs correction.",
    "Do not delete words from this file.",
  ],
  words: reviewWords,
}

fs.writeFileSync(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8")

console.log(`Exported ${reviewWords.length} words to ${outputPath}`)
