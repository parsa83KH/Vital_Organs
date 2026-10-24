# Vital Organs / اندام‌های حیاتی

Interactive bilingual (Persian + English) educational site about eight vital organs: anatomy, physiology, common and rare diseases, plus an 18-question university-level quiz.

Built as static files for GitHub Pages (no build step).

## Files

- `index.html` — structure
- `images/` — anatomical organ illustrations
- `styles.css` — cream journal UI (mobile-first)
- `app.js` — organ data, anatomical images, quiz, language toggle

## Features

- Individual clickable organ cards (no body silhouette)
- FA primary + EN toggle
- Detail sheets with function, anatomy notes, disease explanations, and Rare tags
- Scored quiz with post-answer explanations
- Footer: Developed by Parsa Khosravani

## Run locally

Open `index.html` in a browser, or:

```bash
npx --yes serve .
```

## GitHub Pages

Publish the repo root (or `/docs`) as Pages. Paths are relative — no bundler required.

## Credit

Developed by Parsa Khosravani
