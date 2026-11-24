// Loading Screen Gold: a single loading-screen tip, 200 characters or fewer,
// for stressed developers and AI coding agents.
// Deterministic: writes the exact same bytes on every run.
// Node standard library only; no network, no environment secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: the agent isn't slow — it's still deciding whether 'make it work' was a requirement or a cry for help.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only whitespace, with no trailing newline. Fail loudly if the tip
// ever drifts past the cap, instead of shipping an invalid entry.
if ([...TIP].length < 1 || [...TIP].length > 200 || TIP.trim().length === 0) {
  throw new Error(`tip is ${[...TIP].length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
console.log(TIP);
