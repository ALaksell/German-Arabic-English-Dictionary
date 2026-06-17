import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, RotateCcw, Volume2 } from "lucide-react"
import { motion } from "framer-motion"
import { categories, words } from "../features/dictionary/data/dictionary"
import { useGermanSpeech } from "../features/dictionary/hooks/useGermanSpeech"
import { titleCase } from "../shared/lib/utils"
import { Button } from "../shared/ui/Button"

export function FlashcardsPage() {
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [category, setCategory] = useState("all")
  const { speak, isSupported } = useGermanSpeech()

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
              Reveal meanings at your pace and listen to legal browser-based German pronunciation.
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
        <section className="mx-auto max-w-3xl">
          <div className="mb-4 h-3 overflow-hidden rounded-full bg-[var(--surface-soft)]">
            <div className="h-full rounded-full bg-[var(--accent)] transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          <motion.button
            type="button"
            onClick={() => setRevealed((value) => !value)}
            className="glass min-h-[360px] w-full rounded-xl p-5 text-center transition hover:border-[var(--accent)] sm:min-h-[430px] sm:p-8"
            whileTap={{ scale: 0.995 }}
          >
            <div className="mx-auto flex max-w-2xl flex-col items-center">
              <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm font-black text-[var(--accent-strong)]">
                {titleCase(word.category)}
              </span>

              <h4 className="mt-8 break-words text-4xl font-black text-[var(--text)] md:text-5xl">{spokenText}</h4>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={(event) => {
                    event.stopPropagation()
                    speak(spokenText)
                  }}
                  disabled={!isSupported}
                >
                  <Volume2 size={17} /> Audio
                </Button>
              </div>

              {revealed ? (
                <div className="mt-8 grid w-full gap-3 rounded-xl bg-[var(--surface-soft)] p-4">
                  <p className="rtl break-words text-2xl font-black text-[var(--text)]">{word.translations.ar}</p>
                  <p className="break-words text-lg font-bold text-[var(--muted)]">{word.translations.en}</p>
                  {word.examples[0]?.de ? (
                    <p className="mt-2 break-words text-sm font-bold text-[var(--text)]">{word.examples[0].de}</p>
                  ) : null}
                </div>
              ) : (
                <p className="mt-10 text-sm font-bold text-[var(--muted)]">Tap card to reveal meaning</p>
              )}
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
