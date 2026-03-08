import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/products";

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/productos/${category.slug}`}
      className="group flex flex-col bg-white border border-gray-200 hover:border-navy-700 hover:shadow-md transition-all duration-200"
    >
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden bg-navy-900">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay oscuro en la parte inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
        {/* Barra roja top que aparece en hover */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
        {/* Nombre sobre la imagen */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
          <h3 className="text-white font-bold text-base leading-tight group-hover:text-brand-300 transition-colors">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Descripción */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1">
          {category.description}
        </p>
        <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-navy-700 group-hover:text-brand-600 transition-colors">
          Ver productos
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
