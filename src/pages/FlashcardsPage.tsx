import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, Eye, RotateCcw } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { CategoryIcon } from "../features/dictionary/components/CategoryIcon"
import { categories, words } from "../features/dictionary/data/dictionary"
import { titleCase } from "../shared/lib/utils"
import { Button } from "../shared/ui/Button"

export function FlashcardsPage() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [category, setCategory] = useState("all")

  const deck = useMemo(() => {
    if (category === "all") return words
    return words.filter((word) => word.category === category)
  }, [category])

  const word = deck[index] ?? deck[0]
  const progress = deck.length ? ((index + 1) / deck.length) * 100 : 0
  const spokenText = word ? `${word.article ? `${word.article} ` : ""}${word.german}` : ""

  function resetDeck(nextCategory = category) {
    setCategory(nextCategory)
    setRevealed(false)
    setIndex(0)
  }

  function move(step: number) {
    if (!deck.length) return
    setRevealed(false)
    setIndex((current) => (current + step + deck.length) % deck.length)
  }

  return (
    <div className="space-y-5">
      <section className="glass soft-glow rounded-xl p-4 sm:p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h3 className="text-2xl font-black text-[var(--text)]">Flashcards</h3>
            <p className="mt-1 text-sm font-medium text-[var(--muted)]">
              Reveal meanings at your pace with a clean animated study card.
            </p>
          </div>
          <span className="text-sm font-black text-[var(--muted)]">
            {deck.length ? index + 1 : 0} / {deck.length}
          </span>
        </div>

        <div className="mt-5">
          <select
            value={category}
            onChange={(event) => resetDeck(event.target.value)}
            className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--surface-solid)] px-3 font-bold text-[var(--text)] outline-none focus:border-[var(--accent)]"
          >
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {titleCase(item)}
              </option>
            ))}
          </select>
        </div>
      </section>

      {word ? (
        <section className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-3 flex-1 overflow-hidden rounded-full bg-[var(--surface-soft)]">
              <div className="practice-progress h-full rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-sm font-black text-[var(--muted)]">{Math.round(progress)}%</span>
          </div>

          <motion.button
            type="button"
            onClick={() => setRevealed((value) => !value)}
            className="study-card glass min-h-[420px] w-full overflow-hidden rounded-2xl p-0 text-left transition hover:border-[var(--accent)] sm:min-h-[500px]"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.995 }}
          >
            <div className="study-card-glow" />
            <div className="relative z-10 flex h-full min-h-[420px] flex-col sm:min-h-[500px]">
              <div className="flex flex-col gap-4 border-b border-[var(--border)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex min-w-0 items-center gap-3">
                  <CategoryIcon category={word.category} className="h-12 w-12 rounded-xl" />
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-wide text-[var(--subtle)]">Study card</p>
                    <h4 className="break-words text-lg font-black text-[var(--text)]">{titleCase(word.category)}</h4>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-black text-[var(--accent-strong)]">
                    {word.type}
                  </span>
                  <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs font-black text-[var(--muted)]">
                    {index + 1} / {deck.length}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 items-center justify-center p-5 sm:p-8">
                <AnimatePresence mode="wait">
                  {!revealed ? (
                    <motion.div
                      key={`${word.id}-front`}
                      initial={{ opacity: 0, rotateY: -18, y: 12 }}
                      animate={{ opacity: 1, rotateY: 0, y: 0 }}
                      exit={{ opacity: 0, rotateY: 18, y: -12 }}
                      transition={{ duration: 0.24 }}
                      className="mx-auto flex max-w-2xl flex-col items-center text-center"
                    >
                      <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-black uppercase tracking-wide text-[var(--subtle)]">
                        German
                      </span>
                      <h3 className="mt-8 break-words text-5xl font-black leading-tight text-[var(--text)] sm:text-6xl">
                        {spokenText}
                      </h3>
                      <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-2 text-sm font-black text-[var(--accent-strong)]">
                        <Eye size={17} /> Tap to reveal
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${word.id}-back`}
                      initial={{ opacity: 0, rotateY: 18, y: 12 }}
                      animate={{ opacity: 1, rotateY: 0, y: 0 }}
                      exit={{ opacity: 0, rotateY: -18, y: -12 }}
                      transition={{ duration: 0.24 }}
                      className="grid w-full max-w-3xl gap-4"
                    >
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                        <p className="text-xs font-black uppercase tracking-wide text-[var(--subtle)]">Arabic</p>
                        <p className="rtl mt-3 block w-full break-words text-right text-3xl font-black leading-relaxed text-[var(--text)]">
                          {word.translations.ar}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                        <p className="text-xs font-black uppercase tracking-wide text-[var(--subtle)]">English</p>
                        <p className="mt-3 break-words text-2xl font-black text-[var(--text)]">{word.translations.en}</p>
                      </div>
                      {word.examples[0]?.de ? (
                        <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                          <p className="break-words text-sm font-black text-[var(--text)]">{word.examples[0].de}</p>
                        </div>
                      ) : null}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.button>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <Button variant="secondary" onClick={() => move(-1)}>
              <ArrowLeft size={17} /> Back
            </Button>
            <Button variant="secondary" onClick={() => resetDeck()}>
              <RotateCcw size={17} /> Reset
            </Button>
            <Button onClick={() => move(1)}>
              Next <ArrowRight size={17} />
            </Button>
          </div>
        </section>
      ) : (
        <section className="glass rounded-xl p-8 text-center">
          <h3 className="text-xl font-black text-[var(--text)]">No cards found</h3>
          <p className="mt-2 text-[var(--muted)]">Choose another category.</p>
        </section>
      )}
    </div>
  )
}
