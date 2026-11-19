import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MapPin, ExternalLink } from 'lucide-react';
import { BRAND_LOGOS, LOCATION_INFO, WHATSAPP_INFO } from '../constants/links';
import { WhatsAppIcon } from './Icons';

interface FaqItemData {
  id: string;
  question: string;
}

const FAQ_QUESTIONS: FaqItemData[] = [
  {
    id: 'faq-horario',
    question: 'Qual é o horário de funcionamento da loja?',
  },
  {
    id: 'faq-localizacao',
    question: 'Onde fica localizada a Varanda Verde?',
  },
  {
    id: 'faq-entregas',
    question: 'Vocês fazem entregas?',
  },
  {
    id: 'faq-paisagismo',
    question: 'Como funciona o orçamento de paisagismo?',
  },
  {
    id: 'faq-plantas-ideais',
    question: 'Vocês ajudam a escolher as plantas ideais para ambientes internos ou com muito sol?',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleScrollToMap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('localizacao');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderAnswerContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <p className="text-xs sm:text-sm leading-relaxed text-[#145317]/85">
            Atendemos das <strong className="font-bold text-[#145317]">7h às 17h</strong> (07:00 às
            17:00). Você pode nos visitar presencialmente ou chamar nossa equipe no WhatsApp durante
            esse período.
          </p>
        );
      case 1:
        return (
          <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#145317]/85">
            <p>
              Nossa loja fica na{' '}
              <strong className="font-bold text-[#145317]">
                Travessa Éden, nº 193 — Jardim de Alah, Rio Branco - AC (CEP 69915-509)
              </strong>
              .
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <a
                href="#localizacao"
                onClick={handleScrollToMap}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF9F5] hover:bg-[#7CB342]/15 text-[#145317] border border-[#1B6B1E]/15 text-xs font-semibold transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#1B6B1E]" aria-hidden="true" />
                <span>Ver mapa na página</span>
              </a>
              <a
                href={LOCATION_INFO.routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1B6B1E] hover:bg-[#145317] text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Abrir rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#145317]/85">
            <p>
              Sim! Realizamos entregas. Para consultar disponibilidade, taxas e prazos para o seu
              endereço, envie uma mensagem diretamente no nosso WhatsApp.
            </p>
            <div>
              <a
                href={WHATSAPP_INFO.deliveryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1B6B1E] hover:bg-[#145317] text-white text-xs font-bold transition-all shadow-sm hover:shadow"
              >
                <WhatsAppIcon size={15} />
                <span>Consultar entrega no WhatsApp</span>
              </a>
            </div>
          </div>
        );
      case 3:
        return (
          <p className="text-xs sm:text-sm leading-relaxed text-[#145317]/85">
            Você pode solicitar seu orçamento pelo nosso botão de Paisagismo no WhatsApp enviando
            fotos ou medidas do seu espaço (varanda, jardim ou empresa). Nossa equipe analisa o
            ambiente e monta uma proposta personalizada.
          </p>
        );
      case 4:
        return (
          <p className="text-xs sm:text-sm leading-relaxed text-[#145317]/85">
            Com certeza! Nossa equipe orienta você na escolha das espécies mais adequadas para a
            iluminação e rotina de rega da sua casa ou escritório, além de indicar os vasos e
            substratos ideais.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative rounded-3xl bg-white/92 backdrop-blur-md border border-[#1B6B1E]/12 shadow-botanical overflow-hidden p-5 sm:p-6 scroll-mt-4"
    >
      {/* Cabeçalho da Seção de FAQ */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative flex-shrink-0 w-11 h-11 rounded-2xl bg-[#FAF9F5] border border-[#1B6B1E]/12 flex items-center justify-center p-1.5 shadow-sm">
          <img
            src={BRAND_LOGOS.vaso}
            alt="Ícone de vaso com espada-de-são-jorge da Varanda Verde"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#1B6B1E]/75">
            <HelpCircle className="w-3.5 h-3.5 text-[#7CB342]" aria-hidden="true" />
            <span>Atendimento &amp; Informações</span>
          </div>
          <h2
            id="faq-heading"
            className="text-lg sm:text-xl font-bold text-[#145317] tracking-tight"
          >
            Dúvidas Frequentes
          </h2>
        </div>
      </div>

      {/* Lista de Acordeões (5 Perguntas e Respostas) */}
      <div className="space-y-2.5">
        {FAQ_QUESTIONS.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${item.id}-panel`;
          const buttonId = `${item.id}-button`;

          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? 'bg-[#FAF9F5] border-[#7CB342]/60 shadow-sm'
                  : 'bg-[#FAF9F5]/60 border-[#1B6B1E]/10 hover:border-[#1B6B1E]/25'
              }`}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  className="w-full min-h-[54px] px-4 py-3 text-left flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6B1E] rounded-2xl"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#145317] leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? 'bg-[#1B6B1E] text-white rotate-180'
                        : 'bg-white text-[#1B6B1E] border border-[#1B6B1E]/15'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-4 pb-4 pt-0.5 border-t border-[#1B6B1E]/8"
              >
                {renderAnswerContent(index)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
