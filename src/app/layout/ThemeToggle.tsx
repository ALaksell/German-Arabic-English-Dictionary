import { Moon, Sun } from "lucide-react"
import { cn } from "../../shared/lib/utils"
import { useAppStore } from "../store/useAppStore"

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const theme = useAppStore((state) => state.theme)
  const setTheme = useAppStore((state) => state.setTheme)
  const isDark = theme === "dark"

  return (
    <div className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-1 shadow-sm">
      <div className="grid grid-cols-2 gap-1">
        <button
          type="button"
          aria-pressed={!isDark}
          onClick={() => setTheme("light")}
          className={cn(
            "inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-3 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
            !isDark
              ? "bg-white text-slate-950 shadow-md dark:bg-slate-200"
              : "text-[var(--muted)] hover:text-[var(--text)]",
          )}
        >
          <Sun size={16} />
          {!compact ? <span>Light</span> : null}
        </button>
        <button
          type="button"
          aria-pressed={isDark}
          onClick={() => setTheme("dark")}
          className={cn(
            "inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-3 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
            isDark
              ? "bg-slate-950 text-white shadow-md dark:bg-cyan-300 dark:text-slate-950"
              : "text-[var(--muted)] hover:text-[var(--text)]",
          )}
        >
          <Moon size={16} />
          {!compact ? <span>Dark</span> : null}
        </button>
      </div>
    </div>
  )
}
