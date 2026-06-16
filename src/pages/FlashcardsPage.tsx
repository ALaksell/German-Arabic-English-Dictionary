import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"
import { useAppStore } from "../app/store/useAppStore"
import { categories, words } from "../features/dictionary/data/dictionary"
import type { Level } from "../features/dictionary/types/dictionary"
import { titleCase } from "../shared/lib/utils"
import { Button } from "../shared/ui/Button"

const levels: Array<Level | "all"> = ["all", "A1", "A2", "B1", "B2"]

export function FlashcardsPage() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [level, setLevel] = useState<Level | "all">("all")
  const [category, setCategory] = useState("all")
  const setReviewDifficulty = useAppStore((state) => state.setReviewDifficulty)
  const markWordLearned = useAppStore((state) => state.markWordLearned)

  const deck = useMemo(
    () =>
      words.filter((word) => {
        const levelMatch = level === "all" || word.level === level
        const categoryMatch = category === "all" || word.category === category
        return levelMatch && categoryMatch
      }),
    [category, level],
  )

  const word = deck[index] ?? deck[0]

  function resetDeck(nextLevel = level, nextCategory = category) {
    setLevel(nextLevel)
    setCategory(nextCategory)
    setFlipped(false)
    setIndex(0)
  }

  function move(step: number) {
    if (!deck.length) return
    setFlipped(false)
    setIndex((current) => (current + step + deck.length) % deck.length)
  }

  function grade(difficulty: "again" | "good" | "easy") {
    if (!word) return
    setReviewDifficulty(word.id, difficulty)
    if (difficulty !== "again") markWordLearned(word.id)
    move(1)
  }

  return (
    <div className="space-y-5">
      <section className="glass rounded-xl p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h3 className="text-2xl font-black">Flashcards</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Review German words with English, Arabic, and approximate Arabic pronunciation.
            </p>
          </div>
          <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
            {deck.length ? index + 1 : 0} / {deck.length}
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <select
            value={category}
            onChange={(event) => resetDeck(level, event.target.value)}
            className="h-12 rounded-lg border border-slate-400/60 bg-white/95 px-3 font-semibold text-slate-950 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-950/75 dark:text-white"
          >
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {titleCase(item)}
              </option>
            ))}
          </select>

          <select
            value={level}
            onChange={(event) => resetDeck(event.target.value as Level | "all", category)}
            className="h-12 rounded-lg border border-slate-400/60 bg-white/95 px-3 font-semibold text-slate-950 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-950/75 dark:text-white"
          >
            {levels.map((item) => (
              <option key={item} value={item}>
                {item === "all" ? "Any estimated level" : item}
              </option>
            ))}
          </select>
        </div>
      </section>

      {word ? (
        <section className="mx-auto max-w-3xl">
          <motion.button
            type="button"
            onClick={() => setFlipped((value) => !value)}
            className="glass min-h-[430px] w-full rounded-xl p-8 text-center"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className={flipped ? "[transform:rotateY(180deg)]" : ""}>
              {!flipped ? (
                <>
                  <span className="text-sm font-black text-cyan-700 dark:text-cyan-300">{word.level}</span>
                  <h4 className="mt-6 text-5xl font-black tracking-tight text-slate-950 dark:text-white">
                    {word.article ? `${word.article} ` : ""}
                    {word.german}
                  </h4>
                  <div className="mx-auto mt-6 grid max-w-xl gap-2 text-sm">
                    <p className="rounded-lg bg-slate-900/[0.04] px-3 py-2 font-semibold text-slate-700 dark:bg-white/[0.06] dark:text-slate-200">
                      German form: {word.pronunciation.latin}
                    </p>
                    {word.pronunciation.arabic ? (
                      <p className="rtl rounded-lg bg-amber-500/12 px-3 py-2 font-semibold text-amber-800 dark:text-amber-200">
                        Approx. Arabic pronunciation: {word.pronunciation.arabic}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-10 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    Tap card to reveal meaning
                  </p>
                </>
              ) : (
                <>
                  <h4 className="text-3xl font-black text-slate-950 dark:text-white">{word.translations.en}</h4>
                  <p className="rtl mt-3 text-3xl font-black text-slate-950 dark:text-white">{word.translations.ar}</p>
                  {word.examples[0] ? (
                    <>
                      <p className="mt-8 text-lg font-semibold text-slate-900 dark:text-slate-100">
                        {word.examples[0].de}
                      </p>
                      <p className="rtl mt-2 text-slate-600 dark:text-slate-300">{word.examples[0].ar}</p>
                    </>
                  ) : null}
                </>
              )}
            </div>
          </motion.button>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Button variant="secondary" onClick={() => move(-1)}>
              <ArrowLeft size={17} /> Back
            </Button>
            <Button variant="secondary" onClick={() => setFlipped(false)}>
              <RotateCcw size={17} /> Reset
            </Button>
            <Button variant="danger" onClick={() => grade("again")}>
              Again
            </Button>
            <Button variant="secondary" onClick={() => grade("good")}>
              Good
            </Button>
            <Button onClick={() => grade("easy")}>
              Easy <ArrowRight size={17} />
            </Button>
          </div>
        </section>
      ) : (
        <section className="glass rounded-xl p-8 text-center">
          <h3 className="text-xl font-black">No cards found</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Choose another level or category.</p>
        </section>
      )}
    </div>
  )
}
