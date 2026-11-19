import React, { useEffect, useRef, useState } from 'react';
import { Store, MessageCircleHeart, Trees, ArrowUpRight, Clock, X, Sparkles } from 'lucide-react';
import { BRAND_LOGOS, CONVERSION_LINKS, ConversionLink, WHATSAPP_INFO } from '../constants/links';
import { WhatsAppIcon } from './Icons';

const CATALOG_MODAL_WHATSAPP_URL =
  'https://wa.me/5568999845222?text=Ol%C3%A1!%20Vi%20que%20o%20site%20est%C3%A1%20em%20prepara%C3%A7%C3%A3o%20e%20gostaria%20de%20conferir%20o%20estoque%20dispon%C3%ADvel%20da%20Varanda%20Verde.';

const getThematicIcon = (id: ConversionLink['id']) => {
  switch (id) {
    case 'catalogo':
      return <Store className="w-5 h-5 text-white" aria-hidden="true" />;
    case 'atendimento':
      return <MessageCircleHeart className="w-5 h-5 text-[#1B6B1E]" aria-hidden="true" />;
    case 'paisagismo':
      return <Trees className="w-5 h-5 text-[#E8834A]" aria-hidden="true" />;
  }
};

export const ConversionButtons: React.FC = () => {
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isCatalogModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 30);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCatalogModalOpen(false);
        triggerButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isCatalogModalOpen]);

  const handleCloseModal = () => {
    setIsCatalogModalOpen(false);
    triggerButtonRef.current?.focus();
  };

  return (
    <>
      <section
        id="servicos"
        aria-label="Canais de atendimento e catálogo da Varanda Verde"
        className="space-y-3.5 scroll-mt-4"
      >
        {/* Indicador Visível de Prazo de Resposta (Horário Comercial 7h às 17h) */}
        <div
          role="status"
          className="rounded-2xl bg-white/90 backdrop-blur-md border border-[#7CB342]/35 px-3.5 py-2.5 shadow-sm flex items-center justify-center gap-2 text-center"
        >
          <Clock className="w-4 h-4 text-[#1B6B1E] flex-shrink-0" aria-hidden="true" />
          <p className="text-xs font-semibold text-[#145317] leading-snug">
            {WHATSAPP_INFO.responseBadgeText}
          </p>
        </div>

        {CONVERSION_LINKS.map((item) => {
          if (item.featured) {
            return (
              <button
                key={item.id}
                ref={triggerButtonRef}
                type="button"
                aria-haspopup="dialog"
                aria-expanded={isCatalogModalOpen}
                onClick={() => setIsCatalogModalOpen(true)}
                className="group relative block w-full min-h-[76px] text-left rounded-3xl bg-gradient-to-br from-[#1B6B1E] via-[#175E1A] to-[#145317] text-white p-4 sm:p-5 shadow-primary-cta border border-[#7CB342]/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-botanical-lg active:scale-[0.99] overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7CB342]/50"
              >
                {/* Brilho botânico orgânico no hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 w-36 h-36 rounded-full bg-[#8BC34A]/20 blur-2xl group-hover:bg-[#8BC34A]/30 transition-all duration-500"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-8 -bottom-10 w-28 h-28 rounded-full bg-[#F59B65]/15 blur-2xl"
                />

                <div className="relative flex items-center justify-between gap-3">
                  {/* Emblema com o Vaso Oficial + Ícone de Catálogo */}
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="relative flex-shrink-0 w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white/95 p-1.5 shadow-md flex items-center justify-center border border-[#8BC34A]/40 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={BRAND_LOGOS.vaso}
                        alt="Ícone de vaso com espada-de-são-jorge da Varanda Verde"
                        className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                      />
                      <span
                        title="Catálogo & Estoque Varanda Verde"
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#1B6B1E] text-white border-2 border-white flex items-center justify-center shadow-sm"
                      >
                        <WhatsAppIcon size={11} />
                      </span>
                    </div>

                    <div className="min-w-0 text-left">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#8BC34A]/25 border border-[#8BC34A]/40 text-[10px] sm:text-[11px] font-semibold text-[#FAF9F5] mb-1">
                        <Store className="w-3 h-3 text-[#8BC34A]" aria-hidden="true" />
                        <span>{item.tag}</span>
                      </div>
                      <h2 className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug">
                        {item.title}
                      </h2>
                      <p className="text-xs sm:text-[13px] text-white/85 font-normal leading-snug mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Indicador lateral */}
                  <div className="flex-shrink-0 flex flex-col items-end justify-center gap-1">
                    <span className="w-10 h-10 rounded-2xl bg-white/15 group-hover:bg-[#8BC34A] text-white group-hover:text-[#145317] border border-white/20 flex items-center justify-center transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </button>
            );
          }

          const isPaisagismo = item.id === 'paisagismo';

          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block w-full min-h-[70px] rounded-3xl bg-white/92 backdrop-blur-md p-4 sm:p-4.5 shadow-botanical border transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-botanical-lg active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1B6B1E]/25 ${
                isPaisagismo
                  ? 'border-[#F59B65]/35 hover:border-[#E8834A]'
                  : 'border-[#1B6B1E]/14 hover:border-[#7CB342]'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  {/* Cápsula do Ícone Temático com Selo WhatsApp */}
                  <div
                    className={`relative flex-shrink-0 w-12 h-12 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border ${
                      isPaisagismo
                        ? 'bg-gradient-to-br from-[#FAF9F5] to-[#F59B65]/18 border-[#F59B65]/35'
                        : 'bg-gradient-to-br from-[#FAF9F5] to-[#7CB342]/18 border-[#7CB342]/35'
                    }`}
                  >
                    {getThematicIcon(item.id)}
                    <span
                      title="Abrir no WhatsApp"
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#1B6B1E] text-white border-2 border-white flex items-center justify-center shadow-sm"
                    >
                      <WhatsAppIcon size={11} />
                    </span>
                  </div>

                  <div className="min-w-0 text-left">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider ${
                          isPaisagismo ? 'text-[#E8834A]' : 'text-[#7CB342]'
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <h2 className="text-base sm:text-[17px] font-bold text-[#145317] group-hover:text-[#1B6B1E] tracking-tight leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-[13px] text-[#145317]/75 font-normal leading-snug mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Botão de Ação Lateral */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isPaisagismo
                      ? 'bg-[#F59B65]/15 text-[#E8834A] group-hover:bg-[#E8834A] group-hover:text-white'
                      : 'bg-[#7CB342]/15 text-[#1B6B1E] group-hover:bg-[#1B6B1E] group-hover:text-white'
                  }`}
                >
                  <ArrowUpRight
                    className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </a>
          );
        })}
      </section>

      {/* Modal / Pop-up Elegante: "Nosso Site Está Sendo Preparado!" */}
      {isCatalogModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="catalog-modal-title"
          aria-describedby="catalog-modal-desc"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D3B10]/55 backdrop-blur-sm animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-[420px] rounded-3xl bg-[#FAF9F5] border border-[#1B6B1E]/15 shadow-botanical-lg overflow-hidden text-center p-6 sm:p-7 space-y-5 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Faixa superior nas cores da marca */}
            <div
              className="h-1.5 w-full terracotta-stripe-bar absolute top-0 left-0 right-0"
              aria-hidden="true"
            />

            {/* Botão X para fechar no canto superior direito */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleCloseModal}
              aria-label="Fechar aviso"
              className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white hover:bg-[#1B6B1E]/10 text-[#145317] border border-[#1B6B1E]/12 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6B1E]"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Ícone Oficial do Vaso no topo do modal */}
            <div className="pt-1">
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-white border border-[#7CB342]/35 p-2.5 shadow-sm flex items-center justify-center">
                <img
                  src={BRAND_LOGOS.vaso}
                  alt="Ícone de vaso com espada-de-são-jorge da Varanda Verde"
                  className="w-full h-full object-contain"
                />
                <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#F59B65] text-white border-2 border-white flex items-center justify-center shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>

            {/* Título e Mensagem do Modal */}
            <div className="space-y-2.5 px-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7CB342]/15 text-[#1B6B1E] text-[11px] font-bold uppercase tracking-wider">
                Novidade em Breve
              </span>
              <h2
                id="catalog-modal-title"
                className="text-xl sm:text-[22px] font-extrabold text-[#145317] tracking-tight leading-snug"
              >
                Nosso Site Está Sendo Preparado!
              </h2>
              <p
                id="catalog-modal-desc"
                className="text-xs sm:text-sm text-[#145317]/85 leading-relaxed"
              >
                Estamos preparando com carinho o nosso catálogo online para você conferir todas as
                plantas e vasos disponíveis. Enquanto o site não vai ao ar, você pode consultar
                nosso estoque atualizado diretamente com a nossa equipe pelo WhatsApp.
              </p>
            </div>

            {/* Ações Dentro do Modal */}
            <div className="space-y-2.5 pt-1">
              {/* Botão Principal: Consultar Estoque no WhatsApp */}
              <a
                href={CATALOG_MODAL_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCloseModal}
                className="w-full min-h-[54px] px-4 py-3 rounded-2xl bg-gradient-to-r from-[#1B6B1E] to-[#145317] hover:from-[#145317] hover:to-[#0D3B10] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-primary-cta transition-all duration-200 active:scale-[0.99]"
              >
                <WhatsAppIcon size={18} />
                <span>Consultar Estoque no WhatsApp</span>
              </a>

              {/* Botão Secundário: Entendi, voltar */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="w-full min-h-[48px] px-4 py-2.5 rounded-2xl bg-white hover:bg-[#1B6B1E]/8 text-[#145317] border border-[#1B6B1E]/15 font-semibold text-xs sm:text-sm transition-colors"
              >
                Entendi, voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
