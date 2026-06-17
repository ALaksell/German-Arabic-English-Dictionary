import { useCallback, useEffect, useState } from "react"

type SpeechStatus = "idle" | "speaking" | "unsupported" | "error"

function getGermanVoice() {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find((voice) => voice.lang.toLowerCase().startsWith("de-de")) ??
    voices.find((voice) => voice.lang.toLowerCase().startsWith("de")) ??
    null
  )
}

export function useGermanSpeech() {
  const [status, setStatus] = useState<SpeechStatus>(() =>
    typeof window === "undefined" || !("speechSynthesis" in window) ? "unsupported" : "idle",
  )

  useEffect(() => {
    if (!("speechSynthesis" in window)) return

    const handleVoices = () => setStatus((current) => (current === "unsupported" ? "idle" : current))
    window.speechSynthesis.addEventListener("voiceschanged", handleVoices)
    window.speechSynthesis.getVoices()

    return () => {
      window.speechSynthesis.cancel()
      window.speechSynthesis.removeEventListener("voiceschanged", handleVoices)
    }
  }, [])

  const speak = useCallback((text: string) => {
    if (!("speechSynthesis" in window)) {
      setStatus("unsupported")
      return
    }

    const cleanText = text.trim()
    if (!cleanText) return

    try {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(cleanText)
      utterance.lang = "de-DE"
      utterance.rate = 0.86
      utterance.pitch = 1
      utterance.voice = getGermanVoice()
      utterance.onstart = () => setStatus("speaking")
      utterance.onend = () => setStatus("idle")
      utterance.onerror = () => setStatus("error")
      window.speechSynthesis.speak(utterance)
    } catch {
      setStatus("error")
    }
  }, [])

  return { speak, status, isSpeaking: status === "speaking", isSupported: status !== "unsupported" }
}
