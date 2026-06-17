import { useMemo, useState } from "react"
import { ArrowRight, Check, Languages, RotateCcw, X } from "lucide-react"
import { useAppStore } from "../app/store/useAppStore"
import { words } from "../features/dictionary/data/dictionary"
import type { DictionaryWord } from "../features/dictionary/types/dictionary"
import { Button } from "../shared/ui/Button"

type PracticeMode = "de-en" | "de-ar" | "ar-de"

interface Question {
  word: DictionaryWord
  prompt: string
  correctAnswer: string
  options: string[]
}

const ROUND_SIZE = 10

const modes: Array<{ id: PracticeMode; label: string; description: string }> = [
  { id: "de-en", label: "German to English", description: "Choose the English meaning." },
  { id: "de-ar", label: "German to Arabic", description: "Choose the Arabic meaning." },
  { id: "ar-de", label: "Arabic to German", description: "Choose the German word." },
]

function shuffle<T>(items: T[]) {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]]
  }
  return copy
}

function getPrompt(word: DictionaryWord, mode: PracticeMode) {
  if (mode === "ar-de") return word.translations.ar
  return word.german
}

function getCorrectAnswer(word: DictionaryWord, mode: PracticeMode) {
  if (mode === "de-en") return word.translations.en
  if (mode === "de-ar") return word.translations.ar
  return word.article ? `${word.article} ${word.german}` : word.german
}

function buildQuestions(mode: PracticeMode): Question[] {
  const roundWords = shuffle(words).slice(0, ROUND_SIZE)
  const shuffledPool = shuffle(words)

  return roundWords.map((word) => {
    const correctAnswer = getCorrectAnswer(word, mode)
    const distractors: string[] = []

    for (const candidate of shuffledPool) {
      const option = getCorrectAnswer(candidate, mode)
      if (candidate.id !== word.id && option !== correctAnswer && !distractors.includes(option)) {
        distractors.push(option)
      }
      if (distractors.length === 3) break
    }

    return {
      word,
      prompt: getPrompt(word, mode),
      correctAnswer,
      options: shuffle([correctAnswer, ...distractors]),
    }
  })
}

export function PracticePage() {
  const addQuizScore = useAppStore((state) => state.addQuizScore)
  const markWordLearned = useAppStore((state) => state.markWordLearned)
  const [seed, setSeed] = useState(0)
  const [mode, setMode] = useState<PracticeMode>("de-en")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [responses, setResponses] = useState<Array<{ wordId: string; selected: string; correct: boolean }>>([])
  const [roundComplete, setRoundComplete] = useState(false)

  const questions = useMemo(() => {
    void seed
    return buildQuestions(mode)
  }, [mode, seed])

  const currentQuestion = questions[currentIndex]
  const answered = selectedAnswer !== null
  const selectedIsCorrect = selectedAnswer === currentQuestion?.correctAnswer
  const progress = ((roundComplete ? ROUND_SIZE : currentIndex) / ROUND_SIZE) * 100
  const score = responses.filter((response) => response.correct).length
  const percent = Math.round((score / ROUND_SIZE) * 100)

  function reset(nextMode = mode) {
    setMode(nextMode)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setResponses([])
    setRoundComplete(false)
    setSeed((value) => value + 1)
  }

  function selectAnswer(answer: string) {
    if (!currentQuestion || selectedAnswer) return
    const correct = answer === currentQuestion.correctAnswer
    setSelectedAnswer(answer)
    setResponses((current) => [...current, { wordId: currentQuestion.word.id, selected: answer, correct }])
    if (correct) markWordLearned(currentQuestion.word.id)
  }

  function continueRound() {
    if (!answered) return

    if (currentIndex + 1 >= questions.length) {
      const finalScore = Math.round((responses.filter((response) => response.correct).length / ROUND_SIZE) * 100)
      addQuizScore(finalScore)
      setRoundComplete(true)
      return
    }

    setCurrentIndex((value) => value + 1)
    setSelectedAnswer(null)
  }

  return (
    <div className="space-y-5">
      <section className="glass soft-glow rounded-xl p-4 sm:p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h3 className="text-2xl font-black text-[var(--text)]">Practice</h3>
            <p className="mt-1 text-sm font-medium text-[var(--muted)]">
              One question at a time, instant feedback, and a clear 10-question round.
            </p>
          </div>
          <Button className="w-full sm:w-auto" variant="secondary" onClick={() => reset()}>
            <RotateCcw size={17} /> New set
          </Button>
        </div>

        <div className="mt-5 grid gap-2 md:grid-cols-3">
          {modes.map((item) => (
            <button
              key={item.id}
              onClick={() => reset(item.id)}
              className={`min-w-0 rounded-xl border p-4 text-left transition hover:-translate-y-0.5 ${
                mode === item.id
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text)]"
                  : "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
              }`}
            >
              <div className="flex items-center gap-2 break-words font-black">
                <Languages size={17} /> {item.label}
              </div>
              <p className="mt-1 text-sm font-medium opacity-85">{item.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-[var(--surface-soft)]">
            <div className="practice-progress h-full rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-sm font-black text-[var(--muted)]">
            {roundComplete ? ROUND_SIZE : currentIndex + 1}/{ROUND_SIZE}
          </span>
        </div>

        {roundComplete ? (
          <article className="glass rounded-xl p-6 text-center sm:p-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--success-soft)] text-[var(--success)]">
              <Check size={30} />
            </div>
            <h3 className="mt-5 text-3xl font-black text-[var(--text)]">Round complete</h3>
            <p className="mt-2 text-lg font-bold text-[var(--muted)]">
              Score: {percent}% · {score} correct answers out of {ROUND_SIZE}
            </p>
            <Button className="mt-6 w-full sm:w-auto" onClick={() => reset()}>
              Start new round
            </Button>
          </article>
        ) : (
          <article className="glass rounded-xl p-4 sm:p-6">
            <div className="min-w-0">
              <p className="text-sm font-black text-[var(--accent-strong)]">Question {currentIndex + 1}</p>
              <h4 className={`mt-3 break-words text-3xl font-black text-[var(--text)] ${mode === "ar-de" ? "rtl" : ""}`}>
                {currentQuestion.prompt}
              </h4>
              <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                {modes.find((item) => item.id === mode)?.description}
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              {currentQuestion.options.map((option) => {
                const optionIsCorrect = option === currentQuestion.correctAnswer
                const selectedOption = selectedAnswer === option
                const showCorrect = answered && optionIsCorrect
                const showWrong = answered && selectedOption && !optionIsCorrect

                return (
                  <button
                    key={option}
                    onClick={() => selectAnswer(option)}
                    disabled={answered}
                    className={`flex min-h-14 items-center justify-between gap-3 rounded-xl border px-4 py-3 font-black transition ${
                      showCorrect
                        ? "border-[var(--success)] bg-[var(--success-soft)] text-[var(--text)]"
                        : showWrong
                          ? "border-[var(--danger)] bg-[var(--danger-soft)] text-[var(--text)]"
                          : "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] hover:border-[var(--accent)] disabled:cursor-default"
                    }`}
                  >
                    <span className={`min-w-0 flex-1 break-words ${mode === "de-ar" ? "rtl text-right leading-relaxed" : "text-left"}`}>
                      {option}
                    </span>
                    {showCorrect ? <Check size={18} /> : showWrong ? <X size={18} /> : null}
                  </button>
                )
              })}
            </div>

            {answered ? (
              <div
                className={`mt-5 rounded-xl border p-4 font-bold ${
                  selectedIsCorrect
                    ? "border-[var(--success)] bg-[var(--success-soft)] text-[var(--text)]"
                    : "border-[var(--danger)] bg-[var(--danger-soft)] text-[var(--text)]"
                }`}
              >
                {selectedIsCorrect ? (
                  <p>Correct. Nice work.</p>
                ) : (
                  <p>
                    Incorrect. Correct answer:{" "}
                    <span className={`font-black ${mode === "de-ar" ? "rtl inline-block text-right" : ""}`}>
                      {currentQuestion.correctAnswer}
                    </span>
                  </p>
                )}
              </div>
            ) : null}

            <div className="mt-6 flex justify-end">
              <Button className="w-full sm:w-auto" disabled={!answered} onClick={continueRound}>
                {currentIndex + 1 >= questions.length ? "Finish round" : "Continue"} <ArrowRight size={17} />
              </Button>
            </div>
          </article>
        )}
      </section>
    </div>
  )
}
