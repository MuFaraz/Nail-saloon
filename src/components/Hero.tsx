import { images, reviewSummary, site } from "@/config/site";
import { BookButton, Button } from "./Button";
import { SalonImage } from "./SalonImage";
import { Stars } from "./Stars";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory" aria-labelledby="hero-title">
      {/* soft blush wash + giant arch outline */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-blush/60 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sand blur-3xl" />
      </div>

      <div className="container-x relative grid items-center gap-14 pb-20 pt-10 md:pb-28 md:pt-16 lg:min-h-[calc(100svh-var(--header-h)-2.25rem)] lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="hero-in eyebrow" style={{ "--i": 0 } as React.CSSProperties}>
            Nail salon &amp; spa · Houston
          </p>
          <h1 id="hero-title" className="display-xl mt-6 text-ink">
            <span className="hero-in block" style={{ "--i": 1 } as React.CSSProperties}>
              Where every
            </span>
            <span className="hero-in block" style={{ "--i": 2 } as React.CSSProperties}>
              detail <em>shines.</em>
            </span>
          </h1>
          <p className="hero-in mt-7 max-w-md text-base leading-relaxed text-muted md:text-lg" style={{ "--i": 3 } as React.CSSProperties}>
            An unhurried, beautifully clean sanctuary for manicures, pedicures, waxing and lashes, where craft meets calm.
          </p>
          <div className="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--i": 4 } as React.CSSProperties}>
            <BookButton>Book an appointment</BookButton>
            <Button href="/services" variant="outline">
              View services
            </Button>
          </div>
          <div className="hero-in mt-10 flex items-center gap-4 text-sm text-muted" style={{ "--i": 5 } as React.CSSProperties}>
            <span className="hairline w-12" aria-hidden />
            <span>{site.announcement}</span>
          </div>
        </div>

        {/* Arch image composition */}
        <div className="hero-in relative mx-auto w-full max-w-[34rem] lg:col-span-6 lg:max-w-none" style={{ "--i": 2 } as React.CSSProperties}>
          <div className="relative mx-auto aspect-[10/11] w-full max-w-[34rem] lg:ml-auto">
            <span aria-hidden className="absolute left-[4%] top-[2%] h-[34%] w-[34%] rounded-full border border-gold/60" />
            <span aria-hidden className="absolute left-[8%] top-[6%] h-[34%] w-[34%] rounded-full border border-gold/30" />

            <SalonImage
              image={images.heroMain}
              shape="arch"
              priority
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="absolute right-0 top-0 aspect-[3/4] w-[68%] shadow-[0_40px_80px_-40px_rgba(94,45,57,0.55)]"
              iconSize="h-16 w-16 md:h-20 md:w-20"
            />
            <SalonImage
              image={images.heroAccent}
              shape="circle"
              sizes="(min-width: 1024px) 16vw, 36vw"
              className="absolute bottom-[9%] left-0 aspect-square w-[40%] border-[6px] border-ivory shadow-soft"
              iconSize="h-9 w-9 md:h-12 md:w-12"
            />

            <div className="float-slow absolute bottom-0 right-[3%] w-[58%] max-w-[17rem] rounded-2xl border border-gold/30 bg-ivory/95 p-4 shadow-lift backdrop-blur md:p-5">
              <Stars />
              <p className="mt-2 font-display text-2xl leading-tight text-rose-deep md:text-[1.7rem]">
                {reviewSummary.rating} <span className="text-gold">★</span> from {reviewSummary.count} happy clients
              </p>
              <p className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-gold-deep">Placeholder rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
