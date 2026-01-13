import puppeteer from "puppeteer";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { Command } from "commander";
import open from "open";

const program = new Command();

program
  .name("cv-pdf")
  .description("Generate a PDF from your CV configuration")
  .option("-c, --config <name>", "Config name (without .config.ts)", "base")
  .option("-o, --output <filename>", "Output PDF filename", "output.pdf")
  .option("--no-open", "Don't open PDF after generation")
  .option("--scale <number>", "PDF scale factor", "0.8")
  .parse();

const options = program.opts<{
  config: string;
  output: string;
  open: boolean;
  scale: string;
}>();

(async () => {
  const __dirname = fileURLToPath(new URL(".", import.meta.url));

  console.log(`📄 Using config: ${options.config}`);
  console.log(`📦 Output file: ${options.output}`);

  console.log("⏳ Starting Vite server");
  const server = await createServer({
    configFile: "vite.config.ts",
    root: __dirname,
  });
  await server.listen();

  console.log("🐾 Opening Puppeteer");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(server.resolvedUrls?.local[0] as string, {
    waitUntil: "networkidle0",
  });

  console.log("🖨️  Generating PDF");
  const pdf = await page.pdf({
    format: "A4",
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
    printBackground: true,
    scale: parseFloat(options.scale),
  });

  console.log(`💾 Saving PDF to ${options.output}`);
  writeFileSync(options.output, pdf);

  await browser.close();
  await server.close();

  console.log("✅ Done");

  if (options.open) {
    console.log("📂 Opening PDF...");
    await open(options.output);
  }
})();
