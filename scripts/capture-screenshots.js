const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  try {
    const outDir = '/tmp/screenshots';
    fs.mkdirSync(outDir, { recursive: true });

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    const url = 'http://localhost:3000/';

    const viewports = [
      { name: 'desktop', width: 1440, height: 900 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 812 },
    ];

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      console.log(`Loading ${url} at ${vp.name} ${vp.width}x${vp.height}...`);
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      const path = `${outDir}/${vp.name}.png`;
      await page.screenshot({ path, fullPage: true });
      console.log(`Saved ${path}`);
    }

    await browser.close();
    console.log('All screenshots saved.');
    process.exit(0);
  } catch (err) {
    console.error('Screenshot script error:', err);
    process.exit(1);
  }
})();
