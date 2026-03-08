/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' fonts.googleapis.com;
  font-src 'self' fonts.gstatic.com;
  img-src 'self' data:;
  frame-src maps.google.com www.google.com;
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`.replace(/\n/g, " ").trim();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'textilcabrera.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Identidad y tipo
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1" },

          // HTTPS forzado (1 año + preload)
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },

          // Control de recursos
          { key: "Content-Security-Policy", value: ContentSecurityPolicy },

          // Privacidad y referrer
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // Deshabilitar APIs del navegador no usadas
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
