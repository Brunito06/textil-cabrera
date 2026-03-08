import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
  compact?: boolean;
};

export default function ProductCard({ product, compact = false }: Props) {
  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group flex flex-col bg-white border border-gray-200 hover:border-navy-700 hover:shadow-md transition-all duration-200"
    >
      {/* Imagen */}
      <div className="relative h-44 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Etiqueta de categoría */}
        <div className="absolute top-0 left-0 bg-navy-700 text-white text-xs font-bold px-3 py-1">
          {product.category}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
          {product.name}
        </h3>
        {!compact && (
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
            {product.shortDescription}
          </p>
        )}
        <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-brand-600 transition-colors">
          Ver detalles
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
