import { Search, SlidersHorizontal } from "lucide-react"
import { useMemo, useState } from "react"
import { useAppStore } from "../app/store/useAppStore"
import { WordCard } from "../features/dictionary/components/WordCard"
import { categories, words } from "../features/dictionary/data/dictionary"
import { useDictionarySearch } from "../features/dictionary/hooks/useDictionarySearch"
import { titleCase } from "../shared/lib/utils"

export function DictionaryPage() {
  const selectedCategory = useAppStore((state) => state.selectedCategory)
  const setSelectedCategory = useAppStore((state) => state.setSelectedCategory)
  const [query, setQuery] = useState("")
  const { results, suggestions, total } = useDictionarySearch(query, selectedCategory)
  const categoryHighlights = useMemo(
    () =>
      categories
        .map((category) => ({
          category,
          count: words.filter((word) => word.category === category).length,
        }))
        .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category, "en")),
    [],
  )

  return (
    <div className="space-y-5">
      <section className="glass rounded-xl p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h3 className="text-2xl font-black">Dictionary</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Search German, English, Arabic, category, grammar type, pronunciation, and tags.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <SlidersHorizontal size={17} />
            Showing {results.length} of {total}
          </div>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_260px]">
          <label className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={19} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Hallo, hello, Arabic meaning, noun, category..."
              className="h-12 w-full rounded-lg border border-slate-400/60 bg-white/95 pl-12 pr-4 font-semibold text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-cyan-600 dark:border-slate-700 dark:bg-slate-950/75 dark:text-white dark:placeholder:text-slate-500"
            />
          </label>
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

      <section className="glass rounded-xl p-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-950 dark:text-white">Browse categories</h3>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {categories.length} topic filters available.
            </p>
          </div>
          {selectedCategory !== "all" ? (
            <button
              onClick={() => setSelectedCategory("all")}
              className="text-left text-sm font-black text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-100 sm:text-right"
            >
              Clear category
            </button>
          ) : null}
        </div>
        <div className="mt-4 grid max-h-[24rem] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryHighlights.map(({ category, count }) => {
            const active = selectedCategory === category

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(active ? "all" : category)}
                className={`min-h-16 rounded-lg border px-3 py-2 text-left transition hover:-translate-y-0.5 ${
                  active
                    ? "border-cyan-500 bg-cyan-500/12 ring-2 ring-cyan-500/25"
                    : "border-slate-300/80 bg-white/75 hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-950/35"
                }`}
              >
                <h4 className="break-words text-sm font-black text-slate-950 dark:text-white">
                  {titleCase(category)}
                </h4>
                <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">{count} words</p>
              </button>
            )
          })}
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {results.map((word, index) => (
          <WordCard key={word.id} word={word} index={index} />
        ))}
      </section>
    </div>
  )
}
