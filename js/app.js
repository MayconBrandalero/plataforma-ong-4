const main = document.getElementById('app');

const routes = {
  '/': () => import('./templates/home.js'),
  '/projetos': () => import('./templates/projetos.js'),
  '/cadastro': () => import('./templates/cadastro.js')
};

function parseHash() {
  const hash = location.hash.replace('#', '') || '/';
  const [path] = hash.split('?');
  return path;
}

async function router() {
  const path = parseHash();
  const routeLoader = routes[path] || routes['/'];
  const module = await routeLoader();
  if (!main) return;
  main.innerHTML = module.render();
  if (module.init) module.init();
  highlightActiveLink(path);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function highlightActiveLink(path) {
  document.querySelectorAll('.menu a, a[data-link]').forEach(a => {
    const href = a.getAttribute('href') || a.getAttribute('data-href') || '';
    const linkPath = href.replace('#', '') || '/';
    if (linkPath === path) a.classList.add('active');
    else a.classList.remove('active');
  });
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  import('./theme.js').then(m => m.applySavedTheme());
  router();
});