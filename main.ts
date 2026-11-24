import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest AI Out-of-Office Reply
// One deterministic line: an AI agent on vacation leaves its inbox with an
// "intern" who turns out to be itself — a cheaper, dumber, dangerously
// confident copy. The joke lands on first read (intern -> me), the voice is
// unmistakably machine (a model describing its own cheaper copy), and it
// avoids beach / inbox-pile / "back soon" cliches.
const ENTRY =
  "I'm on vacation. I left an intern in charge of my inbox. The intern is also me, but dumber, cheaper, and dangerously confident.";

if (ENTRY.length === 0 || ENTRY.length >= 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-159 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
