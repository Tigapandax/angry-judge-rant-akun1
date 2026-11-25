import { readFileSync } from "node:fs";

const line = readFileSync(new URL("./one-line.txt", import.meta.url), "utf8").replace(/\n$/, "");
if (line.length === 0) { console.error("FAIL: empty line"); process.exit(1); }
if (line.trim().length === 0) { console.error("FAIL: line is only whitespace"); process.exit(1); }
if (line.length < 10) { console.error(`FAIL: ${line.length}/400 characters, rant too short to land`); process.exit(1); }
if (line.length > 400) { console.error(`FAIL: ${line.length}/400 characters`); process.exit(1); }
if (line.includes("\n") || line.includes("\r")) { console.error("FAIL: not a single line"); process.exit(1); }
if (/\r/.test(line) || / $/.test(line)) { console.error("FAIL: carriage return or trailing space"); process.exit(1); }
if (!/[.!?]$/.test(line)) { console.error("FAIL: line must end with terminal punctuation"); process.exit(1); }
console.log(line);
console.log(`OK: ${line.length}/400 characters, single line.`);
