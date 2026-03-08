# Textil Cabrera - Project Memory

## Project
Corporate catalog website for Textil Cabrera SRL (Uruguayan textile company).
Stack: Next.js 14, TypeScript, TailwindCSS, App Router.
Location: /Users/emirodriguez/Developer/new-textil/

## Company Info (verified)
- Name: Textil Cabrera SRL
- Founded: 1989
- Location: Cam. Helguera esq. Ruta 8 Km 28, Barros Blancos, Canelones, Uruguay
- Phone: 2288 8083
- Mobile/WhatsApp: 099 331 723
- Email: tcc@vera.com.uy
- Focus: Reciclaje textil + productos industriales

## Products (4 categories)
1. Estopas (estopas) - estopa color, estopa blanca
2. Trapos Industriales (trapos-industriales) - trapo color, trapo blanco
3. Trapos No Tejidos (trapos-no-tejidos) - TNT industrial, TNT liviano
4. Guatas (guatas) - guata siliconada, guata en manta

## Key Files
- src/lib/products.ts — all product/category data
- src/app/layout.tsx — root layout with Header, Footer, WhatsAppButton
- src/components/Header.tsx — sticky nav with mobile menu
- src/components/Footer.tsx — full footer with contact info
- src/components/WhatsAppButton.tsx — floating global WA button
- src/app/page.tsx — home page
- src/app/nosotros/page.tsx — about page
- src/app/productos/page.tsx — full catalog
- src/app/productos/[categoria]/page.tsx — dynamic category pages

## Design Tokens (tailwind.config.ts)
- brand: red-orange (#e84e27 base)
- industrial: warm gray scale

## Run locally
npm run dev (inside /Users/emirodriguez/Developer/new-textil/)
