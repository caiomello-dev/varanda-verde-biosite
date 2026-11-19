import React, { useState } from 'react';
import { Share2, Check, Sparkles, Sprout, Flower2 } from 'lucide-react';
import { BRAND_LOGOS } from '../constants/links';

interface HeroHeaderProps {
  onNavigate?: (path: string, e?: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ onNavigate }) => {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Varanda Verde | Plantas & Paisagismo - Rio Branco, AC',
      text: 'Plantas ornamentais, vasos e projetos de paisagismo em Rio Branco - AC (@varandaverdeacre).',
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.origin);
        setShared(true);
        window.setTimeout(() => setShared(false), 2400);
      }
    } catch {
      // Usuário cancelou o menu nativo de compartilhamento
    }
  };

  const handleSectionAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header id="inicio" className="relative pt-5 pb-2 text-center scroll-mt-4">
      {/* Barra superior com badge de atendimento online e botão de compartilhar */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#1B6B1E]/12 shadow-sm">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CB342] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1B6B1E]" />
          </span>
          <span className="text-xs font-semibold text-[#145317] tracking-tight">
            Atendimento Online • Rio Branco, AC
          </span>
        </div>

        <button
          type="button"
          onClick={handleShare}
          aria-label="Compartilhar Bio-Site da Varanda Verde"
          title="Compartilhar página"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#1B6B1E]/12 text-[#145317] hover:border-[#7CB342] hover:bg-white text-xs font-semibold shadow-sm transition-all duration-200 active:scale-95"
        >
          {shared ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#1B6B1E]" aria-hidden="true" />
              <span>Link copiado</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-[#E8834A]" aria-hidden="true" />
              <span className="hidden xs:inline">Compartilhar</span>
            </>
          )}
        </button>
      </div>

      {/* Container da Logo Oficial Completa (Logo Varanda (Completo).png) */}
      <div className="relative mx-auto max-w-[280px] sm:max-w-[310px] px-2 py-1">
        {/* Halo de iluminação botânica suave atrás da logo */}
        <div
          aria-hidden="true"
          className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#7CB342]/12 via-white/60 to-[#F59B65]/15 blur-2xl -z-10"
        />
        <img
          src={BRAND_LOGOS.completo}
          alt="Logomarca oficial Varanda Verde - Viveiro de Plantas e Paisagismo em Rio Branco, AC"
          className="w-full h-auto max-h-[195px] sm:max-h-[215px] mx-auto object-contain select-none drop-shadow-sm"
          fetchPriority="high"
        />
      </div>

      {/* H1 Semântico + Subtítulo Institucional Obrigatório */}
      <h1 className="sr-only">
        Varanda Verde — Plantas Ornamentais, Vasos e Paisagismo em Rio Branco - AC
      </h1>
      <p className="mt-3.5 max-w-[400px] mx-auto text-sm sm:text-[15px] leading-relaxed font-medium text-[#145317]/90 px-2">
        Plantas ornamentais, vasos e projetos de paisagismo em Rio Branco - AC
      </p>

      {/* Pílulas de especialidades orgânicas da Varanda Verde */}
      <div className="mt-3.5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-1">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/85 border border-[#1B6B1E]/10 text-[11px] font-semibold text-[#145317]/85">
          <Sprout className="w-3 h-3 text-[#7CB342]" aria-hidden="true" />
          Viveiro &amp; Loja Física
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/85 border border-[#1B6B1E]/10 text-[11px] font-semibold text-[#145317]/85">
          <Flower2 className="w-3 h-3 text-[#E8834A]" aria-hidden="true" />
          Vasos &amp; Ornamentais
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/85 border border-[#1B6B1E]/10 text-[11px] font-semibold text-[#145317]/85">
          <Sparkles className="w-3 h-3 text-[#1B6B1E]" aria-hidden="true" />
          Paisagismo Autoral
        </span>
      </div>

      {/* Menu Discreto de Links Internos de Acesso Rápido */}
      <nav
        aria-label="Navegação rápida pelas seções da página"
        className="mt-4 pt-3 border-t border-[#1B6B1E]/10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs font-semibold text-[#145317]/80"
      >
        <a
          href="#servicos"
          onClick={(e) => handleSectionAnchor(e, 'servicos')}
          className="hover:text-[#1B6B1E] underline-offset-4 hover:underline transition-colors"
        >
          Serviços
        </a>
        <span aria-hidden="true" className="text-[#7CB342]">
          •
        </span>
        <a
          href="#localizacao"
          onClick={(e) => handleSectionAnchor(e, 'localizacao')}
          className="hover:text-[#1B6B1E] underline-offset-4 hover:underline transition-colors"
        >
          Localização
        </a>
        <span aria-hidden="true" className="text-[#7CB342]">
          •
        </span>
        <a
          href="#faq"
          onClick={(e) => handleSectionAnchor(e, 'faq')}
          className="hover:text-[#1B6B1E] underline-offset-4 hover:underline transition-colors"
        >
          Dúvidas Frequentes
        </a>
        <span aria-hidden="true" className="text-[#7CB342]">
          •
        </span>
        <a
          href="/privacidade"
          onClick={(e) => onNavigate?.('/privacidade', e)}
          className="hover:text-[#1B6B1E] underline-offset-4 hover:underline transition-colors"
        >
          Política de Privacidade
        </a>
      </nav>
    </header>
  );
};
