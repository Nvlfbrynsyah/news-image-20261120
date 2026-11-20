# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Nvlfbrynsyah/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Nvlfbrynsyah/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

## The World in One Image

A map-led front page sums up the world news of Friday 20 November 2026 in one square image.

1. **Shenzhen:** Trump, Xi and Putin sign a peace declaration.
2. **The Hague:** The ICJ rules that Myanmar committed genocide against the Rohingya.
3. **New York:** Anthropic raises $81.3bn in a record IPO.
4. **India:** 300,000 flee ahead of Cyclone Akvan.
5. **Berlin:** European leaders call the Shenzhen summit a photo op.
6. **Seoul:** South Korean exports top $1 trillion.
7. **Riyadh:** A Houthi strike damages the city's tallest tower.

The layout and inline SVG illustrations live in [`poster.html`](poster.html). A 1024 × 1024 Chromium screenshot produces [`entry.png`](entry.png); [`main.ts`](main.ts) copies that PNG into the output directory.

Sources: BBC, Reuters, AP, NYT, USA Today.

## Run it

With Node.js 22 or newer, run:

```bash
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

The runner creates the output directory if needed and writes `entry.png` there. It defaults to `/output` when `MAKEFUN_OUTPUT_DIR` is unset.
