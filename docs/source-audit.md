# Source Audit

Generated: 2026-06-16

## Decision

The live website database now imports the clean master file and the missing-categories JSON bundle. Entries with obvious Arabic OCR damage are rejected before publishing, and duplicate German-English meanings are collapsed to the strongest available row.

## Imported Now

- Imported entries: 4658
- Published categories: 66
- Source rows checked: 6947
- Rejected rows: 972
- Duplicate meanings skipped: 1317
- Missing-categories bundle rows: 4953
- Missing-categories file: `C:\Users\axell\Downloads\german words list\missing_categories_combined_ready.json`

## Category Counts

- Adjectives: 36
- Adverbs: 12
- Apologies: 7
- At home: 391
- At the table: 10
- Basic phrases: 38
- Body and health: 408
- Body parts: 10
- Buildings and housing: 31
- Children: 12
- Christmas: 10
- Clothing: 30
- Colors: 3
- Communication: 185
- Communication and media: 22
- Compliments: 7
- Congratulations and wishes: 11
- Countries and nationalities: 87
- Days of the week: 2
- Earth and nature: 512
- Easter: 5
- Education and work: 262
- Emergencies: 105
- Everyday phrases: 1
- Family and friends: 17
- Farewells: 10
- Feelings: 9
- Food and drink: 97
- Football: 14
- Function words: 16
- Furniture and home: 10
- Greetings: 7
- Health: 10
- Household appliances: 10
- Hygiene: 10
- In the city: 248
- Introductions: 24
- Invitations: 12
- Inviting and visiting: 12
- Job interview: 19
- Learning: 37
- Leisure: 341
- Measures and weights: 18
- Months and year: 15
- Nature: 40
- Nouns and exclamations: 22
- Numbers: 58
- Numbers and measurements: 99
- People: 243
- Personal information: 23
- Places: 9
- Professions: 28
- Requests and clarification: 16
- Shopping and money: 24
- Sports and fitness: 424
- Sports and leisure: 15
- Thanks: 5
- The day: 10
- The week: 6
- Time: 57
- Transport: 7
- Transport and travel: 32
- Travel and transport: 328
- Verbs: 48
- Weather: 22
- Work: 9

## Source Quality

| Source | Rows | Missing English | Missing Arabic | Duplicate German |
| --- | ---: | ---: | ---: | ---: |
| german_dictionary_master.json | 1994 | 804 | 332 | 0 |
| missing categories bundle | 4953 | 0 | 0 | 344 |
| pons_dictionary_ready_trilingual.json | 4568 | 0 | 0 | 0 |
| pons_dictionary_review_queue.json | 616 | 392 | 153 | 0 |
| german_dictionary_master_with_pons.json | 6658 | 1192 | 485 | 0 |

## Review Notes

- PONS ready rows held for separate review: 4568
- PONS review rows held for separate review: 616
- Obvious Arabic OCR noise inside PONS ready rows: 188
- Level values remain in the data for future study features, but the current UI no longer exposes A1/A2/B1/B2 filters.

## Next Data Pass

1. Keep JSON as the main import format.
2. Use CSV only for human review.
3. Keep XLSX as a readable workbook copy.
4. Review rejected OCR rows in small batches before importing them.
5. Add verified example sentences only when they are checked.
