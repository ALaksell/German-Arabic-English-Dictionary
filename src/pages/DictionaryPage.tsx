import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from "lucide-react"
import { useAppStore } from "../app/store/useAppStore"
import { CategoryIcon } from "../features/dictionary/components/CategoryIcon"
import { WordCard } from "../features/dictionary/components/WordCard"
import { categories, categorySummaries } from "../features/dictionary/data/dictionary"
import { useDictionarySearch } from "../features/dictionary/hooks/useDictionarySearch"
import { useDebouncedValue } from "../shared/hooks/useDebouncedValue"
import { titleCase } from "../shared/lib/utils"
import { Button } from "../shared/ui/Button"

const WORDS_PER_PAGE = 12
const INITIAL_CATEGORY_COUNT = 12

export function DictionaryPage() {
  const selectedCategory = useAppStore((state) => state.selectedCategory)
  const setSelectedCategory = useAppStore((state) => state.setSelectedCategory)
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [showAllCategories, setShowAllCategories] = useState(false)
  const debouncedQuery = useDebouncedValue(query, 180)
  const { results, suggestions, didYouMean, hasQuery, total } = useDictionarySearch(debouncedQuery, selectedCategory)

  const pageCount = Math.max(1, Math.ceil(results.length / WORDS_PER_PAGE))
  const currentPage = Math.min(page, pageCount)
  const pageStart = (currentPage - 1) * WORDS_PER_PAGE
  const visibleResults = useMemo(
    () => results.slice(pageStart, pageStart + WORDS_PER_PAGE),
    [pageStart, results],
  )
  const shownCategories = showAllCategories ? categorySummaries : categorySummaries.slice(0, INITIAL_CATEGORY_COUNT)

  function chooseCategory(category: string) {
    setSelectedCategory(selectedCategory === category ? "all" : category)
    setPage(1)
  }

  function updateQuery(value: string) {
    setQuery(value)
    setPage(1)
  }

  return (
    <div className="space-y-5">
      <section className="glass soft-glow rounded-xl p-4 sm:p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0">
            <h3 className="text-2xl font-black text-[var(--text)]">Dictionary</h3>
            <p className="mt-1 text-sm font-medium text-[var(--muted)]">
              Search German, English, Arabic, categories, and grammar types across {total} entries.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-black text-[var(--muted)]">
            <SlidersHorizontal size={17} />
            {results.length ? (
              <span>
                Showing {pageStart + 1}-{Math.min(pageStart + visibleResults.length, results.length)} of {results.length}
              </span>
            ) : (
              <span>No visible results</span>
            )}
          </div>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_260px]">
          <label className="relative min-w-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--subtle)]" size={19} />
            <input
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search Hallo, house, شكرا, verb..."
              className="h-12 w-full rounded-lg border border-[var(--border)] bg-[var(--surface-solid)] pl-12 pr-4 font-bold text-[var(--text)] outline-none transition placeholder:text-[var(--subtle)] focus:border-[var(--accent)]"
            />
          </label>
          <select
            value={selectedCategory}
            onChange={(event) => {
              setSelectedCategory(event.target.value)
              setPage(1)
            }}
            className="h-12 rounded-lg border border-[var(--border)] bg-[var(--surface-solid)] px-3 font-bold text-[var(--text)] outline-none focus:border-[var(--accent)]"
          >
            <option value="all">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {titleCase(category)}
              </option>
            ))}
          </select>
        </div>

        {hasQuery && didYouMean ? (
          <div className="mt-4 rounded-lg border border-[var(--warning)] bg-[var(--warning-soft)] p-3 text-sm font-bold text-[var(--text)]">
            Did you mean:{" "}
            <button className="text-[var(--accent-strong)] underline" onClick={() => updateQuery(didYouMean)}>
              {didYouMean}
            </button>
            ?
          </div>
        ) : null}

        {hasQuery && suggestions.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => updateQuery(suggestion)}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 text-sm font-bold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
              >
                {suggestion}
              </button>
            ))}
          </div>
        ) : null}
      </section>

      <section className="glass rounded-xl p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-lg font-black text-[var(--text)]">Browse categories</h3>
            <p className="text-sm font-medium text-[var(--muted)]">
              Start with the most useful topics, then view the full list when needed.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            {selectedCategory !== "all" ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedCategory("all")
                  setPage(1)
                }}
              >
                Clear category
              </Button>
            ) : null}
            <Button variant="secondary" size="sm" onClick={() => setShowAllCategories((value) => !value)}>
              {showAllCategories ? "Show Less" : `View All Categories (${categorySummaries.length})`}
            </Button>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {shownCategories.map(({ category, count }) => {
            const active = selectedCategory === category

            return (
              <button
                key={category}
                onClick={() => chooseCategory(category)}
                className={`group min-h-20 rounded-xl border p-3 text-left transition hover:-translate-y-0.5 ${
                  active
                    ? "border-[var(--accent)] bg-[var(--accent-soft)] ring-2 ring-cyan-400/20"
                    : "border-[var(--border)] bg-[var(--surface-soft)] hover:border-[var(--accent)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <CategoryIcon category={category} />
                  <div className="min-w-0">
                    <h4 className="break-words text-sm font-black text-[var(--text)]">{titleCase(category)}</h4>
                    <p className="mt-1 text-xs font-bold text-[var(--muted)]">{count} words</p>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {hasQuery && results.length === 0 ? (
        <section className="glass rounded-xl p-8 text-center">
          <h3 className="text-xl font-black text-[var(--text)]">This word does not exist in the dictionary.</h3>
          <p className="mt-2 text-sm font-medium text-[var(--muted)]">
            Try another spelling, a different language, or clear the category filter.
          </p>
        </section>
      ) : (
        <>
          <section className="grid gap-4 xl:grid-cols-2">
            {visibleResults.map((word, index) => (
              <WordCard key={word.id} word={word} index={index} />
            ))}
          </section>

          <section className="glass flex flex-col gap-3 rounded-xl p-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center text-sm font-bold text-[var(--muted)] sm:text-left">
              Page {currentPage} of {pageCount} · {results.length} matching entries
            </p>
            <div className="grid grid-cols-2 gap-2 sm:flex">
              <Button variant="secondary" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={currentPage === 1}>
                <ChevronLeft size={17} /> Previous
              </Button>
              <Button
                variant="secondary"
                onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
                disabled={currentPage === pageCount}
              >
                Next <ChevronRight size={17} />
              </Button>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
