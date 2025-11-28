/**
 * Text-to-Speech Module
 * Handles TTS via Web Speech API with German voice preference
 */

const TTSEngine = (() => {
  let _synth = null
  let _voices = []
  let _germanVoice = null
  let _isSupported = false
  let _isInitialized = false
  let _isSpeaking = false

  /**
   * Initialize TTS engine
   */
  function init() {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      console.warn("[TTSEngine] Web Speech API not supported")
      _isSupported = false
      return Promise.resolve(false)
    }

    _synth = window.speechSynthesis
    _isSupported = true

    return new Promise((resolve) => {
      // Load voices
      const loadVoices = () => {
        _voices = _synth.getVoices()
        findGermanVoice()
        _isInitialized = true
        resolve(true)
      }

      // Voices may be loaded asynchronously
      if (_synth.getVoices().length > 0) {
        loadVoices()
      } else {
        _synth.addEventListener("voiceschanged", loadVoices, { once: true })
        // Fallback timeout
        setTimeout(() => {
          if (!_isInitialized) {
            loadVoices()
          }
        }, 1000)
      }
    })
  }

  /**
   * Find best German voice
   */
  function findGermanVoice() {
    // Priority: German (Germany), German (Austria), German (Switzerland), any German
    const priorities = [
      (v) => v.lang === "de-DE",
      (v) => v.lang === "de-AT",
      (v) => v.lang === "de-CH",
      (v) => v.lang.startsWith("de"),
    ]

    for (const check of priorities) {
      const voice = _voices.find(check)
      if (voice) {
        _germanVoice = voice
        console.log("[TTSEngine] Using German voice:", voice.name)
        return
      }
    }

    // Fallback to default
    _germanVoice = _voices[0] || null
    console.log("[TTSEngine] Using fallback voice:", _germanVoice?.name || "none")
  }

  /**
   * Speak text in German
   */
  function speak(text, options = {}) {
    return new Promise((resolve, reject) => {
      if (!_isSupported) {
        reject(new Error("TTS not supported"))
        return
      }

      // Cancel any ongoing speech
      if (_synth.speaking) {
        _synth.cancel()
      }

      const utterance = new SpeechSynthesisUtterance(text)

      // Set voice
      if (_germanVoice) {
        utterance.voice = _germanVoice
      }
      utterance.lang = options.lang || "de-DE"
      utterance.rate = options.rate || 0.9
      utterance.pitch = options.pitch || 1
      utterance.volume = options.volume || 1

      utterance.onstart = () => {
        _isSpeaking = true
      }

      utterance.onend = () => {
        _isSpeaking = false
        resolve()
      }

      utterance.onerror = (event) => {
        _isSpeaking = false
        console.error("[TTSEngine] Speech error:", event.error)
        reject(event)
      }

      _synth.speak(utterance)
    })
  }

  /**
   * Stop speaking
   */
  function stop() {
    if (_synth && _synth.speaking) {
      _synth.cancel()
      _isSpeaking = false
    }
  }

  /**
   * Check if currently speaking
   */
  function isSpeaking() {
    return _isSpeaking
  }

  /**
   * Check if TTS is supported
   */
  function isSupported() {
    return _isSupported
  }

  /**
   * Get available voices
   */
  function getVoices() {
    return [..._voices]
  }

  /**
   * Set preferred voice
   */
  function setVoice(voiceName) {
    const voice = _voices.find((v) => v.name === voiceName)
    if (voice) {
      _germanVoice = voice
      return true
    }
    return false
  }

  // Public API
  return {
    init,
    speak,
    stop,
    isSpeaking,
    isSupported,
    getVoices,
    setVoice,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.TTSEngine = TTSEngine
}
