# Contribuição e GitFlow

Fluxo de trabalho:
- main: versão estável/produção.
- develop: integração de features.
- feature/*: desenvolvimento de funcionalidade.
- release/*: preparação para release (corrigir bugs e atualizar versionamento).
- hotfix/*: correções urgentes sobre main.

Commits:
- Use convenção semântica: feat, fix, docs, style, refactor, test, chore.

Pull Requests:
- Sempre a partir de feature/* para develop.
- Descreva o que foi feito, screenshots e critérios de aceitação.

Issues e Milestones:
- Crie Issues para cada tarefa; agrupe por milestones de entrega.

CI / CD:
- A pipeline build.yml roda testes e minifica.
- deploy.yml publica em GitHub Pages a partir da branch main.