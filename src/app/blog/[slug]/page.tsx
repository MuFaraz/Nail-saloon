import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, formatDate } from "@/data/blog";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { SalonImage } from "@/components/SalonImage";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ArrowIcon } from "@/components/Icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, type: "article" });
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <article>
        <header className="relative overflow-hidden bg-blush/55">
          <div className="container-x relative py-14 text-center md:py-24">
            <Link href="/blog" className="link-line inline-flex items-center gap-3">
              <ArrowIcon className="h-4 w-4 rotate-180" /> All articles
            </Link>
            <p className="eyebrow eyebrow-center mt-8">{post.category}</p>
            <h1 className="display-lg hero-in mx-auto mt-5 max-w-3xl !text-[clamp(2.4rem,6.5vw,4.6rem)] text-ink">{post.title}</h1>
            <p className="mt-6 text-xs uppercase tracking-[0.24em] text-gold-deep">
              {formatDate(post.date)} · {post.readTime} · {site.shortName}
            </p>
          </div>
          <div className="hairline" />
        </header>

        <div className="container-x -mt-2">
          <SalonImage
            image={post.image}
            shape="rounded"
            className="mx-auto mt-10 aspect-[16/10] w-full max-w-4xl shadow-lift md:mt-14"
            sizes="(min-width:1024px) 900px, 95vw"
            priority
            iconSize="h-20 w-20"
          />
        </div>

        <div className="container-x py-14 md:py-20">
          <div className="mx-auto max-w-[40rem] text-[1.075rem] leading-[1.85] text-ink/90 md:text-lg">
            {post.body.map((b, i) => {
              if (b.type === "h2")
                return (
                  <h2 key={i} className="display-md mb-4 mt-12 text-ink">
                    {b.text}
                  </h2>
                );
              if (b.type === "quote")
                return (
                  <blockquote key={i} className="my-10 border-y border-gold/50 py-8 text-center font-display text-3xl font-light italic leading-snug text-rose-deep md:text-4xl">
                    “{b.text}”
                  </blockquote>
                );
              if (b.type === "list")
                return (
                  <ul key={i} className="my-6 space-y-3">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-4">
                        <span aria-hidden className="mt-[0.85em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p
                  key={i}
                  className={`mb-6 ${i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-rose" : ""}`}
                >
                  {b.text}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      <section className="bg-sand/70 py-16 md:py-24" aria-label="More articles">
        <div className="container-x">
          <h2 className="display-md text-center text-ink">Keep reading</h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
            {more.map((p) => (
              <Reveal as="li" key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <SalonImage image={p.image} shape="rounded" className="aspect-[4/3] w-full" sizes="(min-width:768px) 40vw, 90vw" />
                  <p className="eyebrow mt-5">{p.category}</p>
                  <h3 className="display-md mt-2 text-ink transition-colors group-hover:text-rose">{p.title}</h3>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, "\\u003c") }} />
    </>
  );
}
