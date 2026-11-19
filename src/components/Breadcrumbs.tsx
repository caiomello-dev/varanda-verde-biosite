import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPageLabel: string;
  onNavigateHome: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentPageLabel,
  onNavigateHome,
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full rounded-2xl bg-white/90 backdrop-blur-md border border-[#1B6B1E]/12 px-4 py-2.5 shadow-sm"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-medium text-[#145317]">
        <li className="inline-flex items-center">
          <a
            href="/"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-[#1B6B1E] hover:text-[#145317] font-semibold underline-offset-4 hover:underline transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#7CB342]" aria-hidden="true" />
            <span>Início</span>
          </a>
        </li>
        <li aria-hidden="true" className="inline-flex items-center text-[#145317]/40">
          <ChevronRight className="w-3.5 h-3.5" />
        </li>
        <li aria-current="page" className="font-bold text-[#145317] truncate">
          {currentPageLabel}
        </li>
      </ol>
    </nav>
  );
};
