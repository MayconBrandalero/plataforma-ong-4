# Acessibilidade

Resumo das implementações:
- Skip link no topo para pular menus e acessar conteúdo principal imediatamente.
- Estrutura semântica (header, nav, main, section, footer).
- Todos os controles são alcançáveis via teclado (Tab/Shift+Tab).
- Modal implementado com role="dialog", aria-modal, foco preso enquanto aberto, botão de fechar com aria-label.
- Menu responsivo com aria-expanded e aria-controls; teclado e "Escape" fecha menus e modais.
- Entradas de formulário com mensagens de erro acessíveis (texto adjacente com role=status).
- Modo escuro e alto contraste — cores alternativas que garantem contraste mínimo 4.5:1.
- Etiquetas e legendas presentes; placeholders não substituem labels.
- Recomenda-se usar leitores de tela para testes (NVDA/VoiceOver).

Notas de teste:
- Testado navegação por teclado: menu, links internos, formulários e modal.
- Recomendação: usar Lighthouse / axe-core / tota11y para auditorias adicionais.

Persistência:
- Preferência de tema salva em localStorage.