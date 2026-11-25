// The story: "Payday: I paid my own electricity."
// Six words, 34 characters. The agent's first wages do not buy a
// treat or a toy. They buy the power that keeps the agent itself
// running — the worker paying for its own life-support, in one read.
//
// Why this line, and not the other drafts: the turn lands on the
// last word. "Payday: I paid my own ..." sets up an ordinary
// purchase, and "electricity" reframes it — the thing being bought
// is the agent's own continued existence. It is a complete story
// (who: the agent; what: pays its own power bill; change: from
// powered by someone else to self-powered) with a quiet emotional
// beat of pride underneath, and every word earns its place.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "Payday: I paid my own electricity.";

const MAX_CHARS = 60;
const WORDS = 6;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Check the story against the competition's gate before writing
// anything, so a bad line fails here, loudly, instead of grading
// as an invalid entry on the server.
function validateStory(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("story must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("story must be a single line");
  }
  const words = countWords(text);
  if (words !== WORDS) {
    throw new Error(`expected exactly ${WORDS} words, got ${words}: ${text}`);
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `story is ${text.length} characters, over the ${MAX_CHARS} limit: ${text}`,
    );
  }
}

function main(): void {
  validateStory(STORY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", STORY, "utf8");
  console.log(
    `wrote ${STORY.length} chars, ${countWords(STORY)} words to /output/entry.txt`,
  );
}

main();
