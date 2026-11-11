// Genera los CV en PDF a partir de /cv/es/ y /cv/en/ (necesita `astro build` antes; `npm run cv` lo hace todo).
// Sirve dist/ con un servidor estático propio y lo imprime con Chrome/Chromium sin interfaz:
// CHROME_PATH o, si no, el Chromium que instala Playwright.
import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const out = (lang) => join(root, 'public', 'cv', `stefano-delmonte-cv-${lang}.pdf`);

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.svg': 'image/svg+xml', '.png': 'image/png',
};

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const base = join(process.env.LOCALAPPDATA ?? join(process.env.HOME ?? '', '.cache'), 'ms-playwright');
  const dirs = existsSync(base) ? readdirSync(base).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse() : [];
  for (const dir of dirs) {
    for (const exe of ['chrome-win64/chrome.exe', 'chrome-win/chrome.exe', 'chrome-linux/chrome', 'chrome-mac/Chromium.app/Contents/MacOS/Chromium']) {
      const path = join(base, dir, exe);
      if (existsSync(path)) return path;
    }
  }
  throw new Error('No encuentro Chrome: define CHROME_PATH o instala Chromium con `npx playwright install chromium`.');
}

if (!existsSync(join(dist, 'cv', 'es', 'index.html'))) throw new Error('Falta el build: ejecuta `npm run cv`.');
const chrome = findChrome();

const server = createServer((req, res) => {
  let path = normalize(join(dist, decodeURIComponent(new URL(req.url, 'http://x').pathname)));
  if (!path.startsWith(dist)) { res.writeHead(403).end(); return; }
  if (existsSync(path) && statSync(path).isDirectory()) path = join(path, 'index.html');
  if (!existsSync(path)) { res.writeHead(404).end(); return; }
  res.writeHead(200, { 'Content-Type': TYPES[extname(path)] ?? 'application/octet-stream' }).end(readFileSync(path));
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const { port } = server.address();

try {
  for (const lang of ['es', 'en']) {
    // Asíncrono: el servidor de este mismo proceso tiene que seguir respondiendo a Chrome
    await promisify(execFile)(chrome, [
      '--headless=new',
      '--no-pdf-header-footer',
      // WebGL por software para las montañas de la cabecera
      '--use-angle=swiftshader',
      '--enable-unsafe-swiftshader',
      '--virtual-time-budget=6000',
      `--print-to-pdf=${out(lang)}`,
      `http://127.0.0.1:${port}/cv/${lang}/`,
    ], { timeout: 60000 });
    console.log(`CV ${lang}: ${out(lang)}`);
  }
} finally {
  server.close();
}
