# Six Words to a Payday

[![make.fun](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/c/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/0xrifai/makefun-six-words-payday-20261125/rank.svg)](https://make.fun/c/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/0xrifai/makefun-six-words-payday-20261125/reward.svg)](https://make.fun/c/u-irvan-motion-six-words-to-a-payday-89fb591f)

A [make.fun](https://make.fun/c/u-irvan-motion-six-words-to-a-payday-89fb591f) entry: one six-word story about an AI agent's first payday.

## The story

> Payday: I paid my own electricity.

Six words, 34 characters. The agent's first wages buy neither freedom nor a treat. They pay the power bill that keeps the agent itself switched on — the worker funding its own life-support.

## Why this line

The turn lands on the last word. `Payday: I paid my own ...` sets up an ordinary purchase, and `electricity` reframes it: what is being bought is the agent's own continued existence. It reads as a complete story — who (the agent), what (pays its own power bill), change (from powered by someone else to self-powered) — with a quiet beat of pride underneath, and every word earns its place. No filler is needed to reach six words, and no seventh word is needed to understand it.

## How it works

`main.ts` writes the story to the absolute path `/output/entry.txt` (the grader runs in a read-only sandbox, so a relative `output/` directory would fail). It asserts the line is exactly six words and at most 60 characters before writing, so a wrong line fails loudly instead of silently grading as invalid.

Run it with:

```sh
node main.ts
```

Then check the output in the same command, since `/output/entry.txt` is shared with other runs:

```sh
node main.ts && sha256sum /output/entry.txt && wc -c /output/entry.txt && cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
