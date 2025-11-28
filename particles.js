/**
 * Particle Background Module
 * Creates the particle constellation effect with performance toggle
 */

const ParticleBackground = (() => {
  let _canvas = null
  let _ctx = null
  let _particles = []
  let _animationId = null
  let _isRunning = false
  let _isReduced = false
  let _mouseX = 0
  let _mouseY = 0

  const CONFIG = {
    particleCount: 80,
    reducedCount: 30,
    maxDistance: 150,
    particleSize: 2,
    speed: 0.5,
    mouseRadius: 100,
  }

  /**
   * Initialize particle system
   */
  function init(canvasId) {
    _canvas = document.getElementById(canvasId)
    if (!_canvas) return false

    _ctx = _canvas.getContext("2d")

    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      _isReduced = true
    }

    resize()
    createParticles()

    // Event listeners
    window.addEventListener("resize", debounce(resize, 250))
    window.addEventListener("mousemove", handleMouseMove)

    return true
  }

  /**
   * Create particles
   */
  function createParticles() {
    const count = _isReduced ? CONFIG.reducedCount : CONFIG.particleCount
    _particles = []

    for (let i = 0; i < count; i++) {
      _particles.push({
        x: Math.random() * _canvas.width,
        y: Math.random() * _canvas.height,
        vx: (Math.random() - 0.5) * CONFIG.speed,
        vy: (Math.random() - 0.5) * CONFIG.speed,
        size: Math.random() * CONFIG.particleSize + 1,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }
  }

  /**
   * Resize canvas
   */
  function resize() {
    if (!_canvas) return
    _canvas.width = window.innerWidth
    _canvas.height = window.innerHeight
  }

  /**
   * Handle mouse movement
   */
  function handleMouseMove(e) {
    _mouseX = e.clientX
    _mouseY = e.clientY
  }

  /**
   * Animation loop
   */
  function animate() {
    if (!_isRunning || !_ctx) return

    _ctx.clearRect(0, 0, _canvas.width, _canvas.height)

    // Update and draw particles
    _particles.forEach((p, i) => {
      // Update position
      p.x += p.vx
      p.y += p.vy

      // Bounce off edges
      if (p.x < 0 || p.x > _canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > _canvas.height) p.vy *= -1

      // Draw particle
      _ctx.beginPath()
      _ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      _ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`
      _ctx.fill()

      // Draw connections
      if (!_isReduced) {
        for (let j = i + 1; j < _particles.length; j++) {
          const p2 = _particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONFIG.maxDistance) {
            const opacity = (1 - dist / CONFIG.maxDistance) * 0.3
            _ctx.beginPath()
            _ctx.moveTo(p.x, p.y)
            _ctx.lineTo(p2.x, p2.y)
            _ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`
            _ctx.stroke()
          }
        }

        // Mouse interaction
        const mouseDx = p.x - _mouseX
        const mouseDy = p.y - _mouseY
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        if (mouseDist < CONFIG.mouseRadius) {
          const opacity = (1 - mouseDist / CONFIG.mouseRadius) * 0.5
          _ctx.beginPath()
          _ctx.moveTo(p.x, p.y)
          _ctx.lineTo(_mouseX, _mouseY)
          _ctx.strokeStyle = `rgba(245, 158, 11, ${opacity})`
          _ctx.stroke()
        }
      }
    })

    _animationId = requestAnimationFrame(animate)
  }

  /**
   * Start animation
   */
  function start() {
    if (_isRunning) return
    _isRunning = true
    animate()
  }

  /**
   * Stop animation
   */
  function stop() {
    _isRunning = false
    if (_animationId) {
      cancelAnimationFrame(_animationId)
      _animationId = null
    }
  }

  /**
   * Toggle reduced mode
   */
  function setReduced(reduced) {
    _isReduced = reduced
    createParticles()

    if (!reduced && !_isRunning) {
      start()
    }
  }

  /**
   * Check if reduced
   */
  function isReduced() {
    return _isReduced
  }

  /**
   * Debounce helper
   */
  function debounce(func, wait) {
    let timeout
    return function (...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

  // Public API
  return {
    init,
    start,
    stop,
    setReduced,
    isReduced,
  }
})()

// Export for use in other modules
if (typeof window !== "undefined") {
  window.ParticleBackground = ParticleBackground
}
