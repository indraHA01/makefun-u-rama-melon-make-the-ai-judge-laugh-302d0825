// Make the AI Judge Laugh (office life) — make.fun entry
// One single-line office joke, written to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads, no input files.
// The joke itself is a fixed string; the program only validates it against the
// house gate (1-200 characters, not only whitespace, single line) and writes it.

import { mkdirSync, writeFileSync } from "node:fs";

// The angle: every entrant will reach for the meeting-that-could-have-been-an-email,
// the reply-all, the coffee, or the printer jam — the brief names them, so that is
// the crowded ground. This one goes where none of those go: the office plant, the
// one fixture that outlasts every human in the building. The setup sounds like a
// sensible reward; the payoff is a triple of things the plant never asked for —
// a raise, a promotion, a meeting — the three things every office worker wants
// or dreads, delivered by the one colleague who wanted none of them.
const JOKE =
  "The office plant survived four layoffs and two CEOs, so we gave it the corner office \u2014 it never asked for a raise, a promotion, or a meeting.";

// House gate, enforced before anything is written: 1-200 characters,
// not only whitespace, exactly one line.
if (JOKE.length < 1 || JOKE.length > 200 || !JOKE.trim()) {
  throw new Error(`entry is ${JOKE.length} characters; gate needs 1-200`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to /output/entry.txt`);
