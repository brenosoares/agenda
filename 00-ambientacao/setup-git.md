# Setup de Git e Fluxo de Branches

## Configuração Inicial

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"
```

## Fluxo Sugerido

- Branch principal: `main`
- Para cada exercício: `feat/<sigla-exercicio>` (ex.: `feat/e3-form-cadastro`)
- Para refatorações: `refactor/...`
- Para ajustes rápidos: `fix/...`

## Padrão de Commit (Conventional Commits)

Tipos comuns:
- `feat:` nova funcionalidade
- `fix:` correção
- `docs:` documentação
- `refactor:` melhora sem alterar comportamento externo
- `chore:` tarefas auxiliares
- `test:` adição/ajuste de testes
- `style:` formatação (sem mudança lógica)

Exemplo:
```
feat: adiciona layout responsivo do blog (C1)
```

## Pull Requests

Checklist sugerido:
- Descrição clara
- Referência à issue
- Prints (se visual)
- Passos de teste
- Dúvidas ou pontos de atenção

## Dicas

- Commits pequenos facilitam revisão.
- Revise antes de abrir PR (self-review).