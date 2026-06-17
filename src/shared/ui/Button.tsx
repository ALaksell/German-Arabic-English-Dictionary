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
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-blue-600 text-white shadow-md shadow-blue-600/15 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 focus-visible:outline-blue-600 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600",
        variant === "secondary" &&
          "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800",
        variant === "ghost" && "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
        variant === "danger" && "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600 dark:bg-red-600 dark:hover:bg-red-700",
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
