# Source Audit

Generated: 2026-06-16

## Decision

The website database was rebuilt from `german_dictionary_master.json` because it is the cleanest complete trilingual source in the current bundle.

PONS was not imported directly yet. It is large and useful, but many Arabic values come from OCR and some entries marked as ready still contain damaged Arabic text.

## Imported Now

- Imported entries: 1152
- Duplicate meanings skipped: 36
- Source file: `german_dictionary_master.json`
- Levels: A1: 896, A2: 235, B1: 17, B2: 4
- Categories: 56

## Current Source Quality

| Source | Rows | Missing English | Missing Arabic | Duplicate German |
| --- | ---: | ---: | ---: | ---: |
| german_dictionary_master.json | 1994 | 804 | 332 | 0 |
| pons_dictionary_ready_trilingual.json | 4568 | 0 | 0 | 0 |
| pons_dictionary_review_queue.json | 616 | 392 | 153 | 0 |
| german_dictionary_master_with_pons.json | 6658 | 1192 | 485 | 0 |

## PONS Warning

- PONS ready rows held for review: 4568
- PONS review rows held for review: 616
- Obvious Arabic OCR noise inside PONS ready rows: 47

Examples found during audit:

- `der Ehemann` had Arabic OCR text `زذج`, but should be reviewed/corrected as husband.
- `abbiegen` had long repeated Arabic-Indic digit noise.
- Some time expressions had Arabic OCR mistakes even when English was usable.

## Next Data Pass

1. Keep JSON as the main import format.
2. Use CSV only for human review.
3. Keep XLSX as a readable workbook copy.
4. Clean PONS in batches by category before importing it into the live dictionary.
5. Add verified examples only when they are checked; do not generate fake examples.
