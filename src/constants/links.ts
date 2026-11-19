export interface ConversionLink {
  id: 'catalogo' | 'atendimento' | 'paisagismo';
  title: string;
  subtitle: string;
  href: string;
  featured?: boolean;
  tag: string;
}

export const BRAND_LOGOS = {
  completo: '/images/Logo Varanda (Completo).png',
  vaso: '/images/Logo Varabda (Vaso).png',
  nome: '/images/Logo Varanda (nome).png',
} as const;

export const WHATSAPP_INFO = {
  display: '(68) 99984-5222',
  rawNumber: '5568999845222',
  responseBadgeText:
    'Atendimento rápido: respondemos em poucos minutos no horário comercial (7h às 17h)',
  deliveryUrl:
    'https://wa.me/5568999845222?text=Ol%C3%A1!%20Gostaria%20de%20saber%20como%20funciona%20a%20entrega%20da%20Varanda%20Verde.',
  paisagismoUrl:
    'https://wa.me/5568999845222?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20paisagismo%20com%20a%20Varanda%20Verde.',
} as const;

export const CONVERSION_LINKS: ConversionLink[] = [
  {
    id: 'catalogo',
    title: 'Nosso Site & Estoque',
    subtitle: 'Veja as plantas e vasos disponíveis agora',
    href: 'https://wa.me/5568999845222?text=Ol%C3%A1!%20Gostaria%20de%20acessar%20o%20site%20e%20conferir%20o%20estoque%20dispon%C3%ADvel%20da%20Varanda%20Verde.',
    featured: true,
    tag: 'Catálogo & Estoque',
  },
  {
    id: 'atendimento',
    title: 'Fale Conosco',
    subtitle: 'Tire dúvidas com nossa equipe no WhatsApp',
    href: 'https://wa.me/5568999845222?text=Ol%C3%A1!%20Quero%20falar%20com%20a%20equipe%20da%20Varanda%20Verde.',
    featured: false,
    tag: 'Atendimento Direto',
  },
  {
    id: 'paisagismo',
    title: 'Orçamento de Paisagismo',
    subtitle: 'Transforme seu jardim, varanda ou empresa',
    href: 'https://wa.me/5568999845222?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20paisagismo%20com%20a%20Varanda%20Verde.',
    featured: false,
    tag: 'Projetos & Jardinagem',
  },
];

export const LOCATION_INFO = {
  title: 'Onde Estamos',
  addressDisplay: 'Travessa Éden, n.193 - Jardim de Alah, Rio Branco - AC, 69915-509',
  addressQuery: 'Travessa Éden, 193 - Jardim de Alah, Rio Branco - AC, 69915-509',
  neighborhood: 'Jardim de Alah • Rio Branco - AC',
  postalCode: 'CEP 69915-509',
  routeUrl:
    'https://www.google.com/maps/search/?api=1&query=Travessa+%C3%89den%2C+193+-+Jardim+de+Alah%2C+Rio+Branco+-+AC%2C+69915-509',
  fallbackEmbedUrl:
    'https://maps.google.com/maps?q=Travessa+%C3%89den%2C+193+-+Jardim+de+Alah%2C+Rio+Branco+-+AC%2C+69915-509&t=m&z=16&ie=UTF8&iwloc=&output=embed',
} as const;

export const INSTAGRAM_INFO = {
  handle: '@varandaverdeacre',
  url: 'https://www.instagram.com/varandaverdeacre/',
  ctaText: 'Acompanhe novidades e dicas no Instagram @varandaverdeacre',
} as const;
