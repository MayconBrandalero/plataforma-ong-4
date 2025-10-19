export function saveCadastro(data) {
  try {
    localStorage.setItem('cadastro', JSON.stringify(data));
  } catch (e) { }
}

export function loadCadastro() {
  try {
    const raw = localStorage.getItem('cadastro');
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

export function saveTheme(theme) {
  try { localStorage.setItem('theme', theme); } catch (e) {}
}

export function loadTheme() {
  try { return localStorage.getItem('theme'); } catch (e) { return null; }
}