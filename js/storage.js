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