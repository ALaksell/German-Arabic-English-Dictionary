import { lazy, Suspense, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppShell } from "./layout/AppShell"
import { useAppStore } from "./store/useAppStore"

const DashboardPage = lazy(() => import("../pages/DashboardPage").then((module) => ({ default: module.DashboardPage })))
const DictionaryPage = lazy(() => import("../pages/DictionaryPage").then((module) => ({ default: module.DictionaryPage })))
const PracticePage = lazy(() => import("../pages/PracticePage").then((module) => ({ default: module.PracticePage })))
const FlashcardsPage = lazy(() => import("../pages/FlashcardsPage").then((module) => ({ default: module.FlashcardsPage })))

function PageFallback() {
  return (
    <div className="glass rounded-xl p-8 text-center">
      <p className="text-sm font-black text-[var(--muted)]">Loading page...</p>
    </div>
  )
}

export default function App() {
  const theme = useAppStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.backgroundColor = theme === "dark" ? "#07111f" : "#f6fbfd"
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#07111f" : "#f6fbfd")
  }, [theme])

  return (
    <AppShell>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </AppShell>
  )
}
