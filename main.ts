import { mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

await mkdir(outputDir, { recursive: true });
await copyFile(source, join(outputDir, 'entry.png'));

console.log('Created entry.png');
