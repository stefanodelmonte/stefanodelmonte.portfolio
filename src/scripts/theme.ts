type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const THEME_COLOR: Record<Theme, string> = { light: '#F4F1EA', dark: '#14120F' };
const system = matchMedia('(prefers-color-scheme: dark)');

// Tema visible: el elegido a mano o, si no hay, el del sistema
export function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === 'dark' || set === 'light') return set;
  return system.matches ? 'dark' : 'light';
}

function sync() {
  const theme = currentTheme();
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
  document.getElementById('themeToggle')?.setAttribute('aria-pressed', String(theme === 'dark'));
}

export function initTheme() {
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* almacenamiento bloqueado */ }
    sync();
  });

  // Sin elección guardada, sigue al sistema también en caliente
  system.addEventListener('change', sync);
  sync();
}
