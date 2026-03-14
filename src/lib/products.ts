export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  formats: string[];
  image: string;
  gallery: string[];
  galleryLabels?: string[];
  featured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "estopas",
    name: "Estopas",
    slug: "estopas",
    description:
      "Estopas de algodón y mezcla algodón-poliéster para limpieza industrial, pulido y limpiezas delicadas. Disponibles en distintas composiciones y formatos.",
    image: "/images/estopa-color.jpg",
  },
  {
    id: "trapos",
    name: "Trapos",
    slug: "trapos",
    description:
      "Recortes de tejido recuperado para limpieza industrial. Disponibles en variante blanca (alto porcentaje de algodón) y de color, en múltiples formatos.",
    image: "/images/trapo-color.jpg",
  },
  {
    id: "trapos-no-tejidos",
    name: "Trapos No Tejidos",
    slug: "trapos-no-tejidos",
    description:
      "Paños de tejido sin tejer (nonwoven) de excelente absorción, disponibles en funda y en cajas de 300 unidades. También bobinas de papel de celulosa.",
    image: "/images/trapo-no-tejido.jpg",
  },
  {
    id: "guatas",
    name: "Guatas",
    slug: "guatas",
    description:
      "Guata siliconada de excelente rebote para relleno de almohadas, peluches y tapicería. Guata en manta ideal para confección y manualidades.",
    image: "/images/guata-siliconada.jpg",
  },
];

export const products: Product[] = [

  // ── ESTOPAS ──────────────────────────────────────────────────────────
  {
    id: "estopa-blanca-a",
    name: "Estopa Blanca A",
    slug: "estopa-blanca-a",
    category: "Estopas",
    categorySlug: "estopas",
    shortDescription: "100% algodón, ideal para pulido o limpiezas delicadas.",
    description:
      "Estopa fabricada con 100% algodón. Su pureza de fibra la hace ideal para pulido de superficies y limpiezas delicadas donde se requiere máxima suavidad y ausencia de residuos sintéticos.",
    formats: ["x1kg en funda de 25kg"],
    image: "/images/estopa-blanca-a.jpg",
    gallery: [],
    featured: true,
  },
  {
    id: "estopa-blanca-b",
    name: "Estopa Blanca B",
    slug: "estopa-blanca-b",
    category: "Estopas",
    categorySlug: "estopas",
    shortDescription: "Mezcla algodón-poliéster, para limpiezas varias.",
    description:
      "Estopa de mezcla algodón-poliéster. Versátil y económica, apta para limpiezas industriales varias. Buena absorción y resistencia al uso.",
    formats: ["x1kg en funda de 25kg"],
    image: "/images/estopa-blanca-25kg.jpg",
    gallery: ["/images/estopa-blanca.jpg", "/images/estopa-a.jpg"],
    galleryLabels: ["x1kg en funda de 25kg", ""],
    featured: false,
  },
  {
    id: "estopa-color",
    name: "Estopa de Color",
    slug: "estopa-color",
    category: "Estopas",
    categorySlug: "estopas",
    shortDescription: "Mezcla algodón-poliéster, para limpiezas varias.",
    description:
      "Estopa de mezcla algodón-poliéster en colores variados. Ideal para limpieza general en talleres, plantas industriales y mantenimiento. Alta absorción de aceites y grasas.",
    formats: ["x1kg en funda de 25kg"],
    image: "/images/estopa-color-grande.jpg",
    gallery: ["/images/estopa-color.jpg", "/images/estopa-color-dex.jpg"],
    galleryLabels: ["x1kg en funda de 25kg", ""],
    featured: false,
  },
  {
    id: "funda-mixta",
    name: "Funda Mixta de Estopa",
    slug: "funda-mixta",
    category: "Estopas",
    categorySlug: "estopas",
    shortDescription:
      "Combinación de los tres tipos de estopa en una sola funda de 25kg.",
    description:
      "Funda que combina los tres tipos de estopa: Estopa Blanca A, Estopa Blanca B y Estopa de Color. Permite disponer de distintas calidades en un solo pedido, ideal para talleres con múltiples necesidades de limpieza.",
    formats: [
      "9kg — Estopa Blanca A (100% algodón)",
      "8kg — Estopa Blanca B (mezcla algodón-poliéster)",
      "8kg — Estopa de Color (mezcla algodón-poliéster)",
      "Presentación: funda de 25kg",
    ],
    image: "/images/estopa-mixta.jpg",
    gallery: [],
    featured: false,
  },

  // ── TRAPOS ──────────────────────────────────────────────────────────
  {
    id: "trapos-blancos",
    name: "Trapos Blancos",
    slug: "trapos-blancos",
    category: "Trapos",
    categorySlug: "trapos",
    shortDescription:
      "Recortes de tejido recuperado, alto porcentaje de algodón blanco/crema.",
    description:
      "Recortes de tejido recuperado que se destacan por su alto porcentaje de algodón blanco y crema. Excelente absorción, ideales para limpieza de maquinaria, superficies delicadas y tareas que requieren bajo riesgo de transferencia de color.",
    formats: ["x1kg en funda de 25kg", "Formato 10kg"],
    image: "/images/trapo-blanco.jpg",
    gallery: ["/images/trapo-blanco-10kg.jpg", "/images/trapo-blanco-25kg.jpg"],
    galleryLabels: ["Formato 10kg", "x1kg en funda de 25kg"],
    featured: false,
  },
  {
    id: "trapos-color",
    name: "Trapos de Color",
    slug: "trapos-color",
    category: "Trapos",
    categorySlug: "trapos",
    shortDescription:
      "Recortes de tejido recuperado, nivel de absorción medio/alto.",
    description:
      "Recortes de tejido recuperado en colores variados. Nivel de absorción medio/alto, aptos para limpieza general en plantas industriales, talleres y mantenimiento. Disponibles en múltiples formatos para adaptarse a distintos volúmenes de consumo.",
    formats: [
      "x5kg flejado de 20kg",
      "x1kg en funda de 20kg",
      "Formato 5kg",
      "Formato 10kg",
    ],
    image: "/images/trapo-color.jpg",
    gallery: [
      "/images/trapo-color-25kg.jpg",
      "/images/trapo-color-20kg.jpg",
      "/images/trapo-color-10kg.jpg",
      "/images/trapo-color-5kg.jpg",
      "/images/trapos-color.jpg",
    ],
    galleryLabels: [
      "x1kg en funda de 20kg",
      "x5kg flejado de 20kg",
      "Formato 10kg",
      "Formato 5kg",
      "",
    ],
    featured: true,
  },

  // ── TRAPOS NO TEJIDOS ─────────────────────────────────────────────────
  {
    id: "trapos-no-tejidos",
    name: "Trapos No Tejidos",
    slug: "trapos-no-tejidos-funda",
    category: "Trapos No Tejidos",
    categorySlug: "trapos-no-tejidos",
    shortDescription:
      "Paños de tejido sin tejer (nonwoven), excelente absorción.",
    description:
      "Paños fabricados con tejido sin tejer (nonwoven). Ofrecen excelente absorción y resistencia, aptos para limpieza en seco y húmedo. Su estructura no tejida garantiza durabilidad incluso ante el uso intensivo.",
    formats: ["Funda de 5kg"],
    image: "/images/trapo-no-tejido.jpg",
    gallery: [],
    featured: false,
  },
  {
    id: "panos-no-tejidos",
    name: "Paños No Tejidos",
    slug: "panos-no-tejidos",
    category: "Trapos No Tejidos",
    categorySlug: "trapos-no-tejidos",
    shortDescription:
      "Paños de tejido sin tejer (nonwoven), excelente absorción. En cajas de 300 unidades.",
    description:
      "Paños no tejidos (nonwoven) presentados en cajas de 300 unidades. Ideales para uso institucional, comercial o industrial donde se requiere alto volumen de paños descartables con excelente capacidad de absorción.",
    formats: ["5 cajas de 300 unidades c/u"],
    image: "/images/panos-tnt.jpg",
    gallery: ["/images/panos-tnt-caja.jpg"],
    galleryLabels: ["5 cajas de 300 unidades c/u"],
    featured: false,
  },
  {
    id: "bobinas-papel",
    name: "Bobinas de Papel",
    slug: "bobinas-papel",
    category: "Trapos No Tejidos",
    categorySlug: "trapos-no-tejidos",
    shortDescription: "Pasta de Celulosa. 2 Bobinas (4kg).",
    description:
      "Bobinas de papel de pasta de celulosa. Presentación de 2 bobinas por paquete con un peso total de 4kg. Aptas para limpieza industrial, absorción de líquidos y uso en sectores que requieren material desechable.",
    formats: ["2 Bobinas (4kg)"],
    image: "/images/bobinas-1.jpg",
    gallery: ["/images/bobinas-2.jpg", "/images/bobinas.jpg"],
    galleryLabels: ["2 Bobinas (4kg)", ""],
    featured: false,
  },

  // ── GUATAS ───────────────────────────────────────────────────────────
  {
    id: "guata-siliconada-5kg",
    name: "Guata Siliconada",
    slug: "guata-siliconada",
    category: "Guatas",
    categorySlug: "guatas",
    shortDescription:
      "Excelente rebote, ideal para relleno de almohadas, peluches, etc.",
    description:
      "Guata siliconada de excelente rebote. La fibra hueca con tratamiento de silicona mantiene el volumen y suavidad por más tiempo, evitando el apelmazamiento. Ideal para relleno de almohadas, peluches, almohadones y tapicería.",
    formats: ["Funda de 5kg"],
    image: "/images/guata-siliconada.jpg",
    gallery: [],
    featured: true,
  },
  {
    id: "guata-siliconada-2kg",
    name: "Guata Siliconada 2kg",
    slug: "guata-siliconada-2kg",
    category: "Guatas",
    categorySlug: "guatas",
    shortDescription:
      "Excelente rebote, ideal para relleno de almohadas, peluches, etc. Únicamente para reventa.",
    description:
      "Guata siliconada en presentación de 2kg. Mismas características de calidad y rebote que la versión de 5kg, presentada en formato más pequeño. Disponible únicamente para reventa.",
    formats: ["2kg (únicamente para reventa)"],
    image: "/images/guata-2kg.jpg",
    gallery: [],
    featured: false,
  },
  {
    id: "guata-en-manta",
    name: "Guata en Manta",
    slug: "guata-en-manta",
    category: "Guatas",
    categorySlug: "guatas",
    shortDescription:
      "Excelente calidad, ideal para confección y manualidades.",
    description:
      "Guata en formato manta continua de excelente calidad. Ideal para confección de ropa de cama, manualidades y tapicería. Se vende por rollo o por kilo, en tres gramajes disponibles para adaptarse a cada aplicación.",
    formats: [
      "Rollos 1,5m × 20m — peso aprox. 5kg",
      "Gramajes: 80g, 120g y 150g",
      "Venta por rollo o por kilo",
    ],
    image: "/images/guata-en-manta.jpg",
    gallery: [],
    featured: true,
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
