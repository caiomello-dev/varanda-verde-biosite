import React from 'react';
import { ArrowLeft, Compass, MapPin } from 'lucide-react';
import { BRAND_LOGOS, LOCATION_INFO, WHATSAPP_INFO } from '../constants/links';
import { Breadcrumbs } from './Breadcrumbs';
import { WhatsAppIcon } from './Icons';

interface NotFoundPageProps {
  onNavigateHome: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="space-y-5">
      {/* Trilha de Navegação (Breadcrumbs): Início > Página não encontrada */}
      <Breadcrumbs
        currentPageLabel="Página não encontrada"
        onNavigateHome={onNavigateHome}
      />

      <section
        aria-labelledby="not-found-heading"
        className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-[#1B6B1E]/12 shadow-botanical overflow-hidden text-center p-6 sm:p-8 space-y-5"
      >
        <div className="h-1.5 w-full terracotta-stripe-bar absolute top-0 left-0 right-0" aria-hidden="true" />

        {/* Ilustração Oficial do Vaso Varanda Verde */}
        <div className="relative mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-[#FAF9F5] border border-[#7CB342]/30 p-3 flex items-center justify-center shadow-sm">
          <img
            src={BRAND_LOGOS.vaso}
            alt="Ícone de vaso com espada-de-são-jorge da Varanda Verde"
            className="w-full h-full object-contain"
          />
          <span className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#E8834A] text-white text-xs font-extrabold shadow-sm">
            404
          </span>
        </div>

        <div className="space-y-2 max-w-[380px] mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1B6B1E]">
            <Compass className="w-3.5 h-3.5 text-[#7CB342]" aria-hidden="true" />
            <span>Caminho não encontrado</span>
          </div>
          <h1
            id="not-found-heading"
            className="text-xl sm:text-2xl font-extrabold text-[#145317] tracking-tight"
          >
            Ops! Essa página não foi encontrada no nosso jardim.
          </h1>
          <p className="text-xs sm:text-sm text-[#145317]/75 leading-relaxed">
            O endereço que você acessou não existe ou foi movido. Volte para a página inicial da
            Varanda Verde para conferir nosso estoque, localização e canais de atendimento.
          </p>
        </div>

        {/* Botão Principal para Voltar à Página Inicial */}
        <div className="pt-1 space-y-2.5">
          <a
            href="/"
            onClick={onNavigateHome}
            className="w-full min-h-[56px] px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#1B6B1E] to-[#145317] hover:from-[#145317] hover:to-[#0D3B10] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-primary-cta transition-all duration-200 active:scale-[0.99]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Voltar para a Página Inicial</span>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            <a
              href={`https://wa.me/${WHATSAPP_INFO.rawNumber}?text=Ol%C3%A1!%20Quero%20falar%20com%20a%20equipe%20da%20Varanda%20Verde.`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] hover:bg-[#7CB342]/15 text-[#145317] border border-[#1B6B1E]/12 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <WhatsAppIcon size={15} className="text-[#1B6B1E]" />
              <span>Atendimento WhatsApp</span>
            </a>

            <a
              href={LOCATION_INFO.routeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] hover:bg-[#F59B65]/15 text-[#145317] border border-[#1B6B1E]/12 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E8834A]" aria-hidden="true" />
              <span>Ver Loja no Google Maps</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
