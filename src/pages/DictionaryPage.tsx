import { Search, SlidersHorizontal } from "lucide-react"
import { useMemo, useState } from "react"
import { useAppStore } from "../app/store/useAppStore"
import { WordCard } from "../features/dictionary/components/WordCard"
import { categories, words } from "../features/dictionary/data/dictionary"
import { useDictionarySearch } from "../features/dictionary/hooks/useDictionarySearch"
import type { Level } from "../features/dictionary/types/dictionary"
import { titleCase } from "../shared/lib/utils"

const levelOptions: Array<Level | "all"> = ["all", "A1", "A2", "B1", "B2"]

export function DictionaryPage() {
  const selectedLevel = useAppStore((state) => state.selectedLevel)
  const selectedCategory = useAppStore((state) => state.selectedCategory)
  const setSelectedLevel = useAppStore((state) => state.setSelectedLevel)
  const setSelectedCategory = useAppStore((state) => state.setSelectedCategory)
  const [query, setQuery] = useState("")
  const { results, suggestions, total } = useDictionarySearch(query, selectedLevel, selectedCategory)
  const categoryHighlights = useMemo(
    () =>
      categories
        .map((category) => ({
          category,
          count: words.filter((word) => word.category === category).length,
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 12),
    [],
  )

  return (
    <div className="space-y-5">
      <section className="glass rounded-xl p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h3 className="text-2xl font-black">Dictionary</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Search German, English, Arabic, level, category, grammar type, examples, pronunciation, and tags.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <SlidersHorizontal size={17} />
            Showing {results.length} of {total}
          </div>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_160px_220px]">
          <label className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={19} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Hallo, hello, Arabic meaning, noun, A1..."
              className="h-12 w-full rounded-lg border border-slate-400/60 bg-white/95 pl-12 pr-4 font-semibold text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-950/75 dark:text-white dark:placeholder:text-slate-500"
            />
          </label>
          <select
            value={selectedLevel}
            onChange={(event) => setSelectedLevel(event.target.value as Level | "all")}
            className="h-12 rounded-lg border border-slate-400/60 bg-white/95 px-3 font-semibold text-slate-950 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-950/75 dark:text-white"
          >
            {levelOptions.map((level) => (
              <option key={level} value={level}>
                {level === "all" ? "Any estimated level" : level}
              </option>
            ))}
          </select>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="h-12 rounded-lg border border-slate-400/60 bg-white/95 px-3 font-semibold text-slate-950 outline-none focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-950/75 dark:text-white"
          >
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {titleCase(category)}
              </option>
            ))}
          </select>
        </div>

        {query && suggestions.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                className="rounded-full border border-slate-400/60 bg-white/80 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        ) : null}
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {categoryHighlights.map(({ category, count }) => {
          const active = selectedCategory === category

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(active ? "all" : category)}
              className={`glass rounded-xl p-4 text-left transition hover:-translate-y-0.5 ${
                active ? "border-cyan-500 ring-2 ring-cyan-500/30" : ""
              }`}
            >
              <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
                Category
              </span>
              <h4 className="mt-2 font-black text-slate-950 dark:text-white">{titleCase(category)}</h4>
              <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{count} words</p>
            </button>
          )
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {results.map((word, index) => (
          <WordCard key={word.id} word={word} index={index} />
        ))}
      </section>
    </div>
  )
}
