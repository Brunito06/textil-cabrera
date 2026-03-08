import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <div className="container-xl text-center">
        <div className="text-8xl font-black text-gray-100 mb-4 select-none">
          404
        </div>
        <h1 className="heading-lg text-gray-900 mb-4">
          Página no encontrada
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
          La página que buscás no existe o fue movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
          <Link href="/productos" className="btn-outline">
            Ver productos
          </Link>
        </div>
      </div>
    </section>
  );
}
