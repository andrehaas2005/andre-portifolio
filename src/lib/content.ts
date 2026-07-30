// Conteúdo centralizado do site. Itens ainda marcados como placeholder (ex: GitHub,
// currículo em PDF) devem ser substituídos assim que a informação existir.

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
  role: "Senior iOS Engineer | Mobile Architecture",
};

export const hero = {
  greeting: "Olá, eu sou",
  name: siteIdentity.name,
  role: siteIdentity.role,
  pitch:
    "Mais de 25 anos em TI e 8+ anos dedicados a iOS/Swift, com passagem por arquitetura de sistemas, liderança técnica e produtos para bancos, telecom, varejo e agronegócio. Hoje também construo minhas próprias plataformas de IA aplicada.",
  ctaPrimary: { label: "Falar comigo", href: "#contato" },
  ctaSecondary: {
    label: "Baixar currículo (placeholder)",
    href: "#",
  },
};

export const about = {
  heading: "Sobre",
  eyebrow: "Quem sou eu",
  bio: "Sou profissional de tecnologia com mais de 25 anos de experiência em TI e mais de 8 anos atuando diretamente com desenvolvimento mobile iOS em Swift. Ao longo da trajetória, atuei como Desenvolvedor, Líder Técnico, Arquiteto de Software e Arquiteto de Sistemas, participando da construção, evolução e sustentação de aplicações para empresas dos segmentos bancário, telecom, varejo e agronegócio — sempre com foco em arquiteturas escaláveis, qualidade e mentoria técnica. Mais recentemente, tenho aplicado essa mesma bagagem de arquitetura e engenharia para construir minhas próprias plataformas de automação com Inteligência Artificial.\n\nEssa trajetória técnica também nasceu de uma reconstrução pessoal: depois de enfrentar depressão e perda de emprego, encontrei na própria lógica da engenharia de software um caminho para repensar minha vida — se um sistema pode ser corrigido, refatorado e evoluído, por que a forma como pensamos, agimos e vivemos não poderia seguir a mesma lógica? É essa filosofia que hoje orienta tanto o Projeto 50 quanto a série de livros Reprograme Sua Vida.",
  skills: [
    "Clean Architecture & SOLID",
    "MVVM-C & Modularização",
    "Swift, SwiftUI & UIKit",
    "Segurança mobile (OAuth2, Keychain, Secure Enclave)",
    "CI/CD & Fastlane",
    "Liderança técnica & mentoria",
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
      company: "GFT Technologies",
      role: "Mobile Developer III",
      period: "Atual",
      description:
        "Desenvolvimento e arquitetura mobile iOS (Swift, SwiftUI, UIKit), com foco em modularização, qualidade, testes automatizados e boas práticas de engenharia em projetos para clientes dos setores financeiro e industrial.",
      isPlaceholder: false,
    },
    {
      company: "CI&T",
      role: "iOS Developer / Systems Architect",
      period: "Anteriormente",
      description:
        "Atuação como desenvolvedor e arquiteto em produtos mobile, incluindo definição de arquitetura, modularização de aplicações e colaboração com equipes multidisciplinares de Produto, Design, Backend e QA.",
      isPlaceholder: false,
    },
    {
      company: "Diversas empresas (Bancário, Telecom, Varejo, Agronegócio)",
      role: "Desenvolvedor, Líder Técnico, Arquiteto de Software e de Sistemas",
      period: "Ao longo de 25+ anos em TI",
      description:
        "Construção, evolução e sustentação de aplicações em diferentes setores — modernização de plataformas legadas, criação de novos produtos digitais, redução de incidentes em produção e mentoria de desenvolvedores.",
      isPlaceholder: false,
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
      name: "AgentOS",
      description:
        "Plataforma que orquestra um time de agentes de IA (Claude Agent SDK) para produzir e publicar conteúdo em Instagram, Facebook, YouTube e LinkedIn — um Agente CEO delega para subagentes especializados (estratégia, redação, arte, revisão) por empresa/conta gerenciada.",
      tech: ["Node.js", "TypeScript", "Express", "Prisma", "Next.js", "Claude Agent SDK"],
      href: "#",
    },
    {
      name: "Automação de Conteúdo com IA (n8n)",
      description:
        "Pipelines de automação self-hosted que geram e publicam conteúdo para múltiplos canais — vídeos de terror gerados por IA para YouTube, vídeos de livros espíritas, conteúdo de futebol e a ponte blog↔Instagram do Corpo Vivo — tudo rodando em VPS própria com Docker.",
      tech: ["n8n", "Docker", "APIs de IA", "VPS self-hosted"],
      href: "#",
    },
    {
      name: "CineTrack",
      description:
        "App iOS de catálogo e acompanhamento de filmes consumindo a API do TheMovieDB, construído como estudo/portfólio de arquitetura MVVM.",
      tech: ["Swift", "UIKit", "MVVM"],
      href: "#",
    },
    {
      name: "Gerador TOTP",
      description:
        "Implementação de geração de códigos de autenticação de dois fatores (HOTP/TOTP) em Swift, como estudo aprofundado de segurança e criptografia aplicada.",
      tech: ["Swift", "SHA1", "HOTP/TOTP"],
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
      description:
        "\"O que não é medido não pode ser melhorado\": transformação física e mental rumo aos meus 50 anos, tratada como um produto de engenharia — métricas semanais, KPIs de evolução e uma plataforma própria (Swift/SwiftUI/Firebase) documentando cada etapa.",
      href: "#",
    },
    {
      name: "Reprograme Sua Vida (série de livros)",
      description:
        "Série que aplica lógica de Engenharia de Software à vida real — se um sistema pode ser refatorado e evoluído, por que nós não? O primeiro volume (Manual de Engenharia Comportamental) já está publicado; os próximos tratam de Corpo (em paralelo ao Projeto 50), Carreira, Dinheiro e Mente com IA.",
      href: "https://uiclap.bio/andrehaas",
    },
    {
      name: "Ricky & Raisa",
      description:
        "Duo musical fictício 100% gerado por IA: letras escritas com ChatGPT, estilo traduzido em prompt e composto no Suno, e os vídeos montados com a imagem dos personagens — publicado no YouTube.",
      href: "https://www.youtube.com/@RickyeRaisa",
    },
  ] satisfies PersonalProjectItem[],
};

export const contact = {
  heading: "Contato",
  eyebrow: "Vamos conversar",
  intro: "Aberto a oportunidades internacionais em iOS/Mobile Architecture — vamos conversar.",
  email: "andrehaas2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/andre-l-o-a-haas/",
  github: "https://github.com/andrehaas2005",
};

export const footer = {
  note: "Feito com Next.js e Tailwind CSS.",
};
