import type { ReactNode } from "react";

/** Calm blush banner used at the top of every inner page. */
export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-blush/55">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 top-6 hidden h-[26rem] w-[19rem] shape-arch border border-gold/50 md:block" />
        <div className="absolute -right-8 top-12 hidden h-[26rem] w-[19rem] shape-arch border border-gold/30 md:block" />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-ivory/70 blur-3xl" />
      </div>
      <div className="container-x relative py-16 md:py-24 lg:py-28">
        <p className="hero-in eyebrow">{eyebrow}</p>
        <h1 className="display-xl hero-in mt-5 max-w-3xl !text-[clamp(2.8rem,8vw,5.5rem)] text-ink" style={{ "--i": 1 } as React.CSSProperties}>
          {title}
        </h1>
        {intro && (
          <p className="hero-in mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg" style={{ "--i": 2 } as React.CSSProperties}>
            {intro}
          </p>
        )}
      </div>
      <div className="hairline" />
    </section>
  );
}
