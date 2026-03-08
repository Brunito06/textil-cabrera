# Textil Cabrera — Sitio Web

Sitio web corporativo de **Textil Cabrera SRL**, fabricante uruguayo de productos textiles industriales desde 1989. Construido con Next.js 14 App Router, TypeScript y Tailwind CSS.

---

## Stack

- **Next.js 14** — App Router, SSG, metadata API
- **TypeScript**
- **Tailwind CSS**

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx              # Layout global, metadata base, JsonLd org/localBusiness
│   ├── page.tsx                # Home
│   ├── nosotros/page.tsx
│   ├── contacto/page.tsx
│   ├── productos/
│   │   ├── page.tsx            # Catálogo completo
│   │   └── [producto]/page.tsx # Página de producto individual y de categoría
│   ├── robots.ts               # Genera /robots.txt
│   └── sitemap.ts              # Genera /sitemap.xml (20 URLs)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CategoryCard.tsx
│   └── JsonLd.tsx              # Datos estructurados (schema.org)
└── lib/
    └── products.ts             # Datos de productos y categorías
public/
└── images/                     # Imágenes de productos y og:image
```

---

## Comandos

```bash
npm run dev      # Servidor de desarrollo en http://localhost:3000
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

---

## Agregar o editar productos

Todo el catálogo vive en `src/lib/products.ts`. Cada producto tiene esta estructura:

```ts
{
  id: "slug-unico",
  name: "Nombre del producto",
  slug: "slug-unico",           // Define la URL: /productos/slug-unico
  category: "Nombre categoría",
  categorySlug: "slug-cat",
  shortDescription: "...",
  description: "...",
  formats: ["Formato 1", "Formato 2"],
  image: "/images/imagen.jpg",
  gallery: ["/images/extra.jpg"],
  featured: true,               // Aparece en home si es true
}
```

El sitemap y el SEO se actualizan automáticamente al agregar productos.

---

## SEO implementado

- `robots.ts` → `/robots.txt` con referencia al sitemap
- `sitemap.ts` → `/sitemap.xml` con 20 URLs (4 estáticas + 4 categorías + 12 productos)
- `JsonLd.tsx` → Schema.org: `Organization`, `LocalBusiness`, `Product`, `BreadcrumbList`
- `og:image`, `twitter:card`, `canonical` en todas las páginas
- Headers HTTP: `X-Robots-Tag`, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`

---

## Verificación post-deploy

```bash
# Robots y sitemap
curl https://textilcabrera.com/robots.txt
curl https://textilcabrera.com/sitemap.xml

# Cabeceras HTTP
curl -I https://textilcabrera.com/
```

- Rich Results Test: https://search.google.com/test/rich-results
- Open Graph: https://developers.facebook.com/tools/debug
- Google Search Console: enviar sitemap en `https://search.google.com/search-console`
