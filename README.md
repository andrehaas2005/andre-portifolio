# Andre Haas — Portfólio

Site pessoal de Andre Haas: um hub que une a apresentação profissional (voltada a oportunidades
internacionais em iOS) e os projetos pessoais fora do código (Projeto 50, livros, música). Página
única, com navegação por âncoras entre as seções.

## Status atual

🚧 **Esqueleto estrutural** — todas as seções, componentes e a navegação já estão prontos e no ar,
mas o conteúdo (bio, experiência, projetos técnicos, links de contato) ainda é **placeholder**.
Todo o texto que precisa ser substituído está centralizado em um único arquivo, veja
[Onde editar o conteúdo](#onde-editar-o-conteúdo) abaixo.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript

## Estrutura do site

| Seção | Âncora | Componente |
|---|---|---|
| Header/navegação | — | `src/components/layout/Header.tsx` |
| Hero (apresentação) | `#topo` | `src/components/sections/Hero.tsx` |
| Sobre | `#sobre` | `src/components/sections/About.tsx` |
| Experiência | `#experiencia` | `src/components/sections/Experience.tsx` |
| Projetos técnicos | `#projetos` | `src/components/sections/Projects.tsx` |
| Projetos pessoais | `#projetos-pessoais` | `src/components/sections/PersonalProjects.tsx` |
| Contato | `#contato` | `src/components/sections/Contact.tsx` |
| Footer | — | `src/components/layout/Footer.tsx` |

Tema escuro fixo, responsivo (mobile-first), sem CMS, backend, formulário funcional ou analytics —
é um site estático de conteúdo.

## Onde editar o conteúdo

Todo o texto do site (nome, cargo, bio, experiências, projetos, links de contato etc.) vive em
**`src/lib/content.ts`**, tipado e comentado. Para publicar o site com informações reais, basta
substituir os valores marcados como placeholder nesse arquivo — nenhum componente precisa ser
tocado.

## Como rodar

```bash
npm install
npm run dev       # http://localhost:3000
```

Outros comandos:

```bash
npm run build     # build de produção
npm run start     # roda o build de produção
npm run lint      # checagem de lint
```

## Deploy

Projeto padrão Next.js — o caminho mais simples é publicar na [Vercel](https://vercel.com/new),
apontando para este repositório.
