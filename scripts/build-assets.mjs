import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

async function buildAsset(sourceDir, outputFile, expectedBytes) {
  const names = (await readdir(sourceDir))
    .filter((name) => name.endsWith(".b64"))
    .sort();

  if (!names.length) throw new Error(`No asset chunks found in ${sourceDir}`);

  const parts = [];
  for (const name of names) {
    parts.push((await readFile(path.join(sourceDir, name), "utf8")).trim());
  }

  const bytes = Buffer.from(parts.join(""), "base64");
  if (bytes.length !== expectedBytes) {
    throw new Error(`Invalid reconstructed asset size for ${outputFile}: ${bytes.length} bytes`);
  }
  if (bytes.subarray(0, 4).toString("ascii") !== "RIFF" ||
      bytes.subarray(8, 12).toString("ascii") !== "WEBP") {
    throw new Error(`Reconstructed asset is not a valid WebP: ${outputFile}`);
  }

  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, bytes);
  console.log(`Built ${outputFile} (${bytes.length} bytes) from ${names.length} chunks`);
}

await buildAsset("assets-src/stkz-hero", "public/images/stkz-hero.webp", 34060);
await buildAsset("assets-src/stkz-action-duel", "public/images/stkz-action-duel.webp", 18886);
await buildAsset("assets-src/stkz-action-strike", "public/images/stkz-action-strike.webp", 13746);
await buildAsset("assets-src/stkz-action-attack", "public/images/stkz-action-attack.webp", 15418);
