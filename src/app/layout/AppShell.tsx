import { useEffect, useState, type ReactNode } from "react"
import { NavLink } from "react-router-dom"
import { BookOpen, Brain, Github, LayoutDashboard, LibraryBig, MoreVertical, Sparkles, X } from "lucide-react"
import { cn } from "../../shared/lib/utils"
import { LanguageAtlasBackground } from "./LanguageAtlasBackground"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/dictionary", label: "Dictionary", icon: LibraryBig },
  { to: "/practice", label: "Practice", icon: Brain },
  { to: "/flashcards", label: "Flashcards", icon: BookOpen },
]

function BrandMark() {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="rgb-border flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-lg shadow-cyan-500/20">
        <Sparkles size={22} />
      </div>
      <div className="min-w-0">
        <h1 className="truncate text-base font-black text-[var(--text)] sm:text-lg">DE Dictionary</h1>
        <p className="truncate text-xs font-bold text-[var(--muted)]">German-Arabic-English</p>
      </div>
    </div>
  )
}

function NavigationLink({ item, onNavigate }: { item: (typeof navItems)[number]; onNavigate?: () => void }) {
  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "group flex min-h-12 items-center gap-3 rounded-lg px-3 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
          isActive
            ? "bg-[var(--nav-active)] text-[var(--nav-active-text)] shadow-lg shadow-cyan-500/15"
            : "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text)]",
        )
      }
    >
      <item.icon size={19} />
      <span>{item.label}</span>
    </NavLink>
  )
}

export function AppShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false)
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [])

  return (
    <div className="min-h-screen text-[var(--text)]">
      <LanguageAtlasBackground />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--page-header)] px-3 py-3 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <BrandMark />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-sm transition hover:border-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {menuOpen ? <X size={20} /> : <MoreVertical size={20} />}
          </button>
        </div>

        {menuOpen ? (
          <div id="mobile-navigation" className="menu-pop mt-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavigationLink key={item.to} item={item} onNavigate={() => setMenuOpen(false)} />
              ))}
            </nav>
            <div className="mt-4 grid gap-3 border-t border-[var(--border)] pt-4">
              <ThemeToggle />
              <a
                href="https://github.com/ALaksell"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] px-3 text-sm font-black text-[var(--text)] transition hover:border-[var(--accent)]"
              >
                <Github size={17} /> GitHub
              </a>
              <p className="text-center text-xs font-bold text-[var(--muted)]">Created by ALaksell</p>
            </div>
          </div>
        ) : null}
      </header>

      <aside className="fixed inset-y-4 left-4 z-30 hidden w-72 flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl backdrop-blur-xl lg:flex">
        <div>
          <div className="px-2 pb-6">
            <BrandMark />
          </div>
          <nav className="grid gap-2" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavigationLink key={item.to} item={item} />
            ))}
          </nav>
        </div>

        <div className="mt-auto grid gap-3 border-t border-[var(--border)] pt-4">
          <ThemeToggle />
          <a
            href="https://github.com/ALaksell"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-soft)] px-3 text-sm font-black text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
          >
            <Github size={17} /> GitHub
          </a>
          <p className="text-center text-xs font-bold text-[var(--muted)]">Created by ALaksell</p>
        </div>
      </aside>

      <main className="mx-auto min-h-screen max-w-[92rem] px-3 py-4 sm:px-4 sm:py-5 lg:ml-80 lg:px-8 lg:py-8">
        <div className="mb-6 hidden lg:block">
          <p className="text-sm font-black uppercase text-[var(--accent-strong)]">German Arabic English</p>
          <h2 className="mt-2 text-4xl font-black text-[var(--text)]">Comprehensive dictionary</h2>
        </div>
        {children}
      </main>
    </div>
  )
}
