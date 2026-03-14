import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories, getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";

export const metadata: Metadata = {
  title: "Textil Cabrera | Estopas, Trapos Industriales y Guatas - Uruguay",
  description:
    "Textil Cabrera SRL - Fabricante uruguayo de estopas, trapos industriales, paños no tejidos y guatas desde 1989. Reciclaje textil en Barros Blancos, Canelones.",
};

const stats = [
  { value: "+35", label: "Años de experiencia" },
  { value: "4", label: "Líneas de productos" },
  { value: "100%", label: "Fabricación propia" },
  { value: "UY", label: "Origen uruguayo" },
];

const applications = [
  {
    title: "Industria Metalúrgica",
    description:
      "Estopas y trapos para limpieza de maquinaria, absorción de aceites y lubricantes en plantas metalúrgicas.",
  },
  {
    title: "Automotriz y Talleres",
    description:
      "Materiales de limpieza para talleres mecánicos, concesionarios y plantas de ensamblaje automotriz.",
  },
  {
    title: "Tapicería y Muebles",
    description:
      "Guatas y rellenos de alta calidad para fabricación de sofás, colchones, almohadas y edredones.",
  },
  {
    title: "Construcción",
    description:
      "Trapos y estopas para limpieza de obra, herramientas y aplicación de productos en construcción civil.",
  },
  {
    title: "Alimentaria y Farmacéutica",
    description:
      "Paños TNT y trapos blancos para industrias donde los estándares de higiene son críticos.",
  },
  {
    title: "Textil y Confección",
    description:
      "Guatas en manta y rellenos para la industria de confección, indumentaria técnica y ropa de cama.",
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <Image
            src="/images/estopa-a.webp"
            alt="Textil Cabrera - productos textiles industriales"
            fill
            sizes="100vw"
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative z-10 container-xl py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="section-label text-brand-400">
              Fabricante uruguayo desde 1989
            </p>
            <h1 className="heading-xl text-white mb-5 leading-tight">
              Productos textiles industriales de calidad
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Estopas, trapos industriales, paños no tejidos y guatas.
              Más de 35 años abasteciendo a la industria uruguaya con
              productos fabricados en nuestra planta de Barros Blancos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/productos" className="btn-primary">
                Ver catálogo completo
              </Link>
              <Link href="/contacto" className="btn-outline-white">
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
        <div className="relative z-10 h-1.5 bg-brand-600" />
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-xl py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-6 py-4">
                <div className="text-3xl md:text-4xl font-bold text-brand-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORÍAS ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <div className="mb-10">
            <span className="section-label">Nuestros productos</span>
            <h2 className="heading-lg text-gray-900">
              Catálogo de productos industriales
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-brand-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>


          <div className="mt-8">
            <Link href="/productos" className="btn-navy">
              Ver todos los productos
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-label">Quiénes somos</span>
              <h2 className="heading-lg text-gray-900 mb-4">
                Más de 35 años de experiencia en textil industrial
              </h2>
              <div className="w-12 h-0.5 bg-brand-600 mb-6" />
              <p className="text-gray-600 mb-4 leading-relaxed">
                Textil Cabrera SRL es una empresa uruguaya fundada en 1989,
                ubicada en Barros Blancos, Canelones. Nos especializamos en la
                fabricación y comercialización de productos textiles para la
                industria: estopas, trapos industriales, paños no tejidos y guatas.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestra actividad central es el reciclaje de desechos textiles,
                transformando residuos en productos de valor para la limpieza
                industrial, la tapicería y la confección. Combinamos experiencia
                con procesos propios para ofrecer productos confiables a empresas
                de todo el país.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/nosotros" className="btn-navy">
                  Conocer la empresa
                </Link>
                <Link href="/contacto" className="btn-outline">
                  Contactarnos
                </Link>
              </div>
            </div>

            {/* Imagen de maquinaria de guata */}
            <div className="relative aspect-[4/3] border border-gray-200 overflow-hidden">
              <Image
                src="/images/maq-guata-1.webp"
                alt="Planta de producción Textil Cabrera"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy-900/80 px-5 py-3">
                <p className="text-white text-sm font-medium">Planta de producción — Barros Blancos, Canelones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS DESTACADOS ── */}
      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-xl">
          <div className="mb-10">
            <span className="section-label">Productos destacados</span>
            <h2 className="heading-lg text-gray-900">
              Lo más solicitado por la industria
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-brand-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA RÁPIDA — imágenes del catálogo ── */}
      <section className="bg-white border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
          {[
            { src: "/images/trapo-color-10kg.webp", alt: "Trapo color 10 kg" },
            { src: "/images/estopa-color-grande.webp", alt: "Estopa de color" },
            { src: "/images/guata-siliconada.webp", alt: "Guata siliconada" },
            { src: "/images/trapo-blanco-25kg.webp", alt: "Trapo blanco 25 kg" },
            { src: "/images/panos-tnt-caja.webp", alt: "Paños TNT" },
            { src: "/images/guata-en-manta.webp", alt: "Guata en manta" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden bg-gray-100">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── APLICACIONES INDUSTRIALES ── */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-xl">
          <div className="mb-10">
            <span className="section-label">Aplicaciones</span>
            <h2 className="heading-lg text-gray-900">
              Industrias que confían en nosotros
            </h2>
            <div className="mt-3 w-12 h-0.5 bg-brand-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-200 divide-y divide-gray-200 lg:divide-x lg:[&>*:nth-child(n+4)]:border-t lg:[&>*:nth-child(3n+1):not(:nth-child(n+4))]:border-x-0">
            {applications.map((app) => (
              <div key={app.title} className="p-6">
                <div className="w-8 h-0.5 bg-brand-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-navy-800 text-white">
        <div className="container-xl py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                ¿Necesita productos textiles industriales?
              </h2>
              <p className="text-gray-300">
                Contáctenos y le enviamos una cotización a medida para su empresa.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://wa.me/59898695831?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n%20de%20productos%20textiles."
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
                Enviar consulta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
