import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stefanodelmonte.com',
  build: {
    assets: 'assets'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-GB' }
      }
    })
  ]
});
