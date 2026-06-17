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
      className="glass rounded-xl p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{label}</p>
          <strong className="mt-2 block text-3xl font-bold text-slate-950 dark:text-white">{value}</strong>
        </div>
        <div className="rounded-lg bg-blue-600/12 p-3 text-blue-700 dark:text-blue-300">{icon}</div>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">{detail}</p>
    </motion.article>
  )
}
