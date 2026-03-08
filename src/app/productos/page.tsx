import type { Metadata } from "next";
import Link from "next/link";
import { categories, getProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Catálogo de Productos Textiles Industriales — Uruguay",
  description:
    "Catálogo completo de productos textiles industriales: estopas, trapos, paños no tejidos (TNT) y guatas siliconadas. Fabricante uruguayo en Barros Blancos, Canelones. Solicitá cotización.",
  alternates: { canonical: "https://textilcabrera.com/productos" },
  openGraph: {
    url: "https://textilcabrera.com/productos",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Catálogo Textil Cabrera" }],
  },
};

export default function ProductosPage() {
  return (
    <>
      <JsonLd
        type="breadcrumb"
        items={[
          { name: "Inicio", url: "https://textilcabrera.com" },
          { name: "Productos", url: "https://textilcabrera.com/productos" },
        ]}
      />
      {/* ── HEADER ── */}
      <section className="bg-navy-900 text-white py-20 md:py-24">
        <div className="container-xl">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-gray-200">Productos</span>
          </nav>
          <span className="section-label text-brand-400">Catálogo industrial</span>
          <h1 className="heading-xl text-white mb-5">Nuestros productos</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Cuatro líneas de productos textiles industriales, fabricados en Uruguay
            con más de 35 años de experiencia.
          </p>
        </div>
        <div className="h-1.5 bg-brand-600" />
      </section>

      {/* ── NAVEGACIÓN RÁPIDA ── */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-xl py-3">
          <div className="flex gap-1 overflow-x-auto">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.slug}`}
                className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy-700 border border-transparent hover:border-gray-300 transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS POR CATEGORÍA ── */}
      {categories.map((cat, index) => {
        const categoryProducts = getProductsByCategory(cat.slug);
        const isEven = index % 2 === 0;

        return (
          <section
            key={cat.id}
            id={cat.slug}
            className={`section-padding border-b border-gray-200 ${isEven ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="container-xl">
              {/* Header de sección */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
                <div>
                  <span className="section-label">{cat.name}</span>
                  <h2 className="heading-md text-gray-900 mb-2">{cat.name}</h2>
                  <div className="w-10 h-0.5 bg-brand-600 mb-3" />
                  <p className="text-gray-600 max-w-2xl leading-relaxed text-sm">
                    {cat.description}
                  </p>
                </div>
                <Link
                  href={`/productos/${cat.slug}`}
                  className="flex-shrink-0 btn-navy"
                >
                  Ver categoría completa
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ── */}
      <section className="bg-navy-800 text-white">
        <div className="container-xl py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                ¿No encontró lo que busca?
              </h2>
              <p className="text-gray-300 text-sm">
                Consúltenos. Podemos adaptar formatos y cantidades a las
                necesidades de su empresa.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://wa.me/59898695831?text=Hola%2C%20me%20interesa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20productos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-5 py-3 rounded transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <Link href="/contacto" className="btn-outline-white">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
