import { mkdirSync, writeFileSync } from "node:fs";

const entry = "chore: force-pushed to main at 4:59 PM on Friday — CI is just a suggestion anyway";

if (entry.length < 1 || entry.length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
