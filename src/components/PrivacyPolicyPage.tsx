import React from 'react';
import { ShieldCheck, ArrowLeft, Lock, ExternalLink, MapPin } from 'lucide-react';
import { BRAND_LOGOS, INSTAGRAM_INFO, LOCATION_INFO, WHATSAPP_INFO } from '../constants/links';
import { Breadcrumbs } from './Breadcrumbs';
import { WhatsAppIcon } from './Icons';

interface PrivacyPolicyPageProps {
  onNavigateHome: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="space-y-5">
      {/* Trilha de Navegação (Breadcrumbs): Início > Política de Privacidade */}
      <Breadcrumbs
        currentPageLabel="Política de Privacidade"
        onNavigateHome={onNavigateHome}
      />

      <article className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-[#1B6B1E]/12 shadow-botanical overflow-hidden">
        <div className="h-1.5 w-full terracotta-stripe-bar" aria-hidden="true" />

        <div className="p-5 sm:p-7 space-y-6">
          {/* Cabeçalho da Página */}
          <div className="flex items-center gap-3.5 pb-4 border-b border-[#1B6B1E]/10">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] border border-[#1B6B1E]/12 p-1.5 flex items-center justify-center flex-shrink-0">
              <img
                src={BRAND_LOGOS.vaso}
                alt="Ícone de vaso com espada-de-são-jorge da Varanda Verde"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1B6B1E]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7CB342]" aria-hidden="true" />
                <span>Conformidade LGPD • Transparência</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#145317] tracking-tight">
                Política de Privacidade
              </h1>
            </div>
          </div>

          {/* Conteúdo explicativo em conformidade com a LGPD */}
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#145317]/85">
            <p>
              A <strong className="font-bold text-[#145317]">Varanda Verde</strong> (
              <span className="font-semibold">{INSTAGRAM_INFO.handle}</span>), localizada na{' '}
              {LOCATION_INFO.addressDisplay}, preza pela transparência, privacidade e segurança dos
              seus visitantes, em total conformidade com a{' '}
              <strong className="font-bold text-[#145317]">
                Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)
              </strong>
              .
            </p>

            <div className="rounded-2xl bg-[#FAF9F5] border border-[#1B6B1E]/12 p-4 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#145317]">
                <Lock className="w-4 h-4 text-[#1B6B1E]" aria-hidden="true" />
                <h2>1. Coleta de Dados neste Bio-Site</h2>
              </div>
              <p>
                Este Bio-Site funciona como um cartão digital interativo de acesso rápido aos nossos
                canais oficiais.{' '}
                <strong className="font-semibold text-[#145317]">
                  Não realizamos coleta oculta de dados pessoais sensíveis, não exigimos cadastro e
                  não armazenamos cookies de rastreamento publicitário próprios
                </strong>{' '}
                durante a sua navegação nesta página.
              </p>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-sm sm:text-base font-bold text-[#145317]">
                2. Redirecionamento para Plataformas Externas
              </h2>
              <p>
                Ao clicar nos botões de ação deste Bio-Site, você é direcionado voluntariamente
                para serviços externos oficiais:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="font-semibold text-[#145317]">WhatsApp Oficial:</strong> ao
                  iniciar uma conversa pelo número {WHATSAPP_INFO.display}, os dados compartilhados
                  (como seu nome, telefone e mensagem) são utilizados exclusivamente pela equipe da
                  Varanda Verde para responder às suas dúvidas, enviar informações de catálogo,
                  calcular entregas ou elaborar orçamentos de paisagismo.
                </li>
                <li>
                  <strong className="font-semibold text-[#145317]">Instagram:</strong> o link para o
                  perfil <span className="font-semibold">{INSTAGRAM_INFO.handle}</span> segue as
                  políticas de privacidade da plataforma Meta/Instagram.
                </li>
                <li>
                  <strong className="font-semibold text-[#145317]">Google Maps:</strong> o mapa
                  interativo incorporado e o botão de rota utilizam os serviços do Google Maps para
                  exibir a localização física do nosso viveiro no bairro Jardim de Alah.
                </li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-sm sm:text-base font-bold text-[#145317]">
                3. Direitos do Titular dos Dados (LGPD)
              </h2>
              <p>
                Caso você tenha entrado em contato conosco via WhatsApp, você pode solicitar a
                qualquer momento a confirmação, atualização ou exclusão do seu histórico de
                atendimento comercial diretamente pelo nosso canal oficial de atendimento.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FAF9F5] border border-[#1B6B1E]/12 p-4 space-y-2">
              <h2 className="text-sm font-bold text-[#145317]">4. Canal de Contato e Atendimento</h2>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E8834A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{LOCATION_INFO.addressDisplay}</span>
              </p>
              <p className="text-xs text-[#145317]/75">
                Horário comercial: das 7h às 17h • WhatsApp: {WHATSAPP_INFO.display}
              </p>
            </div>
          </div>

          {/* Botões de Ação e Retorno para a Página Inicial */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="/"
              onClick={onNavigateHome}
              className="w-full sm:flex-1 min-h-[52px] px-5 py-3 rounded-2xl bg-[#1B6B1E] hover:bg-[#145317] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-primary-cta transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Voltar para a Página Inicial</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_INFO.rawNumber}?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20equipe%20da%20Varanda%20Verde.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[52px] px-4 py-3 rounded-2xl bg-[#FAF9F5] hover:bg-[#7CB342]/15 text-[#145317] border border-[#1B6B1E]/15 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <WhatsAppIcon size={16} className="text-[#1B6B1E]" />
              <span>Falar no WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
