export function LanguageAtlasBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 site-study-background">
      <div className="site-card-glow site-card-glow-primary" />
      <div className="site-card-glow site-card-glow-secondary" />
      <div className="site-card-sheen" />
      <div className="atlas-pattern absolute inset-0" />
      <div className="gradient-vignette absolute inset-0" />
    </div>
  )
}
