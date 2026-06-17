export function LanguageAtlasBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 background-gradient-animation">
      <div className="gradient-blob gradient-blob-first" />
      <div className="gradient-blob gradient-blob-second" />
      <div className="gradient-blob gradient-blob-third" />
      <div className="gradient-blob gradient-blob-fourth" />
      <div className="gradient-blob gradient-blob-fifth" />
      <div className="atlas-pattern absolute inset-0" />
      <div className="gradient-vignette absolute inset-0" />
    </div>
  )
}
