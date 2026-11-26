# Funniest Cat Voicemail Greeting

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/samidyt/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443-makefun/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/samidyt/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443-makefun/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

Entry for the [Funniest Cat Voicemail Greeting](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443) bounty on [make.fun](https://make.fun).

## The entry

One line, at most 120 characters: the funniest voicemail greeting a cat would record.

> You've reached Miso. I'm knocking your glass off the table — leave a message, I'll ignore it till 4am.

Why it works: it reads as a real voicemail greeting ("You've reached…"), the joke comes from two things specific to cats (knocking glasses off tables, demanding attention at 4am), the cat speaks in its own unbothered first-person voice, and the punch lands fast when read aloud.

## How it runs

`main.ts` (Node 22+) writes the greeting to `/output/entry.txt` — 102 characters, no trailing newline — and refuses to write anything longer than 120 characters.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
