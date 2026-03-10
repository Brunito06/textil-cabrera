import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://textilcabrera.com.uy.uy/sitemap.xml",
    host: "https://textilcabrera.com.uy.uy",
  };
}
