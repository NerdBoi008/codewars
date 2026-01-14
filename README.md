# Codewars Solutions

This repository contains my **Codewars kata solutions**, organized by **kyu difficulty level**.
Each difficulty folder maintains its **own auto-generated README**, listing all solved katas for that level.

The project is designed to be:

* clean
* scalable
* fully automated
* contributor-friendly

---

## Repository Structure

```ts
codewars/
│
├── 8-kyu/
│   ├── incrementer.ts
│   ├── even-or-odd.ts
│   └── README.md   ← auto-generated
│
├── 7-kyu/
│   ├── shortest-word.ts
│   ├── isograms.ts
│   └── README.md   ← auto-generated
│
├── 6-kyu/
│   ├── build-tower.ts
│   └── README.md   ← auto-generated
│
├── scripts/
│   └── generate-level-readmes.js
│
├── package.json
└── .git/hooks/
    └── pre-push
```

---

## Per-Kyu README Files

Each `X-kyu/README.md` is **automatically generated** and contains a table like:

```md
# 7-kyu Codewars Solutions

| Kata | Language |
|------|----------|
| shortest-word | TypeScript |
| isograms | TypeScript |
```

⚠️ **Do not manually edit these README files** — they are overwritten automatically.

---

## Automation

### README Generator

A Node.js script scans each kyu folder and generates its README:

```tsx
scripts/generate-level-readmes.js
```

### Manual Run

```bash
npm run generate:readmes
```

### Automatic Run (Git Hook)

Before every `git push`, a **pre-push hook**:

1. regenerates all kyu-level READMEs
2. stages updated README files automatically

This guarantees READMEs are **always up to date**.

---

## Git Hook Behavior

```text
git push
   ↓
pre-push hook runs
   ↓
README files regenerated
   ↓
README files staged
   ↓
push continues
```

No manual tracking required ✅

---

## Conventions

* Folder naming: `X-kyu`
* One kata = one file
* Supported languages:

  * `.ts` → TypeScript
  * `.js` → JavaScript
* Kata file name = kata title (kebab-case)

---

## Goals

* Maintain a structured archive of Codewars solutions
* Practice clean problem-solving
* Keep documentation always in sync with code
* Build a strong public problem-solving portfolio

---

## Codewars Profile

[https://www.codewars.com/users/nerdboi008](https://www.codewars.com/users/nerdboi008)
