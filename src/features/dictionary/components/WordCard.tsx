import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useAppStore } from "../../../app/store/useAppStore"
import { cn, titleCase } from "../../../shared/lib/utils"
import { Button } from "../../../shared/ui/Button"
import type { DictionaryWord } from "../types/dictionary"

export function WordCard({ word, index = 0 }: { word: DictionaryWord; index?: number }) {
  const favorites = useAppStore((state) => state.favorites)
  const toggleFavorite = useAppStore((state) => state.toggleFavorite)
  const markWordLearned = useAppStore((state) => state.markWordLearned)
  const isFavorite = favorites.includes(word.id)

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.025, 0.25) }}
      className="glass group rounded-xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-cyan-500/15 px-2.5 py-1 text-xs font-bold text-cyan-800 dark:text-cyan-200">
              {word.level}
            </span>
            <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-xs font-bold text-amber-800 dark:text-amber-200">
              {titleCase(word.category)}
            </span>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-800 dark:text-emerald-200">
              {word.type}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950 dark:text-white">
            {word.article ? `${word.article} ` : ""}
            {word.german}
          </h3>
          <div className="mt-3 grid gap-2 text-sm">
            <p className="rounded-lg bg-slate-900/[0.04] px-3 py-2 font-semibold text-slate-700 dark:bg-white/[0.06] dark:text-slate-200">
              German form: {word.pronunciation.latin}
              {word.pronunciation.ipa ? ` - ${word.pronunciation.ipa}` : ""}
            </p>
            {word.pronunciation.arabic ? (
              <p className="rtl rounded-lg bg-amber-500/12 px-3 py-2 font-semibold text-amber-800 dark:text-amber-200">
                Approx. Arabic pronunciation: {word.pronunciation.arabic}
              </p>
            ) : null}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toggleFavorite(word.id)}
          aria-label={isFavorite ? "Remove favorite" : "Add favorite"}
        >
          <Heart size={18} className={cn(isFavorite && "fill-rose-500 text-rose-500")} />
        </Button>
      </div>

      <div className="mt-5 grid gap-3 rounded-lg bg-slate-950/[0.04] p-4 dark:bg-white/[0.05] sm:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">English</p>
          <p className="mt-1 font-semibold text-slate-950 dark:text-white">{word.translations.en}</p>
        </div>
        <div className="rtl">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Arabic</p>
          <p className="mt-1 font-semibold text-slate-950 dark:text-white">{word.translations.ar}</p>
        </div>
      </div>

      {word.examples.length ? (
        <div className="mt-5 space-y-3">
          {word.examples.slice(0, 2).map((example) => (
            <div key={example.de} className="border-l-2 border-cyan-500 pl-4">
              <p className="font-semibold text-slate-900 dark:text-slate-100">{example.de}</p>
              {example.en ? <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{example.en}</p> : null}
              {example.ar ? <p className="rtl mt-1 text-sm text-slate-600 dark:text-slate-300">{example.ar}</p> : null}
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
          Frequency {word.frequency}% - {word.commonality}
        </p>
        <Button variant="secondary" size="sm" onClick={() => markWordLearned(word.id)}>
          Mark learned
        </Button>
      </div>
    </motion.article>
  )
}
