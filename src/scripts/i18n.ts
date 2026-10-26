import { dict, site, type Lang, type Key } from '../i18n';

const STORAGE_KEY = 'lang';

function save(lang: Lang) {
  try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* almacenamiento bloqueado */ }
}

function setMeta(selector: string, value: string) {
  document.querySelector(selector)?.setAttribute('content', value);
}

export function applyLang(lang: Lang) {
  const d = dict[lang];
  const other: Lang = lang === 'es' ? 'en' : 'es';
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n as Key;
    if (d[key]) el.textContent = d[key];
  });

  // Formato: "atributo:clave;atributo:clave"
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr!.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':');
      if (attr && d[key as Key]) el.setAttribute(attr, d[key as Key]);
    });
  });

  document.title = d['meta.title'];
  setMeta('meta[name="description"]', d['meta.description']);
  setMeta('meta[property="og:title"]', d['meta.title']);
  setMeta('meta[property="og:description"]', d['meta.description']);
  setMeta('meta[property="og:url"]', site.url + site.path[lang]);
  setMeta('meta[property="og:locale"]', site.locale[lang]);
  setMeta('meta[property="og:locale:alternate"]', site.locale[other]);
  setMeta('meta[property="og:image:alt"]', d['meta.imageAlt']);
  setMeta('meta[name="twitter:title"]', d['meta.title']);
  setMeta('meta[name="twitter:description"]', d['meta.description']);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', site.url + site.path[lang]);

  const cv = document.getElementById('cvDownload') as HTMLAnchorElement | null;
  if (cv) cv.href = site.cv[lang];

  const toggle = document.getElementById('langToggle') as HTMLAnchorElement | null;
  if (toggle) {
    toggle.href = site.path[other];
    toggle.hreflang = other;
  }

  // Mantiene la URL coherente con el idioma visible
  if (location.pathname !== site.path[lang]) {
    history.replaceState(null, '', site.path[lang] + location.hash);
  }
}

export function initI18n() {
  // Enlace a la otra versión; con JS cambia sin recargar
  const toggle = document.getElementById('langToggle');
  toggle?.addEventListener('click', (e) => {
    e.preventDefault();
    const next: Lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    save(next);
    applyLang(next);
  });

  const copyBtn = document.getElementById('copyEmailBtn');
  const label = copyBtn?.querySelector<HTMLElement>('[data-i18n]');
  copyBtn?.addEventListener('click', async () => {
    const lang = document.documentElement.lang as Lang;
    try {
      await navigator.clipboard.writeText(site.email);
      if (label) label.textContent = dict[lang]['contact.copied'];
      copyBtn.classList.add('is-copied');
      setTimeout(() => {
        copyBtn.classList.remove('is-copied');
        if (label) label.textContent = dict[document.documentElement.lang as Lang]['contact.copy'];
      }, 1800);
    } catch {
      location.href = `mailto:${site.email}`;
    }
  });

}
