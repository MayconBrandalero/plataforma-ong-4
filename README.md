# ONG Esperança

Versão entregue: Single Page Application (SPA) com templates JavaScript, validação de formulário e armazenamento local.

Estrutura principal
- index.html (raiz) — entrada SPA
- css/ — estilos
- js/
  - app.js — roteador e bootstrap
  - menu.js — menu, modal, toast
  - ui.js — UI, validações e binding do formulário
  - storage.js — localStorage
  - templates/ — home.js, projetos.js, cadastro.js
- assets/images — imagens
- pages/ — versões estáticas (backup)

Como rodar localmente
- Abrir um servidor HTTP na pasta do projeto:
  - Com Node:
    npx http-server -p 8000
  - Ou usar Live Server (VS Code).

Funcionalidades importantes
- SPA com roteamento por hash e lazy-load de templates.
- Templates exportam render() (HTML) e init().
- Validação de formulário em tempo real (nome, e‑mail, CPF real, telefone, CEP, estado, data/idade).
- Armazenamento em localStorage (chave `cadastro`).
- Componentes: toast, modal, menu responsivo.

## Autor

Maycon Brandalero
