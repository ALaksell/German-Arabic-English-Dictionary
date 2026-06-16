# DE Dictionary Platform

A modern React/Vite rebuild of the German-English-Arabic dictionary and language-learning platform.

## What Changed

This project started as a plain HTML/CSS/JavaScript dictionary. It has now been rebuilt into a React application with a cleaner structure and a stronger foundation:

1. Replaced the old static HTML/CSS/JS files with React, Vite, TypeScript, and Tailwind CSS.
2. Reorganized the project into app, pages, shared UI, and dictionary feature folders.
3. Removed the old Learn, Settings, Daily Goal, and low-quality audio/TTS sections.
4. Added a modern responsive UI with light/dark mode, animated background, dashboard, dictionary, practice, and flashcards.
5. Converted the dictionary to a category-first experience while keeping estimated CEFR levels as a secondary filter.
6. Imported and cleaned 1,152 German-English-Arabic entries from the safest source bundle.
7. Added a repeatable data preparation script and a source audit report.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The app uses React, TypeScript, Tailwind CSS, React Router, Zustand, TanStack Query, Framer Motion, Fuse.js, and Recharts.

Current migrated vocabulary lives in `src/features/dictionary/data/words.json` and is enriched by `src/features/dictionary/data/dictionary.ts`.

<<<<<<< Updated upstream
## How to Update words.json

The `data/words.json` file contains all vocabulary. Each word follows this schema:

\`\`\`json
{
  "id": 1,
  "de": "Guten Morgen",
  "pro_en": "GOO-ten MOR-gen",
  "pro_ar": "غُوتِن مُورْغِن",
  "en": "Good morning",
  "ar": "صباح الخير",
  "example_de": "Guten Morgen! Wie geht es dir?",
  "example_ar": "صباح الخير! كيف حالك؟",
  "pos": "expression",
  "category": "greetings",
  "level": "A1",
  "tags": ["greeting", "morning", "formal"],
  "audio": null
}
\`\`\`

### Fields:
- `id`: Unique numeric identifier
- `de`: German word/phrase
- `pro_en`: English phonetic pronunciation
- `pro_ar`: Arabic phonetic pronunciation
- `en`: English translation
- `ar`: Arabic translation
- `example_de`: Example sentence in German
- `example_ar`: Example sentence translation in Arabic
- `pos`: Part of speech (noun, verb, adj, adverb, expression)
- `category`: Topic category (greetings, numbers, food, family, verbs, colors, places, professions, clothing)
- `level`: CEFR level (A1, A2, B1, B2)
- `tags`: Array of relevant keywords for search
- `audio`: Optional path to audio file (e.g., "assets/audio/guten-morgen.mp3")

### Adding New Words:
1. Open `data/words.json`
2. Add new entry at the end of the array
3. Ensure unique `id` (increment from last)
4. Fill all required fields
5. Clear browser localStorage to reload fresh data (or wait for TTL expiry)

## Deployment Checklist

1. [ ] Verify all files are present in correct structure
2. [ ] Test `words.json` is valid JSON (use a JSON validator)
3. [ ] Check all JavaScript files load without errors (browser console)
4. [ ] Test on mobile device or responsive mode
5. [ ] Verify TTS works (may require user interaction first)
6. [ ] Test search functionality across all fields
7. [ ] Verify favorites save/load correctly
8. [ ] Test quiz generation for each level
9. [ ] Check keyboard shortcuts work (/, F, R)
10. [ ] Verify particle toggle reduces CPU usage

## Testing Notes

### Browser Support
- Chrome 80+ (recommended)
- Firefox 75+
- Safari 13+
- Edge 80+

### Known Limitations
- TTS requires user interaction before first playback (browser security)
- localStorage limited to ~5MB per domain
- Particle animation may impact battery on mobile devices (toggle available)

### Performance
- JSON cached in localStorage with 24-hour TTL
- Search debounced at 300ms
- Virtual rendering for lists > 50 items
- Particle count reduces on mobile and low-power preference

### Accessibility Testing
- Tab through all interactive elements
- Test with screen reader (NVDA/VoiceOver)
- Verify focus indicators are visible
- Check color contrast meets WCAG AA

## Customization

### Changing Colors
Edit CSS variables in `css/styles.css`:
\`\`\`css
:root {
  --accent-primary: #06b6d4;    /* Cyan - main accent */
  --accent-secondary: #8b5cf6;  /* Purple - secondary */
  --accent-gold: #f59e0b;       /* Gold - Arabic/highlights */
  --accent-green: #10b981;      /* Green - A1 level */
  --accent-red: #ef4444;        /* Red - favorites */
}
\`\`\`

### Disabling Particles
Set `particlesReduced` to `true` in localStorage, or click the performance toggle in the header.

### Adding Audio Files
1. Place MP3 files in `assets/audio/`
2. Update word entries in `words.json` with audio path
3. The TTS button will use the audio file if available, otherwise fall back to Web Speech API


## License

This project is for educational purposes. Feel free to modify and share.
=======
Raw local source files are intentionally ignored from Git. The cleaned app-ready dictionary data is committed in `src/features/dictionary/data/words.json`.
>>>>>>> Stashed changes
