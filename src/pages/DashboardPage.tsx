import { BookOpenCheck, ChartNoAxesCombined, Heart, Layers3, LibraryBig, Tags } from "lucide-react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Link } from "react-router-dom"
import { useAppStore } from "../app/store/useAppStore"
import { categories, levels, words } from "../features/dictionary/data/dictionary"
import { Button } from "../shared/ui/Button"
import { StatCard } from "../shared/ui/StatCard"

const categoryData = categories
  .map((category) => ({
    category,
    words: words.filter((word) => word.category === category).length,
  }))
  .sort((a, b) => b.words - a.words)
  .slice(0, 10)

export function DashboardPage() {
  const favorites = useAppStore((state) => state.favorites)
  const progress = useAppStore((state) => state.progress)
  const averageScore = progress.quizScores.length
    ? Math.round(progress.quizScores.reduce((total, score) => total + score, 0) / progress.quizScores.length)
    : 0

  return (
    <div className="space-y-6">
      <section className="glass overflow-hidden rounded-xl p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
              Dictionary overview
            </p>
            <h3 className="mt-3 text-4xl font-black tracking-tight text-slate-950 dark:text-white">
              A focused German-Arabic-English dictionary with practice tools.
            </h3>
            <p className="mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
              The dictionary now uses a category-first structure with estimated levels kept as a secondary filter.
              Clean entries are live, while OCR-heavy PONS data is held for review before import.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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

          <div className="rounded-xl bg-gradient-to-br from-slate-950 via-cyan-950 to-emerald-950 p-5 text-white shadow-2xl dark:from-cyan-500 dark:via-emerald-500 dark:to-amber-400 dark:text-slate-950">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold opacity-85">Current database</span>
              <ChartNoAxesCombined size={22} />
            </div>
            <strong className="mt-4 block text-5xl font-black">{words.length}</strong>
            <p className="mt-3 text-sm opacity-85">
              Clean imported entries. The larger PONS batch is ready for a separate correction pass.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Dictionary entries"
          value={words.length}
          detail="German entries with English and Arabic fields"
          icon={<LibraryBig size={22} />}
        />
        <StatCard
          label="Categories"
          value={categories.length}
          detail="Topic groups available for filtering"
          icon={<Tags size={22} />}
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

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <article className="glass rounded-xl p-5">
          <div className="mb-5">
            <h3 className="text-xl font-black">Top categories</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Current clean entries grouped by topic.
            </p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="vertical" margin={{ left: 28, right: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.28)" />
                <XAxis type="number" stroke="currentColor" allowDecimals={false} />
                <YAxis dataKey="category" type="category" stroke="currentColor" width={118} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="words" fill="#0891b2" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="glass rounded-xl p-5">
          <h3 className="text-xl font-black">Estimated levels</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            CEFR labels are estimated from the source bundle.
          </p>
          <div className="mt-5 space-y-4">
            {levels.map((level) => {
              const count = words.filter((word) => word.level === level.level).length
              const percent = words.length ? Math.round((count / words.length) * 100) : 0
              return (
                <div key={level.level}>
                  <div className="flex justify-between text-sm font-bold">
                    <span>
                      {level.level} - {level.title}
                    </span>
                    <span>{count} words</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-900/10 dark:bg-white/10">
                    <div className="h-full rounded-full bg-cyan-500" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </article>
      </section>
    </div>
  )
}
