# ONG Esperança — Plataforma

Versão: 1.0.0

Resumo
Projeto Single Page Application (SPA) com foco em acessibilidade (WCAG 2.1 AA), otimização para produção e boas práticas de versionamento (GitFlow). Implementa formulário com validação, persistência local, componentes UI (modal, toast, menu responsivo) e modos de contraste (escuro / alto contraste).

Como rodar localmente
- Instalar dependências (opcional, para build):
  npm install
- Servir localmente (sem build):
  npx http-server -p 8000
- Rodar build (minificação JS/CSS/HTML):
  npm run build
- Build e deploy via GitHub Actions estão configurados no .github/workflows.

Controle de versão
- Branching: siga GitFlow (branches: main, develop, feature/*, release/*, hotfix/*)

Acessibilidade
- ARIA no modal, menu e controles.
- Navegação por teclado (Tab, Shift+Tab, Escape fecha modal/menu).
- Modo escuro e alto contraste com persistência no localStorage.
- Foco visível e contraste de texto >= 4.5:1 nas variantes.

Otimização para produção
- Scripts npm com esbuild / clean-css / html-minifier-terser para minificação.
- GitHub Actions contempla build e deploy (GitHub Pages).
- Recomenda-se compressão de imagens (externa) antes do push.

Documentação adicional:
- CONTRIBUTING.md
- docs/ACCESSIBILITY.md 

Autor: Maycon Brandalero