import type { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import { BookOpen, Brain, LayoutDashboard, LibraryBig, Moon, Sparkles, Sun } from "lucide-react"
import { cn } from "../../shared/lib/utils"
import { useAppStore } from "../store/useAppStore"
import { LanguageAtlasBackground } from "./LanguageAtlasBackground"
import { Button } from "../../shared/ui/Button"

const navItems = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/dictionary", label: "Dictionary", icon: LibraryBig },
  { to: "/practice", label: "Practice", icon: Brain },
  { to: "/flashcards", label: "Flashcards", icon: BookOpen },
]

export function AppShell({ children }: { children: ReactNode }) {
  const theme = useAppStore((state) => state.theme)
  const setTheme = useAppStore((state) => state.setTheme)

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100">
      <LanguageAtlasBackground />
      <aside className="fixed inset-x-2 bottom-2 z-30 rounded-xl border border-slate-300/70 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/88 sm:inset-x-3 sm:bottom-3 lg:inset-y-4 lg:left-4 lg:right-auto lg:w-72 lg:p-4">
        <div className="hidden items-center gap-3 px-2 pb-6 lg:flex">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-lg shadow-cyan-500/20">
            <Sparkles size={22} />
          </div>
          <div>
            <h1 className="text-lg font-black">DE Dictionary</h1>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">German-Arabic-English</p>
          </div>
        </div>

        <nav className="grid grid-cols-4 gap-1 lg:grid-cols-1 lg:gap-2" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex min-h-11 items-center justify-center gap-3 rounded-lg px-3 text-sm font-semibold transition lg:justify-start",
                  isActive
                    ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15 dark:bg-cyan-400 dark:text-slate-950"
                    : "text-slate-600 hover:bg-slate-900/6 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
                )
              }
            >
              <item.icon size={19} />
              <span className="sr-only lg:not-sr-only lg:inline">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="mx-auto min-h-screen max-w-7xl px-3 pb-28 pt-4 sm:px-4 sm:pt-5 lg:ml-80 lg:px-8 lg:pb-10">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase text-cyan-700 dark:text-cyan-300 sm:text-sm">
              German Arabic English
            </p>
            <h2 className="mt-2 break-words text-2xl font-black text-slate-950 dark:text-white sm:text-3xl md:text-4xl">
              Comprehensive dictionary
            </h2>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
          </Button>
        </header>
        {children}
      </main>
    </div>
  )
}
