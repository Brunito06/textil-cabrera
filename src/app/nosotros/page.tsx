import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "Textil Cabrera — Empresa Uruguaya de Textiles Industriales desde 1989" },
  description:
    "Conocé la historia de Textil Cabrera SRL, fabricante uruguayo de estopas, trapos industriales y guatas desde 1989. Planta propia en Barros Blancos, Canelones. Más de 35 años en reciclaje textil.",
  alternates: { canonical: "https://textilcabrera.com.uy/nosotros" },
  openGraph: {
    url: "https://textilcabrera.com.uy/nosotros",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630, alt: "Textil Cabrera — Planta Barros Blancos" }],
  },
};

const timeline = [
  {
    year: "1989",
    title: "Fundación de Textil Cabrera",
    description:
      "La empresa es fundada en Barros Blancos, Canelones, con el objetivo de aprovechar los desechos de la industria textil uruguaya para fabricar productos de limpieza industrial.",
  },
  {
    year: "1990s",
    title: "Consolidación en el mercado",
    description:
      "Se desarrolla la línea completa de estopas y trapos industriales, estableciendo relaciones comerciales con las principales industrias del país.",
  },
  {
    year: "2000s",
    title: "Incorporación de nuevas líneas",
    description:
      "Se suma la producción de guatas siliconadas y paños no tejidos (TNT), ampliando la oferta hacia la industria de tapicería y confección.",
  },
  {
    year: "Hoy",
    title: "Más de 35 años de experiencia",
    description:
      "Textil Cabrera consolida su posición como uno de los principales fabricantes de productos textiles industriales en Uruguay, con planta propia en Barros Blancos.",
  },
];

const values = [
  {
    title: "Reciclaje responsable",
    description:
      "Recuperamos y procesamos desechos textiles que de otro modo irían a vertederos, transformándolos en productos útiles para la industria. Es el pilar central de nuestro modelo de negocio.",
  },
  {
    title: "Calidad en cada producto",
    description:
      "Cada lote de materia prima es seleccionado y clasificado manualmente por nuestro equipo, garantizando que los productos cumplan los estándares que la industria exige.",
  },
  {
    title: "Fabricación nacional",
    description:
      "Todo el proceso productivo —desde la recepción de la materia prima hasta el embalaje final— se realiza en nuestra planta en Barros Blancos, generando empleo local.",
  },
  {
    title: "Confiabilidad y trayectoria",
    description:
      "Con más de 35 años en el mercado, somos un proveedor confiable para industrias de todo el Uruguay. Nuestra trayectoria habla por sí sola.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        type="breadcrumb"
        items={[
          { name: "Inicio", url: "https://textilcabrera.com.uy" },
          { name: "Nosotros", url: "https://textilcabrera.com.uy/nosotros" },
        ]}
      />
      {/* ── HEADER ── */}
      <section className="bg-navy-900 text-white">
        <div className="container-xl py-20 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-gray-200">Nosotros</span>
          </nav>
          <span className="section-label text-brand-400">Quiénes somos</span>
          <h1 className="heading-xl text-white mb-5">Textil Cabrera</h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Empresa uruguaya especializada en reciclaje textil y producción de
            artículos industriales desde 1989.
          </p>
        </div>
        <div className="h-1.5 bg-brand-600" />
      </section>

      {/* ── HISTORIA ── */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-label">Nuestra historia</span>
              <h2 className="heading-lg text-gray-900 mb-4">
                Más de tres décadas transformando el textil
              </h2>
              <div className="w-12 h-0.5 bg-brand-600 mb-6" />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Textil Cabrera SRL nació en 1989 en Barros Blancos, Canelones,
                  Uruguay. Desde sus inicios, la empresa se dedicó a la
                  recuperación y aprovechamiento de desechos textiles, una
                  actividad que hoy llamaríamos &quot;economía circular&quot; pero que
                  para nosotros siempre fue simplemente la forma correcta de
                  trabajar.
                </p>
                <p>
                  Con el tiempo, fuimos desarrollando cuatro líneas de productos
                  complementarias: las estopas industriales, los trapos para
                  limpieza, los paños no tejidos (TNT) y las guatas para
                  tapicería y confección. Cada línea responde a una necesidad
                  concreta de la industria uruguaya.
                </p>
                <p>
                  Hoy contamos con una planta de producción propia, maquinaria
                  especializada y un equipo con décadas de experiencia. Somos
                  proveedores de talleres mecánicos, plantas industriales,
                  tapiceros, fabricantes de colchones y muchas otras industrias
                  en todo el país.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Imagen de planta */}
              <div className="relative aspect-[4/3] border border-gray-200 overflow-hidden">
                <Image
                  src="/images/maq-guata-2.webp"
                  alt="Planta de producción Textil Cabrera"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-navy-900/80 px-4 py-2">
                  <p className="text-white text-xs font-medium">Planta de producción — Barros Blancos, Canelones</p>
                </div>
              </div>
              {/* Stats en fila */}
              <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
                {[
                  { value: "1989", label: "Año de fundación" },
                  { value: "+35", label: "Años de experiencia" },
                  { value: "4", label: "Líneas de productos" },
                  { value: "100%", label: "Fabricación propia" },
                ].map((s) => (
                  <div key={s.label} className="bg-white p-5 text-center">
                    <div className="text-2xl font-bold text-brand-600 mb-1">{s.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECICLAJE TEXTIL ── */}
      <section className="section-padding bg-navy-800 text-white">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="section-label text-brand-400">Reciclaje textil</span>
            <h2 className="heading-lg text-white mb-4">
              El reciclaje es parte de nuestra identidad
            </h2>
            <div className="w-12 h-0.5 bg-brand-600 mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Nuestra actividad principal es la recuperación de desechos textiles:
              recibimos residuos de la industria de la confección —retazos de
              telas, restos de hilado, prendas fuera de uso— y los procesamos
              para fabricar nuestros productos.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Este proceso no solo reduce el impacto ambiental de la industria
              textil, sino que también permite ofrecer productos de calidad a
              precios accesibles. La guata para tapicería, las estopas y los
              trapos industriales son el resultado de darle una segunda vida a
              materiales que de otro modo serían descartados.
            </p>
          </div>
        </div>
      </section>

      {/* ── GALERÍA MAQUINARIA ── */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-xl">
          <div className="mb-8">
            <span className="section-label">Nuestra planta</span>
            <h2 className="heading-md text-gray-900">Instalaciones y maquinaria</h2>
            <div className="mt-3 w-12 h-0.5 bg-brand-600" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200">
            {[
              { src: "/images/maq-guata-1.webp", alt: "Maquinaria de guata 1" },
              { src: "/images/maq-guata-2.webp", alt: "Maquinaria de guata 2" },
              { src: "/images/maq-guata-3.webp", alt: "Maquinaria de guata 3" },
              { src: "/images/maq-guata-4.webp", alt: "Maquinaria de guata 4" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-xl">
          <div className="mb-10">
            <span className="section-label">Lo que nos define</span>
            <h2 className="heading-lg text-gray-900">Nuestros valores</h2>
            <div className="mt-3 w-12 h-0.5 bg-brand-600" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <div className="w-8 h-0.5 bg-brand-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-xl">
          <div className="mb-10">
            <span className="section-label">Nuestra trayectoria</span>
            <h2 className="heading-lg text-gray-900">Historia de la empresa</h2>
            <div className="mt-3 w-12 h-0.5 bg-brand-600" />
          </div>

          <div className="max-w-3xl">
            <div className="relative border-l-2 border-gray-300 ml-6 pl-8 space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[2.85rem] top-0 w-5 h-5 bg-navy-700 border-2 border-white ring-2 ring-navy-700" />
                  <div className="bg-white border border-gray-200 p-6">
                    <span className="inline-block bg-navy-700 text-white text-xs font-bold px-3 py-1 mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy-800 text-white">
        <div className="container-xl py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                ¿Querés trabajar con nosotros?
              </h2>
              <p className="text-gray-300">
                Contactanos para solicitar una cotización o conocer nuestras
                condiciones de venta.
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/contacto" className="btn-primary">
                Contactar ahora
              </Link>
              <Link href="/productos" className="btn-outline-white">
                Ver catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
