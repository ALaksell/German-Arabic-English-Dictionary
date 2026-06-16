import { useMemo, useState } from "react"
import { Check, Languages, RotateCcw, X } from "lucide-react"
import { useAppStore } from "../app/store/useAppStore"
import { words } from "../features/dictionary/data/dictionary"
import type { DictionaryWord } from "../features/dictionary/types/dictionary"
import { Button } from "../shared/ui/Button"

type PracticeMode = "de-en" | "de-ar" | "ar-de"

const modes: Array<{ id: PracticeMode; label: string; description: string }> = [
  { id: "de-en", label: "German to English", description: "Choose the English meaning." },
  { id: "de-ar", label: "German to Arabic", description: "Choose the Arabic meaning." },
  { id: "ar-de", label: "Arabic to German", description: "Choose the German word." },
]

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5)
}

function getPrompt(word: DictionaryWord, mode: PracticeMode) {
  if (mode === "ar-de") return word.translations.ar
  return word.german
}

function getCorrectAnswer(word: DictionaryWord, mode: PracticeMode) {
  if (mode === "de-en") return word.translations.en
  if (mode === "de-ar") return word.translations.ar
  return word.german
}

function getOption(word: DictionaryWord, mode: PracticeMode) {
  return getCorrectAnswer(word, mode)
}

export function PracticePage() {
  const addQuizScore = useAppStore((state) => state.addQuizScore)
  const markWordLearned = useAppStore((state) => state.markWordLearned)
  const [seed, setSeed] = useState(0)
  const [mode, setMode] = useState<PracticeMode>("de-en")
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [savedScore, setSavedScore] = useState<number | null>(null)

  const questions = useMemo(
    () => {
      void seed
      return shuffle(words)
        .slice(0, 10)
        .map((word) => ({
          word,
          options: shuffle([
            getCorrectAnswer(word, mode),
            ...shuffle(words.filter((item) => item.id !== word.id))
              .slice(0, 3)
              .map((item) => getOption(item, mode)),
          ]),
        }))
    },
    [mode, seed],
  )

  const answered = Object.keys(answers).length
  const correct = questions.filter((question) => answers[question.word.id] === getCorrectAnswer(question.word, mode)).length
  const finished = answered === questions.length

  function finishQuiz() {
    const score = Math.round((correct / questions.length) * 100)
    addQuizScore(score)
    setSavedScore(score)
    questions.forEach((question) => {
      if (answers[question.word.id] === getCorrectAnswer(question.word, mode)) markWordLearned(question.word.id)
    })
  }

  function reset(nextMode = mode) {
    setAnswers({})
    setSavedScore(null)
    setMode(nextMode)
    setSeed((value) => value + 1)
  }

  return (
    <div className="space-y-5">
      <section className="glass rounded-xl p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h3 className="text-2xl font-black">Practice</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Train recognition between German, English, and Arabic. Audio was removed to keep the practice clean.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Button className="w-full sm:w-auto" variant="secondary" onClick={() => reset()}>
              <RotateCcw size={17} /> New set
            </Button>
            <Button className="w-full sm:w-auto" onClick={finishQuiz} disabled={!finished}>
              Save score
            </Button>
          </div>
        </div>

        <div className="mt-5 grid gap-2 md:grid-cols-3">
          {modes.map((item) => (
            <button
              key={item.id}
              onClick={() => reset(item.id)}
              className={`min-w-0 rounded-xl border p-4 text-left transition ${
                mode === item.id
                  ? "border-cyan-500 bg-cyan-500/12 text-cyan-900 dark:text-cyan-100"
                  : "border-slate-300/70 bg-white/70 text-slate-700 hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-950/35 dark:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-2 break-words font-black">
                <Languages size={17} /> {item.label}
              </div>
              <p className="mt-1 text-sm opacity-80">{item.description}</p>
            </button>
          ))}
        </div>

        {savedScore !== null ? (
          <div className="mt-5 rounded-xl border border-emerald-400/60 bg-emerald-500/12 p-4 font-bold text-emerald-800 dark:text-emerald-200">
            Saved score: {savedScore}% - {correct} correct answers out of {questions.length}.
          </div>
        ) : null}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        {questions.map((question, index) => {
          const correctAnswer = getCorrectAnswer(question.word, mode)
          const selected = answers[question.word.id]
          const isAnswered = Boolean(selected)

          return (
            <article key={question.word.id} className="glass rounded-xl p-5">
              <div className="min-w-0">
                <p className="text-sm font-bold text-cyan-700 dark:text-cyan-300">Question {index + 1}</p>
                <h4 className={`mt-2 break-words text-2xl font-black ${mode === "ar-de" ? "rtl" : ""}`}>
                  {getPrompt(question.word, mode)}
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {modes.find((item) => item.id === mode)?.description}
                </p>
              </div>
              <div className="mt-5 grid gap-2">
                {question.options.map((option) => {
                  const optionIsCorrect = option === correctAnswer
                  const selectedOption = selected === option
                  return (
                    <button
                      key={option}
                      onClick={() => setAnswers((current) => ({ ...current, [question.word.id]: option }))}
                      className={`flex min-h-12 items-center justify-between gap-3 rounded-lg border px-4 py-2 text-left font-semibold transition ${
                        isAnswered && optionIsCorrect
                          ? "border-emerald-500 bg-emerald-500/12 text-emerald-800 dark:text-emerald-200"
                          : selectedOption
                            ? "border-rose-500 bg-rose-500/12 text-rose-800 dark:text-rose-200"
                          : "border-slate-300/70 bg-white/75 text-slate-800 hover:border-cyan-500 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-100"
                      }`}
                    >
                      <span className={`min-w-0 break-words ${mode === "de-ar" ? "rtl" : ""}`}>{option}</span>
                      {isAnswered && optionIsCorrect ? <Check size={17} /> : selectedOption ? <X size={17} /> : null}
                    </button>
                  )
                })}
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}
