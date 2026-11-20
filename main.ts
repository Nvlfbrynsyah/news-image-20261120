import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

async function main() {
  const source = new URL('./entry.png', import.meta.url);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

  await mkdir(outputDir, { recursive: true });
  await copyFile(source, join(outputDir, 'entry.png'));
}

await main();
