import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "../lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger"
  size?: "sm" | "md" | "lg"
  children: ReactNode
}

export function Button({ className, variant = "primary", size = "md", children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-black transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-55",
        variant === "primary" &&
          "bg-[var(--accent)] text-white shadow-lg shadow-cyan-600/20 hover:brightness-110 dark:text-slate-950",
        variant === "secondary" &&
          "border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] hover:border-[var(--accent)]",
        variant === "ghost" && "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--text)]",
        variant === "danger" && "bg-[var(--danger)] text-white hover:brightness-110",
        size === "sm" && "min-h-10 px-3 text-sm",
        size === "md" && "h-11 px-4 text-sm",
        size === "lg" && "h-12 px-5 text-base",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
