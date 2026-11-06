import { priceFrom, services } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { CategoryNav } from "@/components/CategoryNav";
import { PriceList } from "@/components/PriceList";
import { SalonImage } from "@/components/SalonImage";
import { Reveal } from "@/components/Reveal";
import { BookButton } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { GlyphIcon } from "@/components/Icons";

export const metadata = buildMetadata({
  title: "Services & Prices",
  description: "Explore our manicure, pedicure, waxing and eyelash menu with transparent prices. Walk-ins welcome.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & prices"
        title={
          <>
            The <em>menu</em>
          </>
        }
        intro="Transparent pricing for every treatment. All prices are placeholders and may vary by length, design and artist."
      />
      <CategoryNav items={services.map((s) => ({ id: s.id, name: s.name }))} />

      {services.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          aria-labelledby={`${cat.id}-title`}
          className={`scroll-mt-[calc(var(--header-h)+4.5rem)] py-16 md:py-24 ${i % 2 ? "bg-blush/35" : ""}`}
        >
          <div className="container-x grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className={`lg:col-span-5 lg:sticky lg:top-[calc(var(--header-h)+7rem)] ${i % 2 ? "lg:order-2 lg:col-start-8" : ""}`}>
              <SalonImage
                image={cat.image}
                shape="arch"
                className="mx-auto aspect-[3/4] w-full max-w-sm shadow-lift lg:max-w-none"
                sizes="(min-width:1024px) 38vw, 80vw"
                iconSize="h-20 w-20"
              />
            </Reveal>
            <div className={`lg:col-span-7 ${i % 2 ? "lg:order-1 lg:col-start-1" : ""}`}>
              <Reveal>
                <span className="eyebrow">0{i + 1} · From ${priceFrom(cat)}</span>
                <div className="mt-5 flex items-center gap-4">
                  <h2 id={`${cat.id}-title`} className="display-lg text-ink">
                    {cat.name}
                  </h2>
                  <GlyphIcon name={cat.icon} className="h-9 w-9 text-gold" />
                </div>
                <p className="mt-4 max-w-xl text-muted md:text-lg">{cat.blurb}</p>
                <div className="hairline mt-8" />
              </Reveal>
              <Reveal delay={80}>
                <PriceList items={cat.items} />
                <div className="hairline mb-8" />
                <BookButton variant="outline">Book {cat.name}</BookButton>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner />
    </>
  );
}
