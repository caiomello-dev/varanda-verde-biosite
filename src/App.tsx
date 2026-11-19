import React, { useEffect, useState } from 'react';
import { HeroHeader } from './components/HeroHeader';
import { ConversionButtons } from './components/ConversionButtons';
import { LocationMapCard } from './components/LocationMapCard';
import { FaqSection } from './components/FaqSection';
import { InstagramFooter } from './components/InstagramFooter';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { NotFoundPage } from './components/NotFoundPage';
import { BRAND_LOGOS } from './constants/links';

const normalizePathname = (pathname: string): string => {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
};

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePathname(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePathname(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentPath === '/') {
      document.title = 'Varanda Verde | Plantas & Paisagismo - Rio Branco, AC';
    } else if (currentPath === '/privacidade') {
      document.title = 'Política de Privacidade | Varanda Verde - Rio Branco, AC';
    } else {
      document.title = 'Página não encontrada (404) | Varanda Verde - Rio Branco, AC';
    }
  }, [currentPath]);

  const handleNavigate = (targetPath: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) {
      e.preventDefault();
    }
    const normalized = normalizePathname(targetPath);
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderRouteContent = () => {
    if (currentPath === '/') {
      return (
        <>
          {/* A. Cabeçalho & Identidade (Hero Compacto) */}
          <HeroHeader onNavigate={handleNavigate} />

          {/* B. Prazo de Resposta + Os 3 Botões Principais de Conversão (WhatsApp Oficial) */}
          <ConversionButtons />

          {/* C. Card de Localização Interativa (Onde Estamos + Google Maps API) */}
          <LocationMapCard />

          {/* D. Seção de Perguntas Frequentes (FAQ Interativo / Accordion) */}
          <FaqSection />

          {/* E. Seção Instagram (@varandaverdeacre) & Rodapé Institucional */}
          <InstagramFooter onNavigate={handleNavigate} />
        </>
      );
    }

    if (currentPath === '/privacidade') {
      return (
        <>
          <PrivacyPolicyPage onNavigateHome={(e) => handleNavigate('/', e)} />
          <InstagramFooter onNavigate={handleNavigate} />
        </>
      );
    }

    // Rota Coringa (*): Página 404 Personalizada
    return (
      <>
        <NotFoundPage onNavigateHome={(e) => handleNavigate('/', e)} />
        <InstagramFooter onNavigate={handleNavigate} />
      </>
    );
  };

  return (
    <div className="relative min-h-screen w-full botanical-bg overflow-x-hidden flex flex-col justify-between selection:bg-[#7CB342]/25 selection:text-[#145317]">
      {/* Iluminação orgânica superior e marca d'água botânica sutil com Logo Varabda (Vaso).png */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
      >
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[280px] rounded-full bg-gradient-to-b from-[#7CB342]/14 via-[#F59B65]/10 to-transparent blur-3xl" />
        <img
          src={BRAND_LOGOS.vaso}
          alt="Marca d'água decorativa do vaso com espada-de-são-jorge da Varanda Verde"
          className="hidden sm:block absolute -right-16 bottom-6 w-72 h-72 object-contain opacity-[0.035] select-none"
        />
        <img
          src={BRAND_LOGOS.vaso}
          alt="Marca d'água decorativa do vaso com espada-de-são-jorge da Varanda Verde"
          className="hidden sm:block absolute -left-16 top-24 w-64 h-64 object-contain opacity-[0.03] select-none"
        />
      </div>

      {/* Coluna Central Mobile-First: max-w-[480px] no mobile/tablet e lg:max-w-[540px] no desktop */}
      <main className="w-full max-w-[480px] lg:max-w-[540px] mx-auto px-4 sm:px-6 py-4 sm:py-8 space-y-5">
        {renderRouteContent()}
      </main>
    </div>
  );
}

export default App;
