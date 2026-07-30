// Conteúdo centralizado do site — tudo aqui é PLACEHOLDER e deve ser substituído
// por Andre com informações reais. Manter o conteúdo isolado neste módulo facilita
// tanto a edição futura quanto uma eventual versão em inglês (i18n), sem que os
// componentes precisem ser reescritos.

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#projetos-pessoais", label: "Projetos Pessoais" },
  { href: "#contato", label: "Contato" },
];

export const siteIdentity = {
  name: "Andre Haas",
  role: "[Cargo aqui — ex: Senior/Staff iOS Engineer]",
};

export const hero = {
  greeting: "Olá, eu sou",
  name: siteIdentity.name,
  role: siteIdentity.role,
  pitch:
    "[Pitch curto aqui — 1-2 frases sobre o que você faz, para quem, e o que te diferencia]",
  ctaPrimary: { label: "Falar comigo", href: "#contato" },
  ctaSecondary: {
    label: "Baixar currículo (placeholder)",
    href: "#",
  },
};

export const about = {
  heading: "Sobre",
  eyebrow: "Quem sou eu",
  bio: "[Sua bio aqui — 2-3 frases sobre sua trajetória, motivação e o que busca profissionalmente]",
  skills: [
    "[Arquitetura Mobile — placeholder]",
    "[Segurança em iOS — placeholder]",
    "[Swift / SwiftUI — placeholder]",
    "[Objective-C — placeholder]",
    "[CI/CD & automação — placeholder]",
    "[Liderança técnica — placeholder]",
  ],
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  isPlaceholder: boolean;
}

export const experience = {
  heading: "Experiência",
  eyebrow: "Trajetória profissional",
  items: [
    {
      company: "GFT",
      role: "[Cargo placeholder — ex: Staff iOS Engineer]",
      period: "[Período placeholder — ex: 2022 – atual]",
      description:
        "[Descrição placeholder das responsabilidades e conquistas nesta posição]",
      isPlaceholder: true,
    },
    {
      company: "[Empresa anterior placeholder]",
      role: "[Cargo placeholder]",
      period: "[Período placeholder]",
      description:
        "[Descrição placeholder das responsabilidades e conquistas nesta posição]",
      isPlaceholder: true,
    },
  ] satisfies ExperienceItem[],
};

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  href: string;
}

export const projects = {
  heading: "Projetos",
  eyebrow: "Trabalho técnico",
  items: [
    {
      name: "[Nome do projeto 1 — placeholder]",
      description: "[Descrição breve placeholder do projeto e do problema resolvido]",
      tech: ["[Tech A]", "[Tech B]", "[Tech C]"],
      href: "#",
    },
    {
      name: "[Nome do projeto 2 — placeholder]",
      description: "[Descrição breve placeholder do projeto e do problema resolvido]",
      tech: ["[Tech A]", "[Tech B]"],
      href: "#",
    },
    {
      name: "[Nome do projeto 3 — placeholder]",
      description: "[Descrição breve placeholder do projeto e do problema resolvido]",
      tech: ["[Tech A]", "[Tech B]", "[Tech C]"],
      href: "#",
    },
  ] satisfies ProjectItem[],
};

export interface PersonalProjectItem {
  name: string;
  description: string;
  href: string;
}

export const personalProjects = {
  heading: "Projetos Pessoais",
  eyebrow: "Fora do código",
  items: [
    {
      name: "Projeto 50",
      description: "[Descrição de uma linha placeholder sobre o Projeto 50]",
      href: "#",
    },
    {
      name: "Reprograme Sua Vida — Livro 1",
      description: "[Descrição de uma linha placeholder sobre o primeiro livro]",
      href: "#",
    },
    {
      name: "Reprograme Sua Vida — Livro 2",
      description: "[Descrição de uma linha placeholder sobre o segundo livro]",
      href: "#",
    },
    {
      name: "Ricky & Raisa",
      description: "[Descrição de uma linha placeholder sobre o projeto de música]",
      href: "#",
    },
  ] satisfies PersonalProjectItem[],
};

export const contact = {
  heading: "Contato",
  eyebrow: "Vamos conversar",
  intro:
    "[Texto placeholder convidando para contato — ex: aberto a oportunidades internacionais em iOS]",
  email: "email@placeholder.com",
  linkedin: "https://linkedin.com/in/placeholder",
  github: "https://github.com/placeholder",
};

export const footer = {
  note: "[Nota de rodapé placeholder — ex: Feito com Next.js e Tailwind]",
};
