import Link from "next/link";
import { posts, formatDate } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SalonImage } from "@/components/SalonImage";
import { ArrowIcon } from "@/components/Icons";

export const metadata = buildMetadata({
  title: "Journal",
  description: "Nail care, spa rituals and beauty notes from the team: practical advice for beautiful hands, feet and lashes.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="The journal"
        title={
          <>
            Notes on <em>beauty</em> &amp; care
          </>
        }
        intro="Advice, rituals and small luxuries from our team. Sample articles for the demo."
      />
      <section className="section" aria-label="Articles">
        <div className="container-x">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid items-center gap-8 overflow-hidden rounded-[2rem] border border-gold/40 bg-ivory p-4 shadow-soft transition-shadow duration-500 hover:shadow-lift md:grid-cols-2 md:gap-14 md:p-6"
            >
              <SalonImage image={featured.image} shape="rounded" className="aspect-[4/3] w-full md:aspect-[5/4]" sizes="(min-width:768px) 45vw, 90vw" iconSize="h-20 w-20" />
              <div className="px-2 pb-4 md:pr-8">
                <p className="eyebrow">{featured.category} · Featured</p>
                <h2 className="display-lg mt-4 text-ink">{featured.title}</h2>
                <p className="mt-4 text-muted md:text-lg">{featured.excerpt}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-gold-deep">
                  {formatDate(featured.date)} · {featured.readTime}
                </p>
                <span className="link-line mt-6 inline-flex items-center gap-3">
                  Read article <ArrowIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>

          <ul className="mt-12 grid gap-10 md:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 100}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <SalonImage image={p.image} shape="rounded" className="aspect-[4/3] w-full" sizes="(min-width:768px) 45vw, 90vw" iconSize="h-16 w-16" />
                  <p className="eyebrow mt-6">{p.category}</p>
                  <h2 className="display-md mt-3 text-ink transition-colors duration-300 group-hover:text-rose">{p.title}</h2>
                  <p className="mt-3 text-muted">{p.excerpt}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-gold-deep">
                    {formatDate(p.date)} · {p.readTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
