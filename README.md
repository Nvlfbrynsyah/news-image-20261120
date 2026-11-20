# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Nvlfbrynsyah/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Nvlfbrynsyah/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

## The World in One Image

This image sums up Friday 20 November 2026 world news. Round 2 redesigns the front page with a bolder map, a rebuilt summit illustration, and a Day in Numbers strip.

1. **Shenzhen** — Trump, Xi and Putin sign a peace declaration.
2. **The Hague** — The ICJ rules that Myanmar committed genocide against the Rohingya.
3. **New York** — Anthropic stages a record $81.3bn IPO.
4. **India** — 300,000 flee ahead of Cyclone Akvan.
5. **Berlin** — European leaders call the Shenzhen summit a photo op.
6. **Seoul** — South Korean exports top $1 trillion.
7. **Riyadh** — A Houthi strike damages the city's tallest tower.

`poster.html` contains the layout, styles, and inline SVG artwork. A 1024 × 1024 Chromium screenshot of the poster is checked in as `entry.png`. `main.ts` copies that PNG to the output directory.

Sources: BBC, Reuters, AP, NYT, USA Today.

## Run it

Open `poster.html` in a browser to view the poster. To write the PNG with Node.js 22, run:

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

If `MAKEFUN_OUTPUT_DIR` is unset, the script writes `/output/entry.png`.
