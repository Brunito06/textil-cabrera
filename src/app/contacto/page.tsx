import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contacto y Cotizaciones — Textil Cabrera Uruguay",
  description:
    "Solicitá una cotización de estopas, trapos o guatas industriales. Tel: 2288 5630 / 2288 8083. WhatsApp: 098 695 831. Email: tcc@adinet.com.uy. Ruta 8 Km 28, Barros Blancos, Canelones, Uruguay.",
  alternates: { canonical: "https://textilcabrera.com/contacto" },
  openGraph: {
    url: "https://textilcabrera.com/contacto",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Contacto Textil Cabrera" }],
  },
};

const WA_LINK =
  "https://wa.me/59898695831?text=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n%20de%20sus%20productos%20textiles.";

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        type="breadcrumb"
        items={[
          { name: "Inicio", url: "https://textilcabrera.com" },
          { name: "Contacto", url: "https://textilcabrera.com/contacto" },
        ]}
      />
      {/* ── HEADER ── */}
      <section className="bg-navy-900 text-white">
        <div className="container-xl py-20 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-gray-200">Contacto</span>
          </nav>
          <span className="section-label text-brand-400">Estamos para ayudarte</span>
          <h1 className="heading-xl text-white mb-5">Contacto</h1>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            Solicitá una cotización o consultá sobre nuestros productos.
            Te respondemos a la brevedad.
          </p>
        </div>
        <div className="h-1.5 bg-brand-600" />
      </section>

      {/* ── MEDIOS DE CONTACTO ── */}
      <section className="section-padding bg-white">
        <div className="container-xl">

          {/* Grid de tarjetas de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 mb-12">

            {/* Teléfono 1 */}
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-navy-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Teléfono</h3>
              </div>
              <div className="w-8 h-0.5 bg-brand-600 mb-4" />
              <a href="tel:+59822885630" className="text-xl font-bold text-navy-700 hover:text-brand-600 transition-colors block mb-1">
                2288 5630
              </a>
              <a href="tel:+59822888083" className="text-xl font-bold text-navy-700 hover:text-brand-600 transition-colors block mb-3">
                2288 8083
              </a>
              <p className="text-xs text-gray-500">Lunes a viernes, 08:00–12:00 y 13:30–16:30</p>
            </div>

            {/* WhatsApp */}
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-green-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">WhatsApp</h3>
              </div>
              <div className="w-8 h-0.5 bg-brand-600 mb-4" />
              <p className="text-xl font-bold text-gray-900 mb-3">098 695 831</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
              >
                Abrir WhatsApp
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Email */}
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-brand-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Email</h3>
              </div>
              <div className="w-8 h-0.5 bg-brand-600 mb-4" />
              <a
                href="mailto:tcc@adinet.com.uy"
                className="text-base font-bold text-navy-700 hover:text-brand-600 transition-colors block break-all mb-3"
              >
                tcc@adinet.com.uy
              </a>
              <a
                href="mailto:tcc@adinet.com.uy?subject=Solicitud%20de%20cotizaci%C3%B3n"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                Enviar email
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Instagram */}
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[#C13584] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-sm">Instagram</h3>
              </div>
              <div className="w-8 h-0.5 bg-brand-600 mb-4" />
              <p className="text-base font-bold text-gray-900 mb-3">textilcabrera.uy</p>
              <a
                href="https://www.instagram.com/textilcabrera.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C13584] hover:opacity-80 transition-opacity"
              >
                Ver perfil
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Dirección + mapa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Dirección */}
            <div className="border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-navy-700 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">Dónde nos encontrás</h3>
              </div>
              <div className="w-8 h-0.5 bg-brand-600 mb-5" />
              <p className="text-gray-700 leading-relaxed mb-1 font-semibold">
                Ruta 8 Km 28
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Cno. Vega Helguera — Calle Edipo S/N<br />
                Barros Blancos, Canelones<br />
                Uruguay
              </p>

              <div className="border-t border-gray-200 pt-5 space-y-4 mb-6">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">Horario de atención</p>
                    <p className="text-sm text-gray-700 font-medium">Lunes a Viernes · 08:00–12:00 y 13:30–16:30</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-5">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Para cotizaciones empresariales:
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Indicanos el producto, volumen estimado y frecuencia de compra
                  y te enviamos una propuesta a medida.
                </p>
                <a
                  href="mailto:tcc@adinet.com.uy?subject=Solicitud%20de%20cotizaci%C3%B3n&body=Hola%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n%20para%3A%0A%0AProducto%3A%20%0AVolumen%20aproximado%3A%20%0AFrecuencia%3A%20%0A%0AEmpresa%3A%20%0AContacto%3A"
                  className="btn-primary"
                >
                  Solicitar cotización por email
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="border border-gray-200 overflow-hidden min-h-[400px] bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955!2d-55.9869886!3d-34.7362526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02663a1b2ae75%3A0x62a6158eba1d125f!2sTextil%20Cabrera!5e0!3m2!1ses!2suy!4v1709800000000!5m2!1ses!2suy"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Textil Cabrera — Ruta 8 Km 28, Barros Blancos, Canelones"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LINKS A PRODUCTOS ── */}
      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-xl">
          <div className="mb-8">
            <h2 className="heading-md text-gray-900">¿Qué producto le interesa?</h2>
            <div className="mt-3 w-10 h-0.5 bg-brand-600" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 divide-x divide-gray-200">
            {[
              { href: "/productos#estopas", label: "Estopas" },
              { href: "/productos#trapos", label: "Trapos" },
              { href: "/productos#trapos-no-tejidos", label: "Trapos No Tejidos" },
              { href: "/productos#guatas", label: "Guatas" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center justify-center gap-2 p-8 bg-white hover:bg-navy-50 transition-colors text-center"
              >
                <span className="text-sm font-bold text-gray-800 group-hover:text-navy-700 transition-colors">
                  {item.label}
                </span>
                <span className="text-xs text-gray-400 group-hover:text-navy-500 transition-colors">
                  Ver productos →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
