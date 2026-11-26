import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Cat Voicemail Greeting — make.fun bounty entry.
// One line, first-person cat voice: the classic glass-knocking gag with a
// 4am food-demand callback, framed as a real voicemail greeting.
const GREETING =
  "You've reached Miso. I'm knocking your glass off the table \u2014 leave a message, I'll ignore it till 4am.";

// The sealed gate only accepts 1-120 characters: fail loudly rather than
// ever submitting an over-long line.
if ([...GREETING].length > 120 || GREETING.trim().length === 0) {
  throw new Error(`Greeting must be 1-120 characters, got ${[...GREETING].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GREETING, "utf8");
