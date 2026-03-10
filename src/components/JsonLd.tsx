type OrganizationProps = { type: "organization" };
type LocalBusinessProps = { type: "localBusiness" };
type ProductProps = {
  type: "product";
  name: string;
  description: string;
  image: string;
  url: string;
};
type BreadcrumbItem = { name: string; url: string };
type BreadcrumbProps = { type: "breadcrumb"; items: BreadcrumbItem[] };

type JsonLdProps =
  | OrganizationProps
  | LocalBusinessProps
  | ProductProps
  | BreadcrumbProps;

function buildSchema(props: JsonLdProps): object {
  switch (props.type) {
    case "organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Textil Cabrera SRL",
        url: "https://textilcabrera.com.uy",
        logo: "https://textilcabrera.com.uy/images/logo.png",
        foundingDate: "1989",
        email: "tcc@adinet.com.uy",
        sameAs: ["https://www.instagram.com/textilcabrera.uy"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+598-2288-5630",
          contactType: "customer service",
          availableLanguage: "Spanish",
        },
      };

    case "localBusiness":
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Textil Cabrera SRL",
        url: "https://textilcabrera.com.uy",
        telephone: "+598-2288-5630",
        email: "tcc@adinet.com.uy",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ruta 8 Km 28, Cno. Vega Helguera, Calle Edipo S/N",
          addressLocality: "Barros Blancos",
          addressRegion: "Canelones",
          addressCountry: "UY",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -34.736257,
          longitude: -55.9844137,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        },
        sameAs: ["https://www.instagram.com/textilcabrera.uy"],
      };

    case "product":
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: props.name,
        description: props.description,
        image: `https://textilcabrera.com.uy${props.image}`,
        url: props.url,
        brand: {
          "@type": "Brand",
          name: "Textil Cabrera",
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "UYU",
          areaServed: {
            "@type": "Country",
            name: "Uruguay",
          },
          seller: {
            "@type": "Organization",
            name: "Textil Cabrera SRL",
          },
        },
      };

    case "breadcrumb":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: props.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
  }
}

export default function JsonLd(props: JsonLdProps) {
  const schema = buildSchema(props);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
