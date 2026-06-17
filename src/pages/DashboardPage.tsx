import { BookOpenCheck, Heart, Layers3, LibraryBig, Tags } from "lucide-react"
import { Link } from "react-router-dom"
import { useAppStore } from "../app/store/useAppStore"
import dictionaryMeta from "../features/dictionary/data/meta.json"
import { Button } from "../shared/ui/Button"
import { StatCard } from "../shared/ui/StatCard"

const meta = dictionaryMeta as {
  importedEntries: number
  categoryCounts: Record<string, number>
}

const categoryData = Object.entries(meta.categoryCounts)
  .map(([category, count]) => ({ category, words: count }))
  .sort((a, b) => b.words - a.words)
  .slice(0, 10)

const categoryCount = Object.keys(meta.categoryCounts).length

export function DashboardPage() {
  const favorites = useAppStore((state) => state.favorites)
  const progress = useAppStore((state) => state.progress)
  const averageScore = progress.quizScores.length
    ? Math.round(progress.quizScores.reduce((total, score) => total + score, 0) / progress.quizScores.length)
    : 0

  return (
    <div className="space-y-6">
      <section className="glass soft-glow overflow-hidden rounded-xl p-6 md:p-8">
        <div>
          <p className="text-sm font-black uppercase text-[var(--accent-strong)]">
            Dictionary overview
          </p>
          <h3 className="mt-3 max-w-4xl text-3xl font-black text-[var(--text)] md:text-4xl">
            A focused German-Arabic-English dictionary with practice tools.
          </h3>
          <p className="mt-4 max-w-3xl text-base font-medium text-[var(--muted)]">
            Browse vocabulary by topic, search across German, English, and Arabic, then review words with practice and
            flashcards.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/dictionary">
              <Button>
                <LibraryBig size={17} /> Open dictionary
              </Button>
            </Link>
            <Link to="/flashcards">
              <Button variant="secondary">
                <BookOpenCheck size={17} /> Review flashcards
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Categories"
          value={categoryCount}
          detail="Topic groups available for filtering"
          icon={<Tags size={22} />}
        />
        <StatCard
          label="Entries"
          value={meta.importedEntries}
          detail="Clean German-Arabic-English entries"
          icon={<LibraryBig size={22} />}
        />
        <StatCard
          label="Favorites"
          value={favorites.length}
          detail="Saved words on this device"
          icon={<Heart size={22} />}
        />
        <StatCard
          label="Quiz average"
          value={`${averageScore}%`}
          detail={`${progress.quizScores.length} saved practice attempts`}
          icon={<Layers3 size={22} />}
        />
      </section>

      <article className="glass rounded-xl p-5">
        <div className="mb-5">
          <h3 className="text-xl font-black text-[var(--text)]">Top categories</h3>
          <p className="text-sm font-medium text-[var(--muted)]">Largest topic groups at a glance.</p>
        </div>
        <div className="grid gap-3">
          {categoryData.map((item) => {
            const max = categoryData[0]?.words ?? 1
            const width = `${Math.max(8, Math.round((item.words / max) * 100))}%`

            return (
              <div key={item.category} className="grid gap-2">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="min-w-0 truncate font-black text-[var(--text)]">{item.category}</span>
                  <span className="font-black text-[var(--muted)]">{item.words}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                  <div className="h-full rounded-full bg-[var(--accent)]" style={{ width }} />
                </div>
              </div>
            )
          })}
        </div>
      </article>
    </div>
  )
}
