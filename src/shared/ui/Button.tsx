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
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-cyan-600 text-white shadow-lg shadow-cyan-600/20 hover:bg-cyan-500 focus-visible:outline-cyan-600 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300",
        variant === "secondary" &&
          "border border-slate-400/60 bg-white/85 text-slate-900 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800",
        variant === "ghost" && "text-slate-700 hover:bg-slate-900/7 dark:text-slate-300 dark:hover:bg-white/10",
        variant === "danger" && "bg-rose-500 text-white hover:bg-rose-400 focus-visible:outline-rose-500",
        size === "sm" && "h-9 px-3 text-sm",
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
