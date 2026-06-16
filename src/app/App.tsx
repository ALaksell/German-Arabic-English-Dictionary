import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AppShell } from "./layout/AppShell"
import { useAppStore } from "./store/useAppStore"
import { DashboardPage } from "../pages/DashboardPage"
import { DictionaryPage } from "../pages/DictionaryPage"
import { PracticePage } from "../pages/PracticePage"
import { FlashcardsPage } from "../pages/FlashcardsPage"

export default function App() {
  const theme = useAppStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}
