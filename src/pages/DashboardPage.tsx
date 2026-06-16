import { BookOpenCheck, Heart, Layers3, LibraryBig, Tags } from "lucide-react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Link } from "react-router-dom"
import { useAppStore } from "../app/store/useAppStore"
import { categories, words } from "../features/dictionary/data/dictionary"
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
        <div>
          <p className="text-sm font-bold uppercase text-cyan-800 dark:text-cyan-300">
            Dictionary overview
          </p>
          <h3 className="mt-3 max-w-4xl text-3xl font-black text-slate-950 dark:text-white md:text-4xl">
            A focused German-Arabic-English dictionary with practice tools.
          </h3>
          <p className="mt-4 max-w-3xl text-base font-medium text-slate-800 dark:text-slate-300">
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

      <section className="grid gap-4 md:grid-cols-3">
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

      <article className="glass rounded-xl p-5">
        <div className="mb-5">
          <h3 className="text-xl font-black text-slate-950 dark:text-white">Top categories</h3>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Largest topic groups at a glance.</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData} layout="vertical" margin={{ left: 20, right: 12 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.28)" />
              <XAxis type="number" stroke="currentColor" allowDecimals={false} />
              <YAxis dataKey="category" type="category" stroke="currentColor" width={120} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="words" fill="#0f766e" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </article>
    </div>
  )
}
