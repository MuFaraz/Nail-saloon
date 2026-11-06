import { fullAddress, services, site } from "@/config/site";

const dayMap = (days: readonly string[]) => days.map((d) => `https://schema.org/${d}`);

/** schema.org NailSalon structured data — generated entirely from src/config/site.ts */
export function SalonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "@id": `${site.url}/#salon`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    telephone: site.phone.tel,
    email: site.email,
    priceRange: site.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.map.geo.lat, longitude: site.map.geo.lng },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`,
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap(h.days),
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: site.socials.map((s) => s.href).filter((h) => h.startsWith("http")),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((c) => ({
        "@type": "OfferCatalog",
        name: c.name,
        itemListElement: c.items.map((i) => ({
          "@type": "Offer",
          priceCurrency: "USD",
          price: i.price,
          itemOffered: { "@type": "Service", name: i.name },
        })),
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
