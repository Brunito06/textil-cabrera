import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://textilcabrera.com"),
  title: {
    default: "Textil Cabrera | Estopas, Trapos Industriales y Guatas - Uruguay",
    template: "%s | Textil Cabrera",
  },
  description:
    "Textil Cabrera SRL - Fabricante uruguayo de estopas, trapos industriales, paños no tejidos y guatas desde 1989. Reciclaje textil y productos para limpieza industrial en Uruguay.",
  keywords: [
    "estopas Uruguay",
    "trapos industriales Uruguay",
    "guata siliconada",
    "trapos no tejidos",
    "TNT industrial",
    "reciclaje textil Uruguay",
    "limpieza industrial",
    "Textil Cabrera",
    "Barros Blancos",
    "Canelones",
  ],
  alternates: {
    canonical: "https://textilcabrera.com",
  },
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: "Textil Cabrera",
    url: "https://textilcabrera.com",
    title: "Textil Cabrera | Estopas, Trapos Industriales y Guatas - Uruguay",
    description:
      "Fabricante uruguayo de productos textiles industriales desde 1989. Estopas, trapos industriales, paños no tejidos y guatas.",
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630, alt: "Textil Cabrera" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <JsonLd type="organization" />
        <JsonLd type="localBusiness" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
