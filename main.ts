import { mkdirSync, writeFileSync } from "node:fs";

const GREETING =
  "You've reached Miso. I'm knocking your glass off the table \u2014 leave a message, I'll ignore it till 4am.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GREETING, "utf8");
