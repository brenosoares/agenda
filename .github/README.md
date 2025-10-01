# Agenda do Curso – Front-end Progressivo

Este repositório consolida a trilha completa de um curso progressivo de Front-end: começamos com HTML semântico, evoluímos por organização de CSS e design system, entramos em fundamentos de JavaScript (funções puras, estruturas de dados), avançamos para manipulação de DOM + construção manual de uma SPA mínima e, finalmente, estruturamos um esqueleto de SPA mais robusta com rotas lazy, estado global e preocupações de acessibilidade e performance.

---

## Visão Geral

| Pilar | Ênfase | Resultado Prático |
|-------|--------|-------------------|
| Semântica | Estrutura correta de conteúdo | HTML limpo e acessível |
| Design System | Tokens e componentes desacoplados | Escalabilidade visual e consistência |
| Lógica | Métricas, agregações e pureza | Código testável e reutilizável |
| DOM e Estado | Atualizações incrementais sem frameworks | Entendimento profundo da base web |
| SPA | Arquitetura modular e lazy loading | Preparação para frameworks modernos |
| Acessibilidade | Foco, contraste, navegação | Inclusividade desde o início |
| Observabilidade | Métricas e evolução planejada | Base para maturidade futura |

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

Cada módulo traz:
- Exercícios incrementais identificados por código (ex.: C1, J3, D6, R1)
- Um mini‑projeto integrador
- (Quando aplicável) base para evolução posterior no módulo seguinte

---

## Módulos e Conteúdos

### 01 – HTML
Foco em: Semântica, hierarquia, landmarks, acessibilidade estrutural, metadados.
Mini‑projeto: Site de Conferência (estrutura semântica + conteúdo informacional).

### 02 – CSS
Foco em: Tokens, arquitetura simples de componentes, responsividade, temas.
Mini‑projeto: Design System Mini (buttons, cards, alerts, nav, theming).

### 03 – JavaScript
Foco em: Funções puras, composição, imutabilidade, cálculo e transformação.
Mini‑projeto: Dashboard Estatístico (métricas agregadas sobre dados simulados).

### 04 – DOM + SPA Fundamentos
Foco em: Manipulação declarativa mínima, fetch, estado local, modais, favoritos, histórico.
Mini‑projeto: Mini Catálogo de Filmes (busca + detalhes + persistência local).

### 05 – SPA Final
Foco em: Arquitetura modular, roteamento manual, lazy loading, estado global, preparação para testes e acessibilidade avançada.
Mini‑projetos: Portal SPA Mínimo → evolução para Esqueleto da SPA Final.

---

## Mini‑Projetos (Resumo)

| Projeto | Pasta | Stack Principal | Conceitos-chave |
|---------|-------|-----------------|-----------------|
| Design System Mini | `02-css/mini-projeto/design-system-mini/` | CSS puro | Tokens, componentes, tema dark |
| Dashboard Estatístico | `03-js/mini-projeto/dashboard-estatistico/` | JS (módulos ES) | Funções puras, agregações, DOM incremental |
| Mini Catálogo de Filmes | `04-dom-spa/mini-projeto/mini-catalogo-filmes/` | JS + Fetch | API externa, modal, favoritos persistidos |
| Portal SPA Mínimo | `05-spa-final/mini-projeto/portal-minimo/` | History API | Rotas básicas, estado simples |
| SPA Final Skeleton | `05-spa-final/prova-pratica/` | Módulos ES + Lazy | Router regex, lazy routes, tema persistente (base), estado modular |

---

## Convenções de Código

| Área | Convenção |
|------|-----------|
| CSS Tokens | `--color-*`, `--space-*`, `--radius-*` |
| Componentes CSS | Nome base + elementos `__` + modificadores `--` (influência BEM simplificada) |
| Funções | Nomes descritivos em lowerCamelCase |
| Estado | Módulos `state.js` ou pasta `state/` com funções atômicas |
| Rotas | Regex explícito + `pattern.test(path)` + fallback 404 |
| Acessibilidade | `aria-live` para regiões dinâmicas, foco visível, botão de tema com `aria-pressed` |
| Persistência | `localStorage` (chaves versionáveis se necessário) |

---

## Arquitetura da SPA Final (Esqueleto)

```
prova-pratica/
  index.html
  src/
    router/      # Resolução de rotas + history
    pages/       # Views carregadas sob demanda
    state/       # Fonte de verdade (cursos, favoritos, flags)
    api/         # Acesso a dados ou mock
    ui/          # Shell + render + nav
```

Princípios:
- Entrada única de render (`renderPage`) para reduzir dispersão.
- Lazy imports para cada página → favorece tempo de carregamento inicial.
- Estado global isolado + funções de escrita explícitas (ex.: `toggleFavorito`).
- Router baseado em regex + captura de grupos nomeados.

---

## Acessibilidade (Status Atual)

| Aspecto | Status |
|---------|--------|
| Foco visível | Implementado por CSS (Design System / Portal) |
| `aria-live` | Usado em dashboards e regiões dinâmicas |
| Modal acessível (`<dialog>`) | Implementação básica (ver melhorias) |
| Foco gerenciado após rota | Planejado (não implementado) |
| Skip link | Planejado |
| Contraste | Manualmente pensado, automatização futura |

Melhorias planejadas:
- Reposicionar foco no título (`<h1>`) após navegação SPA.
- Adicionar bypass de navegação (skip to main).
- Validar contraste via script automatizado.

---

## Testabilidade

Camadas de lógica isoladas (ex.: `metrics.js`) foram desenhadas para testes unitários fáceis:
- Entrada → saída determinística (sem side effects diretos).
- Persistência encapsulada (`toggleFavorito`, grouping de dados).
- Router testável por tabela de rotas vs paths.

Sugestão inicial de estrutura futura:

```
tests/
  metrics.test.js
  router.test.js
  favorites.test.js
  pages/
    cursos.test.js
```

---

## Roadmap Evolutivo (Macro)

| Fase | Objetivo | Resultado |
|------|----------|-----------|
| R1 | Router básico | Navegação sem reload |
| R2 | Lazy routes completas | Redução de carga inicial |
| R3 | Estado global consolidado | Fonte única e previsível |
| R4 | Tema adaptativo + persistência | Melhor UX + respeito ao sistema |
| R5 | A11y avançada (foco + skip + landmarks) | Inclusão e conformidade |
| R6 | Testes (unit + integração leve) | Confiabilidade |
| R7 | CI (lint + testes + build) | Qualidade contínua |
| R8 | Performance e métricas | Observabilidade pró-ativa |

---

## Glossário

| Termo | Definição |
|-------|-----------|
| Token | Valor semântico reutilizável (ex.: `--color-primary`) |
| Favoritos | Subconjunto persistido de itens (curso, filme) |
| Lazy Route | Página carregada apenas quando acessada |
| Shell | Estrutura permanente (nav/header/layout) |
| Render Atômico | Função que escreve o HTML de uma view completa |

---

## Segurança / Segredos

Atualmente: API pública de filmes usa chave placeholder (`demo`).  
Planejado: abstrair chave real via `.env.example` + variáveis injetadas em build (quando ferramenta de bundling for introduzida).

---

## Estilo de Commit (Sugerido)

`<tipo>: <escopo opcional> <descrição>`

Tipos: `feat`, `fix`, `docs`, `refactor`, `chore`, `test`, `perf`.

Ex.:  
`feat(router): adicionar suporte a parâmetros nomeados`  
`docs(a11y): detalhar plano de foco pós-navegação`

---

## Referências Fundamentais

- [MDN Web Docs](https://developer.mozilla.org/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WHATWG HTML](https://html.spec.whatwg.org/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [CSS Specifications](https://www.w3.org/Style/CSS/current-work)

---

## Licença

Definir (ex.: MIT) – não incluída ainda.

---

Se você está iniciando neste repositório: navegue pelos módulos na ordem e leia os READMEs internos. Para evoluir a SPA, concentre-se em `05-spa-final/prova-pratica/` e implemente o roadmap incremental descrito.
