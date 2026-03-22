import heroImage from "~/images/login-img.png";
import dashboardImage from "~/images/dashboard.png";
import dashboardAltImage from "~/images/dashboard1.png";
import analyticsImage from "~/images/giphy2.gif";
import aiImage from "~/images/giphy.gif";
import marketingImage from "~/images/giphy22.gif";
import ceoImage from "~/images/jm.jpg";
import logoImage from "~/images/logoiep.png";
import type {
  CaseCardData,
  ContactDetails,
  CtaLink,
  HighlightItem,
  MetricItem,
  NavItem,
  SeoContent,
  SolutionCardData,
  SourceOption,
  SubjectOption,
} from "~/types/site";

export const brand = {
  name: "Inspiring",
  tagline: "Co-creating with Haus",
  logo: logoImage,
};

export const navigationItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Soluções", to: "/solucoes" },
  { label: "Cases", to: "/cases" },
  { label: "Contato", to: "/contato" },
];

export const seoByRoute: Record<
  "home" | "quemSomos" | "solucoes" | "solucao" | "cases" | "contato",
  SeoContent
> = {
  home: {
    title: "Inspiring | Tecnologia, dados e crescimento orientado a resultado",
    description:
      "A Inspiring conecta estratégia, tecnologia e dados para acelerar performance com orquestração em tempo real e ofertas inteligentes.",
  },
  quemSomos: {
    title: "Quem Somos | Inspiring",
    description:
      "Conheça a história da Inspiring, da fundação à aquisição pela Haus, e como evoluímos para entregar soluções digitais de alto impacto.",
  },
  solucoes: {
    title: "Soluções | Inspiring",
    description:
      "Conheça as soluções IEP, Varfarma e Consultoria para ampliar receita, eficiência e relacionamento com clientes.",
  },
  solucao: {
    title: "Detalhe da Solução | Inspiring",
    description:
      "Explore os diferenciais de cada solução Inspiring com foco em orquestração, inteligência e escala operacional.",
  },
  cases: {
    title: "Cases | Inspiring",
    description:
      "Resultados reais em projetos com Claro, Febrafar, Farmarcas e Mais Independente.",
  },
  contato: {
    title: "Contato | Inspiring",
    description:
      "Entre em contato com a Inspiring para evoluir sua estratégia com tecnologia, dados e execução orientada a resultado.",
  },
};

export const homeHero = {
  eyebrow: "Tecnologia + estratégia de negócios",
  title: "Evoluímos produtos e marcas com decisões em tempo real.",
  description:
    "A Inspiring acelera o crescimento digital conectando dados, automação e inteligência aplicada. Atuamos com foco em resultado mensurável para cada etapa da jornada do cliente.",
  image: heroImage,
  ctas: [
    { label: "Conheça o IEP", to: "/solucoes/iep", variant: "primary" },
    {
      label: "Ver todas as soluções",
      to: "/solucoes",
      variant: "outline",
    },
  ] satisfies CtaLink[],
};

export const homeMetrics: MetricItem[] = [
  {
    label: "ISG e benchmarks de mercado",
    value: "Visão orientada por referência",
    helper:
      "Comparamos maturidade digital e experiência dos clientes para priorizar o que realmente gera retorno.",
  },
  {
    label: "Satisfação gerada",
    value: "Relacionamento mais relevante",
    helper:
      "Orquestramos campanhas e ofertas para elevar percepção de valor em redes, lojas e canais digitais.",
  },
  {
    label: "Execução em escala",
    value: "Times mais produtivos",
    helper:
      "Automação e governança simplificam a operação para que a equipe foque em estratégia e crescimento.",
  },
];

export const homeHighlights: HighlightItem[] = [
  {
    title: "Tempo real de ponta a ponta",
    description:
      "Dados de comportamento e transação são ativados rapidamente para decisões comerciais mais assertivas.",
    icon: "bolt",
  },
  {
    title: "Orquestração de sistemas",
    description:
      "Integramos dados, campanhas e canais em um fluxo único para reduzir fricção operacional.",
    icon: "network",
  },
  {
    title: "Next Best Offer aplicado",
    description:
      "Modelos de recomendação priorizam a melhor oferta para cada momento da jornada de compra.",
    icon: "target",
  },
];

export const solutionCards: SolutionCardData[] = [
  {
    slug: "iep",
    name: "IEP",
    summary: "Inspiring Engagement Platform",
    description:
      "Plataforma para engajar clientes com campanhas inteligentes, segmentação e gestão de ofertas em tempo real.",
    highlights: [
      "Orquestração de campanhas omnichannel",
      "Recomendação de ofertas baseada em dados",
      "Gestão simplificada para equipes de negócio",
    ],
    image: analyticsImage,
  },
  {
    slug: "varfarma",
    name: "Varfarma",
    summary: "Programa voltado ao ecossistema farmacêutico",
    description:
      "Solução focada em relacionamento, fidelização e ativação comercial para redes, bandeiras e lojas independentes.",
    highlights: [
      "Programas de incentivo para varejo farma",
      "Mecânicas de relacionamento recorrente",
      "Insights para decisão comercial por praça e perfil",
    ],
    image: marketingImage,
  },
  {
    slug: "consultoria",
    name: "Consultoria",
    summary: "Estratégia, dados e execução",
    description:
      "Apoio consultivo para mapear oportunidades, organizar jornadas e acelerar resultados com governança.",
    highlights: [
      "Diagnóstico de maturidade digital",
      "Roadmap de transformação orientado a valor",
      "Acompanhamento de resultados com indicadores-chave",
    ],
    image: aiImage,
  },
];

export const solutionDetails: Record<
  SolutionCardData["slug"],
  SolutionCardData & { fullDescription: string; keyCapabilities: string[]; heroImage: string }
> = {
  iep: {
    ...solutionCards[0],
    heroImage: dashboardImage,
    fullDescription:
      "O IEP foi desenhado para transformar relacionamento em resultado. Com uma base única de dados e regras de negócio, a plataforma ajuda times comerciais a ativar ofertas relevantes sem depender de longos ciclos técnicos.",
    keyCapabilities: [
      "Segmentação e ativação de audiências com agilidade",
      "Automação de jornadas promocionais e campanhas",
      "Painel de performance para monitorar adesão e conversão",
    ],
  },
  varfarma: {
    ...solutionCards[1],
    heroImage: dashboardAltImage,
    fullDescription:
      "A solução Varfarma conecta indústria, redes e ponto de venda em uma estratégia contínua de relacionamento. O foco é aumentar recorrência e valor percebido com comunicação útil e acionável.",
    keyCapabilities: [
      "Programas personalizados para perfis de loja e cliente",
      "Acompanhamento de campanhas com visão operacional",
      "Orquestração de incentivos para acelerar giro e recompra",
    ],
  },
  consultoria: {
    ...solutionCards[2],
    heroImage: heroImage,
    fullDescription:
      "A consultoria Inspiring combina visão de negócios, arquitetura de dados e execução pragmática para construir crescimento sustentável. O trabalho inclui desenho de estratégia, priorização e sustentação de performance.",
    keyCapabilities: [
      "Mapeamento de oportunidades em marketing e CRM",
      "Arquitetura de dados e governança para escala",
      "Plano executivo com metas e indicadores de impacto",
    ],
  },
};

export const aboutPage = {
  hero: {
    eyebrow: "Nossa trajetória",
    title: "Da fundação à integração com a Haus: evolução com consistência.",
    description:
      "A Inspiring nasceu para aproximar marcas e consumidores por meio de tecnologia aplicada ao negócio. Nossa história combina visão estratégica, execução próxima ao cliente e capacidade de adaptação contínua.",
    image: ceoImage,
    ctas: [
      { label: "Falar com a equipe", to: "/contato", variant: "primary" },
      { label: "Ver Cases", to: "/cases", variant: "outline" },
    ] satisfies CtaLink[],
  },
  timeline: [
    {
      title: "Fundação orientada a inovação",
      description:
        "Iniciamos com foco em conectar tecnologia e resultados de negócio, sempre priorizando experiências relevantes para o cliente final.",
    },
    {
      title: "Especialização em dados e engajamento",
      description:
        "Evoluímos nossa atuação com plataformas e metodologias voltadas à personalização de ofertas e relacionamento contínuo.",
    },
    {
      title: "Aquisição pela Haus",
      description:
        "A integração com a Haus fortaleceu nossa capacidade de escala e ampliou o repertório para projetos mais robustos.",
    },
  ],
};

export const approvedCases: CaseCardData[] = [
  {
    name: "Claro",
    sector: "Telecom",
    summary:
      "Estratégia de relacionamento orientada por dados para elevar recorrência e engajamento em campanhas de valor.",
    impact: "Melhor eficiência de campanhas e maior aderência de público.",
  },
  {
    name: "Febrafar",
    sector: "Saúde e Farma",
    summary:
      "Aprimoramento de jornadas e ofertas para redes associadas, com visão integrada da operação promocional.",
    impact: "Aumento de previsibilidade comercial e maior consistência operacional.",
  },
  {
    name: "Farmarcas",
    sector: "Saúde e Farma",
    summary:
      "Modelo de ativação com foco em recomendação e retenção para fortalecer relacionamento com consumidor final.",
    impact: "Evolução de recorrência e ganho de performance por campanha.",
  },
  {
    name: "Mais Independente",
    sector: "Varejo",
    summary:
      "Estruturação de ações de relacionamento e inteligência comercial para pontos de venda independentes.",
    impact: "Mais eficiência na execução e melhorias nos indicadores de conversão.",
  },
];

export const primaryCtaLinks: CtaLink[] = [
  { label: "IEP", to: "/solucoes/iep", variant: "primary" },
  { label: "Varfarma", to: "/solucoes/varfarma", variant: "secondary" },
  {
    label: "Consultoria",
    to: "/solucoes/consultoria",
    variant: "outline",
  },
  { label: "Cases", to: "/cases", variant: "outline" },
];

export const contactDetails: ContactDetails = {
  address: "Av. Brigadeiro Faria Lima, 3477",
  city: "São Paulo - SP",
  email: "contato@inspiring.com.br",
  phone: "+55 (11) 4000-1000",
  businessHours: "Segunda a sexta, das 9h às 18h",
};

export const subjectOptions: SubjectOption[] = [
  "CVM",
  "Varfarma",
  "Consultoria",
];

export const sourceOptions: SourceOption[] = [
  "Google",
  "Projeto desenvolvido por vocês",
  "Indicação",
  "Outro",
];

export const footerQuickLinks: CtaLink[] = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Soluções", to: "/solucoes" },
  { label: "Cases", to: "/cases" },
  { label: "Contato", to: "/contato" },
];
