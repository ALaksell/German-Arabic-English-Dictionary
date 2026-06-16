import { create } from "zustand"
import { persist } from "zustand/middleware"
import { getTodayKey } from "../../shared/lib/utils"

type Theme = "dark" | "light"

interface ProgressState {
  wordsLearned: string[]
  quizScores: number[]
  studyDates: string[]
}

interface AppState {
  theme: Theme
  selectedCategory: string
  favorites: string[]
  reviewDifficulty: Record<string, "again" | "good" | "easy">
  progress: ProgressState
  setTheme: (theme: Theme) => void
  setSelectedCategory: (category: string) => void
  toggleFavorite: (wordId: string) => void
  markWordLearned: (wordId: string) => void
  addQuizScore: (score: number) => void
  setReviewDifficulty: (wordId: string, difficulty: "again" | "good" | "easy") => void
}

function addUnique<T>(items: T[], item: T) {
  return items.includes(item) ? items : [...items, item]
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: "dark",
      selectedCategory: "all",
      favorites: [],
      reviewDifficulty: {},
      progress: {
        wordsLearned: [],
        quizScores: [],
        studyDates: [],
      },
      setTheme: (theme) => set({ theme }),
      setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
      toggleFavorite: (wordId) =>
        set((state) => ({
          favorites: state.favorites.includes(wordId)
            ? state.favorites.filter((id) => id !== wordId)
            : [...state.favorites, wordId],
        })),
      markWordLearned: (wordId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            wordsLearned: addUnique(state.progress.wordsLearned, wordId),
            studyDates: addUnique(state.progress.studyDates, getTodayKey()),
          },
        })),
      addQuizScore: (score) =>
        set((state) => ({
          progress: {
            ...state.progress,
            quizScores: [...state.progress.quizScores.slice(-19), score],
            studyDates: addUnique(state.progress.studyDates, getTodayKey()),
          },
        })),
      setReviewDifficulty: (wordId, difficulty) =>
        set((state) => ({
          reviewDifficulty: { ...state.reviewDifficulty, [wordId]: difficulty },
        })),
    }),
    { name: "de-dictionary-platform" },
  ),
)
