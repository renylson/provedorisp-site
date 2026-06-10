export const WHATSAPP_NUMBER = "5587988463681";

export const PHONE_NUMBER = "(87) 98846-3681";

export const AREA_CLIENTE_URL = "https://central.provedorisp.com.br";

export interface Plano {
  id: string;
  nome: string;
  velocidade: number;
  unidade: string;
  descricao: string;
  preco: number;
  destaque: boolean;
  badge?: string;
  incluso: string[];
  servicos: string[];
}

export const PLANOS: Plano[] = [
  {
    id: "300mega",
    nome: "300 MEGA",
    velocidade: 300,
    unidade: "Mbps",
    descricao: "Ideal para o dia a dia",
    preco: 89.90,
    destaque: false,
    incluso: ["Wi-Fi Dualband", "Instalação Grátis"],
    servicos: [],
  },
  {
    id: "600mega",
    nome: "600 MEGA",
    velocidade: 600,
    unidade: "Mbps",
    descricao: "Para quem exige mais",
    preco: 99.90,
    destaque: true,
    badge: "MAIS ESCOLHIDO",
    incluso: ["Instalação Grátis", "Wi-Fi 6 incluso"],
    servicos: [],
  },
  {
    id: "800mega",
    nome: "800 MEGA",
    velocidade: 800,
    unidade: "Mbps",
    descricao: "Power user e gamers",
    preco: 119.90,
    destaque: false,
    incluso: ["Instalação Grátis", "Wi-Fi 6 incluso", "Ponto Adicional cabeado"],
    servicos: [],
  },
  {
    id: "1giga",
    nome: "1 GIGA",
    velocidade: 1,
    unidade: "Gbps",
    descricao: "Máxima velocidade",
    preco: 149.90,
    destaque: false,
    incluso: ["Instalação Grátis", "Wi-Fi 6 incluso", "Ponto Adicional Cabeado + Repetidor Wi-Fi"],
    servicos: [],
  },
];

export interface Adicional {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  logo: string;
}

export const ADICIONAIS: Adicional[] = [
  { id: "deezer",    nome: "Deezer",    descricao: "Música sem limites.",       preco: 16.90, logo: "/logos/deezer.svg" },
  { id: "hbo",       nome: "HBO Max",   descricao: "Séries e filmes exclusivos.", preco: 34.90, logo: "/logos/hbo.svg" },
  { id: "telecine",  nome: "Telecine",  descricao: "Sucessos do cinema.",        preco: 19.90, logo: "/logos/telecine.svg" },
  { id: "premiere",  nome: "Premiere",  descricao: "Futebol ao vivo.",           preco: 29.90, logo: "/logos/premiere.svg" },
  { id: "kids",      nome: "Kids",      descricao: "Conteúdo infantil.",         preco: 14.90, logo: "/logos/kids.svg" },
];

export interface Contrato {
  id: string;
  titulo: string;
  descricao: string;
  arquivo: string;
  tipo: string;
}

export const CONTRATOS: Contrato[] = [
  {
    id: "residencial",
    titulo: "Contrato Residencial",
    descricao: "Contrato padrão para pessoas físicas",
    arquivo: "/contratos/contrato-residencial.pdf",
    tipo: "residencial",
  },
  {
    id: "empresarial-contrato",
    titulo: "Contrato Empresarial",
    descricao: "Contrato para pessoa jurídica e CNPJ",
    arquivo: "/contratos/contrato-empresarial.pdf",
    tipo: "empresarial",
  },
];
