import { promotions } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BookButton } from "@/components/Button";
import { GlyphIcon } from "@/components/Icons";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = buildMetadata({
  title: "Promotions",
  description: "Seasonal offers and thoughtful extras: a first-visit treat, a mani + pedi combo and a refer-a-friend reward.",
  path: "/promotions",
});

export default function PromotionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Promotions"
        title={
          <>
            Little <em>indulgences</em>
          </>
        }
        intro="A few thoughtful ways to enjoy a little more for a little less. Offers shown are placeholders."
      />
      <section className="section" aria-label="Current offers">
        <div className="container-x">
          <ul className="grid gap-8 lg:grid-cols-3">
            {promotions.map((p, i) => (
              <Reveal as="li" key={p.id} delay={i * 100} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-gold/40 bg-ivory p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift md:p-10">
                  <div aria-hidden className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blush transition-transform duration-700 group-hover:scale-125" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-ivory text-rose">
                    <GlyphIcon name={p.icon} className="h-7 w-7" />
                  </span>
                  <p className="eyebrow relative mt-8">{p.tag}</p>
                  <h2 className="display-md relative mt-3 text-ink">{p.title}</h2>
                  <p className="relative mt-5 font-display text-6xl font-light italic leading-none text-rose md:text-7xl">{p.highlight}</p>
                  <div className="hairline my-7" />
                  <p className="relative flex-1 leading-relaxed text-muted">{p.text}</p>
                  <p className="relative mt-5 text-xs text-muted">{p.fine}</p>
                  <BookButton className="relative mt-8 w-full">Book now</BookButton>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
