import {
  AlertTriangle,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Car,
  ChefHat,
  CloudSun,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Languages,
  MessageCircle,
  Palette,
  Ruler,
  Shirt,
  ShoppingBag,
  Smile,
  Trophy,
  Users,
  Volleyball,
  type LucideIcon,
} from "lucide-react"
import { cn } from "../../../shared/lib/utils"

const categoryIconRules: Array<{ match: RegExp; icon: LucideIcon; color: string }> = [
  { match: /earth|nature|weather|plant|tree|storm|snow|sun/i, icon: CloudSun, color: "text-sky-600 dark:text-sky-300" },
  { match: /sport|fitness|football|leisure/i, icon: Dumbbell, color: "text-emerald-600 dark:text-emerald-300" },
  { match: /body|health|hygiene/i, icon: HeartPulse, color: "text-rose-600 dark:text-rose-300" },
  { match: /home|housing|furniture|household|table/i, icon: Home, color: "text-amber-600 dark:text-amber-300" },
  { match: /travel|transport|car|train|bus/i, icon: Car, color: "text-cyan-600 dark:text-cyan-300" },
  { match: /education|learning|school/i, icon: GraduationCap, color: "text-indigo-600 dark:text-indigo-300" },
  { match: /work|profession|job/i, icon: BriefcaseBusiness, color: "text-slate-700 dark:text-slate-200" },
  { match: /city|building|place|country|nationalit/i, icon: Landmark, color: "text-violet-600 dark:text-violet-300" },
  { match: /people|family|friend|child|personal/i, icon: Users, color: "text-pink-600 dark:text-pink-300" },
  { match: /communication|media|phone/i, icon: MessageCircle, color: "text-blue-600 dark:text-blue-300" },
  { match: /emergenc|warning/i, icon: AlertTriangle, color: "text-orange-600 dark:text-orange-300" },
  { match: /number|measure|weight/i, icon: Ruler, color: "text-teal-600 dark:text-teal-300" },
  { match: /food|drink|kitchen/i, icon: ChefHat, color: "text-lime-700 dark:text-lime-300" },
  { match: /color|adjective|adverb/i, icon: Palette, color: "text-fuchsia-600 dark:text-fuchsia-300" },
  { match: /time|day|week|month|calendar/i, icon: CalendarDays, color: "text-yellow-700 dark:text-yellow-300" },
  { match: /clothing|appearance|shirt/i, icon: Shirt, color: "text-purple-600 dark:text-purple-300" },
  { match: /shopping|money/i, icon: ShoppingBag, color: "text-green-700 dark:text-green-300" },
  { match: /greeting|farewell|thanks|compliment|apolog|congratulation|phrase|invitation/i, icon: Smile, color: "text-cyan-700 dark:text-cyan-300" },
  { match: /verb|function|noun|expression/i, icon: Languages, color: "text-slate-700 dark:text-slate-200" },
  { match: /trophy|match|game/i, icon: Trophy, color: "text-amber-600 dark:text-amber-300" },
  { match: /ball/i, icon: Volleyball, color: "text-emerald-600 dark:text-emerald-300" },
]

export function CategoryIcon({ category, className }: { category: string; className?: string }) {
  const match = categoryIconRules.find((rule) => rule.match.test(category))
  const Icon = match?.icon ?? BookOpen

  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900/[0.05] dark:bg-white/[0.08]",
        match?.color ?? "text-cyan-700 dark:text-cyan-300",
        className,
      )}
    >
      <Icon size={20} aria-hidden="true" />
    </span>
  )
}
