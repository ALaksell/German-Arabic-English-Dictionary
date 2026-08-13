import { memo } from "react"
import { motion } from "framer-motion"
import { Check, Heart } from "lucide-react"
import { useAppStore } from "../../../app/store/useAppStore"
import { cn, titleCase } from "../../../shared/lib/utils"
import { Button } from "../../../shared/ui/Button"
import type { DictionaryWord } from "../types/dictionary"

function WordCardComponent({ word, index = 0 }: { word: DictionaryWord; index?: number }) {
  const favorites = useAppStore((state) => state.favorites)
  const toggleFavorite = useAppStore((state) => state.toggleFavorite)
  const markWordLearned = useAppStore((state) => state.markWordLearned)
  const isFavorite = favorites.includes(word.id)
  const isLearned = useAppStore((state) => state.progress.wordsLearned.includes(word.id))
  const spokenText = `${word.article ? `${word.article} ` : ""}${word.german}`

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.018, 0.12) }}
      className="glass group rounded-xl p-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[var(--warning-soft)] px-2.5 py-1 text-xs font-black text-[var(--warning)]">
              {titleCase(word.category)}
            </span>
            <span className="rounded-full bg-[var(--success-soft)] px-2.5 py-1 text-xs font-black text-[var(--success)]">
              {word.type}
            </span>
          </div>
          <h3 className="mt-4 break-words text-2xl font-black text-[var(--text)]">
            {spokenText}
          </h3>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleFavorite(word.id)}
            aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
          >
            <Heart size={18} className={cn(isFavorite && "fill-rose-500 text-rose-500")} />
          </Button>
        </div>
      </div>

      <div className="mt-5 grid gap-3 rounded-lg bg-[var(--surface-soft)] p-4 sm:grid-cols-2">
        <div className="min-w-0 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
          <p className="text-xs font-black uppercase text-[var(--subtle)]">Arabic</p>
          <p className="rtl mt-1 block w-full break-words text-right text-lg font-black leading-relaxed text-[var(--text)]">
            {word.translations.ar}
          </p>
        </div>
        <div className="min-w-0 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
          <p className="text-xs font-black uppercase text-[var(--subtle)]">English</p>
          <p className="mt-1 break-words font-bold text-[var(--text)]">{word.translations.en}</p>
        </div>
      </div>

      {word.examples[0]?.de ? (
        <div className="mt-5 border-l-2 border-[var(--accent)] pl-4">
          <p className="break-words font-bold text-[var(--text)]">{word.examples[0].de}</p>
          {word.examples[0].en ? <p className="mt-1 break-words text-sm text-[var(--muted)]">{word.examples[0].en}</p> : null}
          {word.examples[0].ar ? (
            <p className="rtl mt-1 block w-full break-words text-right text-sm leading-relaxed text-[var(--muted)]">
              {word.examples[0].ar}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-5 flex justify-end">
        <Button
          className={cn(
            "w-full sm:w-auto",
            isLearned && "border-[var(--success)] bg-[var(--success-soft)] text-[var(--success)] hover:border-[var(--success)]",
          )}
          variant="secondary"
          size="sm"
          disabled={isLearned}
          onClick={() => markWordLearned(word.id)}
        >
          <Check size={16} /> {isLearned ? "Learned" : "Mark learned"}
        </Button>
      </div>
    </motion.article>
  )
}

export const WordCard = memo(WordCardComponent)
