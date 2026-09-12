/**
 * Copy e dados da landing page, em um só lugar.
 *
 * As composições de desktop e mobile são layouts diferentes mas contam a
 * mesma história com a mesma copy — manter os textos aqui impede que as
 * duas versões saiam de sincronia quando uma delas for ajustada.
 */

import type { IconName } from "./ds";

/** WhatsApp comercial da Fluxa — (47) 98854-3155. */
export const WHATSAPP = "5547988543155";
export const WHATSAPP_DISPLAY = "(47) 98854-3155";
export const EMAIL = "assessoriafluxa@gmail.com";
export const INSTAGRAM = "assessoriafluxa";
export const FOODS_URL = "https://fluxafoods.com.br/";
export const LANAS_INSTAGRAM = "lanasburguer";

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export const WA_DIAGNOSTICO =
  "Olá! Quero um diagnóstico da jornada do meu restaurante.";
export const WA_PARCERIA = "Olá! Quero entender a parceria Fluxa.";

/** Links da nav. `href` aponta para a seção de desktop; o mapa em
 *  `anchors.ts` redireciona para a seção mobile equivalente em telas
 *  pequenas, onde as seções têm ids próprios. */
export const NAV_LINKS = [
  { href: "#metodo", label: "Método", labelMobile: "Método" },
  { href: "#case", label: "Case", labelMobile: "Case Lana's" },
  { href: "#parceiro", label: "Parceiro Fluxa", labelMobile: "Parceiro Fluxa" },
  { href: "#foods", label: "Fluxa Foods", labelMobile: "Fluxa Foods" },
] as const;

/** As quatro etapas da jornada. */
export const JOURNEY = [
  {
    n: "01",
    title: "Conhecer",
    short: "As pessoas certas descobrem o restaurante.",
    long: "Seu cliente precisa conhecer seu restaurante.",
  },
  {
    n: "02",
    title: "Desejar",
    short: "Elas encontram motivos para escolher você.",
    long: "Ter motivos para escolher você.",
  },
  {
    n: "03",
    title: "Comprar",
    short: "A intenção vira pedido, sem atrito.",
    long: "Conseguir comprar sem atrito.",
  },
  {
    n: "04",
    title: "Voltar",
    short: "A compra vira próxima compra.",
    long: "E ter motivos para voltar.",
  },
] as const;

/** Cards do diagnóstico — uma pergunta por etapa da jornada. */
export const DIAGNOSTIC: Array<{
  icon: IconName;
  title: string;
  question: string;
  questionShort: string;
}> = [
  {
    icon: "presenca",
    title: "Conhecer",
    question:
      "As pessoas certas estão descobrindo e percebendo seu restaurante?",
    questionShort: "As pessoas certas estão te descobrindo?",
  },
  {
    icon: "produto",
    title: "Desejar",
    question:
      "Seu produto, conteúdo e oferta fazem alguém querer escolher você?",
    questionShort: "Seu produto dá motivos para escolher você?",
  },
  {
    icon: "conversao",
    title: "Comprar",
    question:
      "Quando existe intenção, você transforma essa vontade em pedido com facilidade?",
    questionShort: "A vontade vira pedido com facilidade?",
  },
  {
    icon: "retencao",
    title: "Voltar",
    question:
      "Depois da primeira compra, existe algo estruturado para fazer esse cliente retornar?",
    questionShort: "Existe algo estruturado para ele retornar?",
  },
];

/** As quatro frentes do Método Fluxa. */
export const METHOD: Array<{
  n: string;
  icon: IconName;
  title: string;
  titleShort: string;
  lead: string;
  detail: string;
}> = [
  {
    n: "01",
    icon: "presenca",
    title: "Presença & Geração de Demanda",
    titleShort: "Presença & Demanda",
    lead: "Fazer as pessoas certas conhecerem, lembrarem e considerarem o restaurante.",
    detail:
      "Conteúdo, posicionamento, mídia, presença digital e geração de demanda entram aqui.",
  },
  {
    n: "02",
    icon: "produto",
    title: "Produto & Oferta",
    titleShort: "Produto & Oferta",
    lead: "Transformar atenção em desejo.",
    detail:
      "Produto, apresentação, percepção de valor, oferta e comunicação precisam dar motivos para o cliente escolher.",
  },
  {
    n: "03",
    icon: "conversao",
    title: "Conversão",
    titleShort: "Conversão",
    lead: "Transformar desejo em compra.",
    detail:
      "Cardápio, experiência de pedido, canais, oferta e pontos de atrito precisam trabalhar a favor da venda.",
  },
  {
    n: "04",
    icon: "retencao",
    title: "Retenção",
    titleShort: "Retenção",
    lead: "Transformar compra em próxima compra.",
    detail:
      "Dados, relacionamento, experiência, CRM e estratégias de recompra ajudam o restaurante a não recomeçar do zero todos os dias.",
  },
];

/** Resultados do case Lana's Burguer — um por etapa da jornada. */
export const CASE_RESULTS = [
  {
    metric: "+60%",
    stage: "Conhecer",
    lead: "O Lanas passou a alcançar muito mais gente com uma comunicação feita para ser descoberta.",
    detail:
      "12,8 mil visualizações em um único conteúdo e +138 seguidores em 3 dias.",
    highlight: false,
  },
  {
    metric: "+50%",
    stage: "Desejar",
    lead: "Saímos de um Instagram que mostrava produto para uma comunicação que cria vontade de pedir.",
    detail: "Mais conteúdo humano, mais interação e mais intenção de compra.",
    highlight: false,
  },
  {
    metric: "+70%",
    stage: "Comprar",
    lead: "A atenção começou a ser trabalhada até virar pedido.",
    detail:
      "R$ 922,43 investidos geraram R$ 3.969,62 em pedidos atribuídos — chegando a 6,84x de ROAS nas campanhas de venda.",
    highlight: false,
  },
  {
    metric: "+80%",
    stage: "Voltar",
    lead: "A compra deixou de ser o fim da jornada.",
    detail:
      "128 clientes já identificados na base, com clientes chegando a 10 pedidos no período.",
    highlight: true,
  },
] as const;

/** Capacidade de execução — as ferramentas que entram depois do diagnóstico. */
export const EXECUTION = [
  "Conteúdo",
  "Mídia",
  "Produto & Oferta",
  "Experiência de pedido",
  "CRM & Retenção",
  "Fluxa Foods",
  "Estratégia",
] as const;

/** Restaurantes 3D do showcase rotativo. */
export const PLACES = [
  { src: "/food-pizzaria.svg", label: "Pizzaria" },
  { src: "/food-dogao.svg", label: "Hamburgueria" },
  { src: "/food-frango.svg", label: "Frango" },
  { src: "/food-sushi.svg", label: "Japonês" },
  { src: "/food-sorvete.svg", label: "Sorveteria" },
] as const;

/** Opções do dropdown "Tipo de negócio". */
export const BUSINESS_TYPES = [
  "Hamburgueria",
  "Pizzaria",
  "Japonês",
  "Açaí / Sorveteria",
  "Cafeteria",
  "Restaurante",
  "Lanchonete",
  "Outro",
] as const;

/** Faixas de faturamento mensal. */
export const REVENUE_RANGES = [
  "Até R$ 30 mil",
  "R$ 30 mil a R$ 80 mil",
  "R$ 80 mil a R$ 150 mil",
  "Acima de R$ 150 mil",
] as const;
