# German Arabic English Dictionary

A modern German-Arabic-English dictionary and practice website for German learners.

The project focuses on clear vocabulary browsing, Arabic and English meanings, category-based learning, practice questions, and flashcards.

## Features

- German, Arabic, and English dictionary entries
- 4,785 words and phrases
- 66 organized categories
- Fast search with typo suggestions
- Category browsing with icons
- Clean word cards
- One-question-at-a-time practice mode
- Animated flashcards
- Light and dark mode
- Responsive layout for desktop, tablet, and mobile
- Animated gradient background
- Creator credit and GitHub link

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- Zustand
- Fuse.js
- Lucide Icons

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is created in:

```text
build/
```

## Preview Build

```bash
npm run preview
```

## Dictionary Data

The main app dictionary file is:

```text
src/features/dictionary/data/words.json
```

Dictionary metadata is stored in:

```text
src/features/dictionary/data/meta.json
```

Arabic translations were reviewed and updated with:

- 2,850 Arabic translation corrections
- 127 added words and phrases

Audio pronunciation is currently removed because the available browser voice quality was not good enough for the learning experience.

## Data Scripts

Prepare dictionary data:

```bash
npm run data:prepare
```

Apply Arabic translation review file:

```bash
$env:ARABIC_REVIEW_FILE="C:\path\to\dictionary-arabic-translation-review-corrected-and-expanded.json"
npm run data:apply-arabic-review
```

## Credit

Created by ALaksell.
