import { MetadataRoute } from "next";
import { products, categories } from "@/lib/products";

// Single Date instance shared across all sitemap entries — computed once at
// module load instead of allocating 19 separate Date objects per request.
const LAST_MODIFIED = new Date();

const BASE = "https://textilcabrera.com.uy";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/productos`, lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/nosotros`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contacto`, lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE}/productos/${category.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE}/productos/${product.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
