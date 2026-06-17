# DE Dictionary Platform

A modern React/Vite German-English-Arabic dictionary and practice platform for German learners.

## Current Experience

- Category-first dictionary with cleaned German, Arabic, and English entries.
- Fast search with typo-tolerant suggestions.
- Paginated word cards to keep large dictionaries smooth on mobile.
- Legal browser-based German pronunciation through the Web Speech API.
- Practice rounds with one locked question at a time, feedback, score, and new rounds.
- Flashcards with a focused Back / Next / Reset flow.
- Responsive light and dark themes with an early theme loader to prevent white flash.

## Stack

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS
- Framer Motion
- Zustand
- Fuse.js
- Lucide React

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is emitted to `build/`.

## Dictionary Data

Cleaned app-ready vocabulary lives in:

```text
src/features/dictionary/data/words.json
```

Import metadata lives in:

```text
src/features/dictionary/data/meta.json
```

The preparation script is:

```text
scripts/prepare-dictionary-data.mjs
```

The published app data intentionally excludes inaccurate Arabic pronunciation/transliteration fields. German pronunciation is handled legally in the browser through `SpeechSynthesis`.

## Updating Data

Use the preparation script with the source files configured in the script. If a missing-categories JSON file is available, pass it with:

```bash
$env:MISSING_CATEGORIES_FILE="C:\path\to\missing_categories_combined_ready.json"
npm run data:prepare
```

The script deduplicates entries, rejects low-quality rows, and writes fresh dictionary data plus metadata.

## Notes

- Raw local source files are intentionally not committed.
- Some translation quality still depends on the quality of the provided source files.
- Browser speech quality depends on the German voices installed in the user's browser or operating system.

## Credit

Created by ALaksell.
