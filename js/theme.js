import { saveTheme, loadTheme } from './storage.js';

export function applySavedTheme() {
  const theme = loadTheme();
  if (theme) document.documentElement.setAttribute('data-theme', theme);
  else document.documentElement.removeAttribute('data-theme');
}

export function toggleTheme(mode) {
  if (!mode) {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? '' : 'dark';
    if (next) document.documentElement.setAttribute('data-theme', next);
    else document.documentElement.removeAttribute('data-theme');
    saveTheme(next || '');
    return next || '';
  } else {
    if (mode === 'default') {
      document.documentElement.removeAttribute('data-theme');
      saveTheme('');
    } else {
      document.documentElement.setAttribute('data-theme', mode);
      saveTheme(mode);
    }
    return mode;
  }
}

function updateButtonState() {
  const tbtn = document.getElementById('theme-toggle');
  const cbtn = document.getElementById('contrast-toggle');
  const cur = document.documentElement.getAttribute('data-theme') || '';
  if (tbtn) tbtn.setAttribute('aria-pressed', cur === 'dark' ? 'true' : 'false');
  if (cbtn) cbtn.setAttribute('aria-pressed', cur === 'high-contrast' ? 'true' : 'false');
}

document.addEventListener('DOMContentLoaded', () => {
  applySavedTheme();
  updateButtonState();

  const tbtn = document.getElementById('theme-toggle');
  const cbtn = document.getElementById('contrast-toggle');

  if (tbtn) {
    tbtn.addEventListener('click', () => {
      toggleTheme();
      updateButtonState();
    });
  }

  if (cbtn) {
    cbtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'high-contrast' ? 'default' : 'high-contrast';
      toggleTheme(next === 'default' ? 'default' : 'high-contrast');
      updateButtonState();
    });
  }
});