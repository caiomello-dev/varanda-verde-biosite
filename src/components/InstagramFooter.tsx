import React from 'react';
import { ArrowUpRight, Heart, Clock } from 'lucide-react';
import { BRAND_LOGOS, INSTAGRAM_INFO, WHATSAPP_INFO } from '../constants/links';
import { InstagramIcon } from './Icons';

interface InstagramFooterProps {
  onNavigate?: (path: string, e?: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const InstagramFooter: React.FC<InstagramFooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleAnchorNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    if (window.location.pathname !== '/') {
      onNavigate?.('/', e);
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-6 pt-1 pb-6">
      {/* Card Interativo do Instagram Oficial (@varandaverdeacre) */}
      <section aria-label="Instagram Oficial da Varanda Verde">
        <a
          href={INSTAGRAM_INFO.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full min-h-[68px] rounded-3xl bg-white/92 backdrop-blur-md border border-[#F59B65]/35 hover:border-[#E8834A] p-4 sm:p-5 shadow-botanical hover:shadow-terracotta-glow transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99] overflow-hidden"
        >
          {/* Luz decorativa terracota/verde */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-gradient-to-tr from-[#F59B65]/20 to-[#7CB342]/15 blur-xl"
          />

          <div className="relative flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5 min-w-0">
              {/* Ícone Oficial do Instagram com acabamento gradiente nas cores da marca */}
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1B6B1E] via-[#7CB342] to-[#E8834A] p-[2px] shadow-sm group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center text-[#1B6B1E] group-hover:bg-transparent group-hover:text-white transition-colors duration-300">
                  <InstagramIcon size={22} />
                </div>
              </div>

              <div className="min-w-0 text-left">
                <div className="inline-flex items-center gap-1.5">
                  <span className="text-xs font-extrabold text-[#E8834A] tracking-tight">
                    {INSTAGRAM_INFO.handle}
                  </span>
                  <span className="inline-block w-1 h-1 rounded-full bg-[#7CB342]" aria-hidden="true" />
                  <span className="text-[11px] font-semibold text-[#1B6B1E]/75">
                    Instagram Oficial
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-[#145317] leading-snug mt-0.5">
                  {INSTAGRAM_INFO.ctaText}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#FAF9F5] border border-[#1B6B1E]/10 group-hover:bg-[#1B6B1E] group-hover:text-white text-[#145317] flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </div>
          </div>
        </a>
      </section>

      {/* Rodapé Institucional com Logo Varanda (nome).png */}
      <footer className="pt-4 border-t border-[#1B6B1E]/10 text-center space-y-3.5">
        {/* Assinatura Tipográfica Oficial: Logo Varanda (nome).png */}
        <div className="mx-auto max-w-[165px] sm:max-w-[185px] px-2">
          <img
            src={BRAND_LOGOS.nome}
            alt="Assinatura tipográfica oficial Varanda Verde"
            className="w-full h-auto max-h-12 mx-auto object-contain select-none opacity-95"
            loading="lazy"
          />
        </div>

        {/* Reforço do Prazo de Resposta e Horário Comercial no Rodapé */}
        <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#1B6B1E]/10 text-[11px] font-semibold text-[#145317]/85">
          <Clock className="w-3.5 h-3.5 text-[#7CB342] flex-shrink-0" aria-hidden="true" />
          <span>{WHATSAPP_INFO.responseBadgeText}</span>
        </div>

        <div className="space-y-1 text-xs text-[#145317]/75">
          <p className="font-semibold text-[#145317]/90">
            Rio Branco - AC • WhatsApp {WHATSAPP_INFO.display}
          </p>
          <p className="text-[11px] text-[#145317]/65">
            Travessa Éden, n.193 - Jardim de Alah • CEP 69915-509
          </p>
        </div>

        {/* Links Internos de Navegação e Política de Privacidade */}
        <nav
          aria-label="Links institucionais do rodapé"
          className="pt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-semibold text-[#145317]/80"
        >
          <a
            href="/"
            onClick={(e) => handleAnchorNavigation(e, 'inicio')}
            className="hover:text-[#1B6B1E] underline-offset-4 hover:underline transition-colors"
          >
            Início
          </a>
          <span aria-hidden="true" className="text-[#7CB342]">
            •
          </span>
          <a
            href="#servicos"
            onClick={(e) => handleAnchorNavigation(e, 'servicos')}
            className="hover:text-[#1B6B1E] underline-offset-4 hover:underline transition-colors"
          >
            Serviços
          </a>
          <span aria-hidden="true" className="text-[#7CB342]">
            •
          </span>
          <a
            href="#localizacao"
            onClick={(e) => handleAnchorNavigation(e, 'localizacao')}
            className="hover:text-[#1B6B1E] underline-offset-4 hover:underline transition-colors"
          >
            Localização
          </a>
          <span aria-hidden="true" className="text-[#7CB342]">
            •
          </span>
          <a
            href="#faq"
            onClick={(e) => handleAnchorNavigation(e, 'faq')}
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

        <div className="pt-1 flex items-center justify-center gap-1.5 text-[11px] text-[#145317]/60">
          <span>© {currentYear} Varanda Verde. Todos os direitos reservados.</span>
          <Heart className="w-3 h-3 text-[#E8834A] fill-[#E8834A]/30 inline" aria-hidden="true" />
        </div>
      </footer>
    </div>
  );
};
