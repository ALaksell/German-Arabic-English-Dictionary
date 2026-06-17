type FeedbackTone = "correct" | "wrong"

let audioContext: AudioContext | null = null

function getAudioContext() {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext
  if (!AudioContextConstructor) return null
  audioContext ??= new AudioContextConstructor()
  return audioContext
}

export function playFeedbackTone(tone: FeedbackTone) {
  try {
    const context = getAudioContext()
    if (!context) return

    const now = context.currentTime
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    const frequencies = tone === "correct" ? [660, 880] : [220, 165]

    oscillator.type = tone === "correct" ? "sine" : "triangle"
    oscillator.frequency.setValueAtTime(frequencies[0], now)
    oscillator.frequency.exponentialRampToValueAtTime(frequencies[1], now + 0.16)
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.015)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22)

    oscillator.connect(gain)
    gain.connect(context.destination)
    oscillator.start(now)
    oscillator.stop(now + 0.24)
  } catch {
    // Audio feedback is optional; the visual state remains the source of truth.
  }
}
