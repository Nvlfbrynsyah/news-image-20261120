# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Nvlfbrynsyah/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Nvlfbrynsyah/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

## The world in one image

A 1024 × 1024 illustrated image sums up Friday 20 November 2026 world news. Round 3 is a craft + accuracy upgrade: geographically honest map, legible summit scene, uniform card stat footers, and an illustrated numbers strip.

1. **Shenzhen:** Trump, Xi and Putin sign a 'peace declaration' at their first-ever trilateral summit.
2. **The Hague:** The ICJ rules 9-6 that Myanmar committed genocide against the Rohingya.
3. **New York:** Anthropic's $81.3bn IPO is the biggest ever.
4. **India:** 300,000 flee as Cyclone Akvan nears the coast.
5. **Berlin:** Europe calls the Shenzhen summit a 'photo op'.
6. **Seoul:** South Korea's exports top $1 trillion.
7. **Riyadh:** A Houthi strike damages the city's tallest tower.

## Built with

`poster.html` contains the complete design, inline CSS and original flat SVG illustrations. A Chromium screenshot produces `entry.png`. Node 22 ESM `main.ts` copies that image, resolved relative to the script itself, into `MAKEFUN_OUTPUT_DIR` (default `/output`). No runtime dependencies are required.

Sources: BBC, Reuters, AP, NYT, USA Today. Story copy and figures follow the supplied 20 November 2026 editorial brief. The summit scene is an illustration.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

The output is `output/entry.png`, a deterministic 1024 × 1024 PNG.
