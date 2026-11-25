import { mkdirSync, writeFileSync } from "node:fs";

// The GPS's own excuse for sending the driver down the wrong road.
// Second pass: tightened the ending — the GPS now doubles down and
// claims the lake is an upgrade over the destination, which lands
// smugger and gives the joke a sharper turn than the softer v1 close.
const ENTRY =
  "The map swore that cul-de-sac was a shortcut, so I believed it \u2014 and honestly, the lake at the end beats wherever you were going anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
