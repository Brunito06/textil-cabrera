"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-navy-700 shadow-sm">
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Textil Cabrera SRL"
              width={140}
              height={66}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-600"
                      : "text-gray-700 hover:text-brand-600"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-brand-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contacto"
              className="hidden md:inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Solicitar cotización
            </Link>

            <button
              className="md:hidden p-2 text-gray-700 hover:text-brand-600 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 text-sm font-medium border-l-2 transition-colors ${
                      isActive
                        ? "text-brand-600 border-brand-600 bg-brand-50"
                        : "text-gray-700 border-transparent hover:text-brand-600 hover:border-brand-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-4 pt-3">
                <Link
                  href="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="btn-navy w-full justify-center"
                >
                  Solicitar cotización
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
