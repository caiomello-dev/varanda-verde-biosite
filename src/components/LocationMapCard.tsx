import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { BRAND_LOGOS, LOCATION_INFO } from '../constants/links';

export const LocationMapCard: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [mapLoadError, setMapLoadError] = useState(false);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY?.trim();

  // Utiliza a Google Maps Embed API oficial se VITE_GOOGLE_MAPS_API_KEY estiver configurada,
  // com fallback automático e transparente para o Google Maps Embed padrão.
  const mapIframeSrc =
    apiKey && !mapLoadError
      ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
          apiKey
        )}&q=${encodeURIComponent(LOCATION_INFO.addressQuery)}&zoom=16&language=pt-BR`
      : LOCATION_INFO.fallbackEmbedUrl;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(LOCATION_INFO.addressDisplay);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = LOCATION_INFO.addressDisplay;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <section
      id="localizacao"
      aria-labelledby="location-heading"
      className="relative rounded-3xl bg-white/92 backdrop-blur-md border border-[#1B6B1E]/12 shadow-botanical overflow-hidden transition-all duration-300 hover:shadow-botanical-lg scroll-mt-4"
    >
      {/* Faixa decorativa superior nas cores do vaso e folhas da Varanda Verde */}
      <div className="h-1.5 w-full terracotta-stripe-bar" aria-hidden="true" />

      <div className="p-5 sm:p-6">
        {/* Cabeçalho do Card de Localização */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
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
                <MapPin className="w-3.5 h-3.5 text-[#E8834A]" aria-hidden="true" />
                <span>Visite Nosso Viveiro</span>
              </div>
              <h2
                id="location-heading"
                className="text-lg sm:text-xl font-bold text-[#145317] tracking-tight"
              >
                {LOCATION_INFO.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopyAddress}
            aria-label="Copiar endereço completo da Varanda Verde"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
              copied
                ? 'bg-[#1B6B1E] text-white border-[#1B6B1E]'
                : 'bg-[#FAF9F5] text-[#145317] border-[#1B6B1E]/15 hover:border-[#7CB342] hover:bg-[#7CB342]/10'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#8BC34A]" aria-hidden="true" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#1B6B1E]" aria-hidden="true" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        {/* Bloco de Endereço Completo */}
        <div className="rounded-2xl bg-[#FAF9F5] border border-[#1B6B1E]/10 p-3.5 sm:p-4 mb-4">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#1B6B1E] flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm leading-relaxed text-[#145317]">
              <p className="font-semibold text-[#145317]">
                {LOCATION_INFO.addressDisplay}
              </p>
              <p className="text-xs text-[#145317]/70 mt-0.5">
                Horário de funcionamento: 7h às 17h • Rio Branco - AC
              </p>
            </div>
          </div>
        </div>

        {/* Mapa Interativo (Google Maps API / Embed) */}
        <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-[#1B6B1E]/15 bg-[#F3EFE6] mb-4 shadow-inner">
          <iframe
            title="Localização da Varanda Verde no Google Maps - Travessa Éden, 193 - Jardim de Alah, Rio Branco - AC"
            src={mapIframeSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onError={() => setMapLoadError(true)}
            className="w-full h-full"
          />
        </div>

        {/* Botão Obrigatório: Abrir Rota no Google Maps */}
        <a
          href={LOCATION_INFO.routeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full min-h-[56px] px-4 py-3.5 rounded-2xl bg-gradient-to-r from-[#F59B65]/18 via-[#F59B65]/12 to-[#7CB342]/15 hover:from-[#1B6B1E] hover:to-[#145317] text-[#145317] hover:text-white border border-[#E8834A]/35 hover:border-[#1B6B1E] transition-all duration-300 flex items-center justify-between gap-3 shadow-sm hover:shadow-primary-cta active:scale-[0.99]"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-10 h-10 rounded-xl bg-white/90 group-hover:bg-white/15 flex items-center justify-center text-[#E8834A] group-hover:text-[#8BC34A] transition-colors flex-shrink-0 shadow-sm">
              <Navigation className="w-5 h-5" aria-hidden="true" />
            </span>
            <div className="text-left min-w-0">
              <span className="block text-sm sm:text-base font-bold tracking-tight truncate">
                Abrir Rota no Google Maps
              </span>
              <span className="block text-xs text-[#145317]/75 group-hover:text-white/85 truncate transition-colors">
                Navegar até Travessa Éden, 193 • Jardim de Alah
              </span>
            </div>
          </div>

          <ExternalLink
            className="w-4 h-4 flex-shrink-0 opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
};
