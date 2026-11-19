# Varanda Verde — Bio-Site Oficial (`@varandaverdeacre`)

Bio-Site mobile-first de alta conversão desenvolvido para a **Varanda Verde**, viveiro de plantas ornamentais, vasos e empresa de paisagismo em **Rio Branco - AC**.

## Identidade Visual & Logomarcas Oficiais
As 3 variações oficiais da logomarca estão preservadas em formato PNG transparente em `public/images/` e `src/assets/`:
- `Logo Varanda (Completo).png` — Cabeçalho / Hero principal
- `Logo Varabda (Vaso).png` — Favicon, emblemas nos cartões e marca d'água sutil
- `Logo Varanda (nome).png` — Assinatura institucional no rodapé

## Links de Conversão Configurados
- **WhatsApp Oficial:** `(68) 99984-5222`
  1. **Nosso Site & Estoque:** `https://wa.me/5568999845222?text=Ol%C3%A1!%20Gostaria%20de%20acessar%20o%20site%20e%20conferir%20o%20estoque%20dispon%C3%ADvel%20da%20Varanda%20Verde.`
  2. **Fale Conosco:** `https://wa.me/5568999845222?text=Ol%C3%A1!%20Quero%20falar%20com%20a%20equipe%20da%20Varanda%20Verde.`
  3. **Orçamento de Paisagismo:** `https://wa.me/5568999845222?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20paisagismo%20com%20a%20Varanda%20Verde.`
- **Onde Estamos (Google Maps):** `Travessa Éden, n.193 - Jardim de Alah, Rio Branco - AC, 69915-509`
  - **Rota Direta:** `https://www.google.com/maps/search/?api=1&query=Travessa+%C3%89den%2C+193+-+Jardim+de+Alah%2C+Rio+Branco+-+AC%2C+69915-509`
- **Instagram Oficial:** [`@varandaverdeacre`](https://www.instagram.com/varandaverdeacre/)

## Configuração da Google Maps API (`VITE_GOOGLE_MAPS_API_KEY`)
O componente de mapa funciona automaticamente mesmo sem chave configurada (via fallback nativo do Google Maps Embed). Para utilizar sua chave oficial da **Google Maps Embed API**:
1. Crie um arquivo `.env` na raiz do projeto (ou configure nas variáveis de ambiente da Vercel):
   ```env
   VITE_GOOGLE_MAPS_API_KEY=SUA_CHAVE_AQUI
   ```
2. Reinicie o servidor de desenvolvimento (`npm run dev`) ou execute o build (`npm run build`).
