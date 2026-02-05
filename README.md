# German-Arabic-English Dictionary

A comprehensive, interactive German language dictionary and learning platform designed for Arabic speakers. Features vocabulary from A1 to B2 CEFR levels with pronunciation, examples, and interactive quizzes.

## Features

### Dictionary
- **Multi-Language Support**: German words with English phonetic pronunciation, Arabic phonetic pronunciation, English meaning, and Arabic meaning
- **Example Sentences**: Each word includes usage examples in German with translations
- **CEFR Levels**: Vocabulary organized by proficiency levels (A1, A2, B1, B2)
- **Categories**: Words grouped by topic (greetings, numbers, family, food, colors, verbs, places, professions, clothing)

### Views
- **Card View**: Mobile-friendly cards with all word information
- **Table View**: Desktop-optimized table with sortable columns
- **Flashcard View**: Interactive flashcards for practice

### Search
- **Real-Time Search**: Instant filtering across all languages
- **Multi-Field Search**: Search German, English, Arabic, examples, categories, and tags
- **Autosuggest**: Top 6 suggestions as you type
- **Search History**: Recent searches saved locally
- **Scope Toggle**: Search all words, current level, or current category

### Interactive Features
- **Text-to-Speech**: Listen to German pronunciation (Web Speech API)
- **Favorites**: Save words for later review (stored in localStorage)
- **Word of the Day**: Daily rotating featured word
- **Quiz Mode**: Test your knowledge by level

### German Levels Page
- Detailed breakdown of A1-B2 CEFR levels
- Grammar points, vocabulary topics, and skills for each level
- Direct links to filter dictionary by level/category

### Accessibility & UX
- Full keyboard navigation (/ to search, F for favorites, R for random)
- RTL support for Arabic text
- Touch-friendly targets (44px minimum)
- Reduced motion support
- ARIA labels and semantic HTML

## File Structure

\`\`\`
german-dictionary/
├── index.html              # Main HTML file
├── README.md               # This file
├── data/
│   └── words.json          # Vocabulary data
├── css/
│   └── styles.css          # All styles (variables, layout, components, responsive)
├── js/
│   ├── data.js             # Data loader with localStorage caching
│   ├── search.js           # Search engine with debounce and suggestions
│   ├── tts.js              # Text-to-speech functionality
│   ├── favorites.js        # Favorites management
│   ├── quiz.js             # Quiz generator
│   ├── wotd.js             # Word of the Day
│   ├── ui.js               # UI rendering (cards, table, flashcards)
│   ├── categories.js       # Category sidebar
│   ├── levels.js           # German Levels page
│   ├── particles.js        # Background particle animation
│   └── app.js              # Main application controller
└── assets/
    └── audio/              # (Optional) Pre-recorded audio files
\`\`\`

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
