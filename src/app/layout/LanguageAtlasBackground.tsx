export function LanguageAtlasBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 language-atlas">
      <div className="atlas-pattern absolute inset-0" />
      <div className="absolute left-[7%] top-24 hidden text-8xl font-black text-cyan-600/10 md:block">DE</div>
      <div className="absolute right-[8%] top-44 hidden text-8xl font-black text-amber-600/10 md:block">AR</div>
      <div className="absolute bottom-24 left-[42%] hidden text-7xl font-black text-emerald-600/10 lg:block">EN</div>
    </div>
  )
}
