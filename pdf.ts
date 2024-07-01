import puppeteer from "puppeteer";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

(async () => {
  const __dirname = fileURLToPath(new URL(".", import.meta.url));

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
    scale: 0.8,
  });

  console.log("💾 Saving PDF");
  writeFileSync("output.pdf", pdf);

  await browser.close();

  await server.close();
  console.log("🏁 Done");
})();
