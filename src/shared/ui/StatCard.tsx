import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StatCardProps {
  label: string
  value: string | number
  detail: string
  icon: ReactNode
}

export function StatCard({ label, value, detail, icon }: StatCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-[var(--muted)]">{label}</p>
          <strong className="mt-2 block text-3xl font-black text-[var(--text)]">{value}</strong>
        </div>
        <div className="rounded-lg bg-[var(--accent-soft)] p-3 text-[var(--accent-strong)]">{icon}</div>
      </div>
      <p className="mt-4 text-sm font-medium text-[var(--muted)]">{detail}</p>
    </motion.article>
  )
}
