# Agenda do Curso

Repositório que organiza módulos, exercícios, mini‑projetos e a evolução da SPA Final.

## Índice
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Módulos](#módulos)
- [Mini‑Projetos](#mini-projetos)
- [SPA Final](#spa-final)
- [Boas Práticas Adotadas](#boas-práticas-adotadas)
- [Roadmap / Próximos Passos](#roadmap--próximos-passos)
- [Sugestões de Testes](#sugestões-de-testes)
- [Acessibilidade](#acessibilidade)
- [Referências](#referências)

---

## Estrutura de Pastas

```
01-html/
02-css/
03-js/
04-dom-spa/
05-spa-final/
.github/
```

Pastas de mini‑projetos e exercícios seguem o padrão:
`<modulo>/<tipo>/<nome-do-item>/`

---

## Módulos

| Módulo | Foco Principal | Exemplos de Conteúdo |
|--------|----------------|----------------------|
| 01 – HTML | Semântica, estrutura, landmarks, formulários | Estrutura de artigo, acessibilidade básica |
| 02 – CSS | Layouts, tokens, responsividade, acessibilidade visual | Design System Mini (tokens, componentes) |
| 03 – JavaScript | Funções puras, módulos ES, métricas, closures | Dashboard estatístico (agregações) |
| 04 – DOM + SPA Fundamentos | Manipulação DOM, fetch, estado simples, histórico | Catálogo de filmes, debounce, History API |
| 05 – SPA Final | Arquitetura modular, lazy routes, estado global, tema, acessibilidade avançada | Portal mínimo + SPA final skeleton |

---

## Mini‑Projetos

| Categoria | Nome | Caminho | Destaques |
|-----------|------|---------|-----------|
| CSS | Design System Mini | `02-css/mini-projeto/design-system-mini/` | Tokens, componentes, tema dark |
| JS | Dashboard Estatístico | `03-js/mini-projeto/dashboard-estatistico/` | Métricas, agregações, DOM progressivo |
| DOM / SPA | Mini Catálogo de Filmes | `04-dom-spa/mini-projeto/mini-catalogo-filmes/` | Busca API, favoritos, modal |
| SPA | Portal SPA Mínimo | `05-spa-final/mini-projeto/portal-minimo/` | Rotas básicas, favoritos |
| SPA Final | Esqueleto (R2–R8) | `05-spa-final/prova-pratica/` | Lazy loading, state modular, theming |

---

## SPA Final

Objetivos principais:
- Rotas: `/`, `/cursos`, `/curso/:id`, `/favoritos`, `/sobre`
- Lazy load de páginas
- Persistência de favoritos e tema
- Base para testes unitários e futuros E2E
- Estrutura escalável: `router/`, `api/`, `pages/`, `state/`, `ui/`

---

## Boas Práticas Adotadas

- Separação clara entre cálculo (funções puras) e apresentação (DOM)
- Uso de `localStorage` para preferências (tema, favoritos)
- Tokens CSS centralizados para consistência
- Evita mutações desnecessárias em datasets
- Lazy loading para reduzir custo inicial de carregamento

---

## Roadmap / Próximos Passos

| Prioridade | Item | Descrição |
|------------|------|-----------|
| Alta | R2 – Lazy loading de páginas | Carregamento dinâmico com import() e estados de transição |
| Alta | R3 – Estado global modular | Organizar domínio + ações puras e side effects isolados |
| Alta | R4 – Persistência avançada de tema | Preferência + fallback `prefers-color-scheme` + sincronização |
| Alta | R5 – Acessibilidade avançada | Foco gerenciado por rota, skip link, landmarks refinados |
| Alta | R6 – Testes unitários iniciais | metrics, favoritos, roteador, render mínimo |
| Alta | R7 – Pipeline CI | Lint, testes, (opcional) Lighthouse CI |
| Alta | R8 – Performance e métricas | Medir TTFB simulado, tempo de render, log de lazy chunks |
| Média | Configurar API Key segura | Variável de ambiente + instrução .env.example |
| Média | Skeleton Loading | Placeholders para listas (cursos, catálogo) |
| Média | Service Worker (PWA) | Cache estático + fallback offline |
| Média | Automação de contraste | Script de verificação de contraste em tokens |
| Baixa | Dashboard de Telemetria | Exibir tempo médio de render / rota |

---

## Sugestões de Testes

| Área | Teste | Resultado Esperado |
|------|-------|--------------------|
| metrics.js | `sum([])` | 0 |
| metrics.js | `average([])` | 0 |
| favorites (portal) | toggleFavorito add/remove | Persistência e Set atualizado |
| router | Rota inexistente | Render 404 / fallback |
| tema | Persistência após reload | Mantém dataset |
| acessibilidade | Foco após navegação | Foco no `<h1>` da nova página |
| catálogo | Modal detalhes | Conteúdo acessível e fechável |

---

## Acessibilidade

Planejado:
- Foco gerenciado em transições de rota
- Skip link antes do header
- Contraste tokenizado validado automaticamente
- Live regions granulares para estados de loading

---

## Referências

- [MDN Web Docs](https://developer.mozilla.org/)
- [WebAIM](https://webaim.org/)
- [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WHATWG HTML](https://html.spec.whatwg.org/)
- [W3C CSS Specs](https://www.w3.org/TR/CSS/)

---

Se algo faltar, abra uma issue ou marque no PR do bootstrap.
