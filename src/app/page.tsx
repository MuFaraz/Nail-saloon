import Link from "next/link";
import { fullAddress, images, reasons, reviewSummary, services, site } from "@/config/site";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SalonImage } from "@/components/SalonImage";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewCarousel } from "@/components/ReviewCarousel";
import { GalleryGrid } from "@/components/GalleryGrid";
import { MapEmbed } from "@/components/MapEmbed";
import { HoursList } from "@/components/HoursList";
import { CtaBanner } from "@/components/CtaBanner";
import { BookButton, Button } from "@/components/Button";
import { gallery } from "@/config/site";
import { CheckIcon, ClockIcon, GlyphIcon, MailIcon, PhoneIcon, PinIcon, StarIcon } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Walk-ins & appointments strip */}
      <section aria-label="Walk-ins and appointments" className="border-y border-gold/40 bg-ivory">
        <div className="container-x grid divide-gold/30 py-2 md:grid-cols-3 md:divide-x">
          {[
            { icon: "hand", title: "Walk-ins welcome", text: "Drop by any day and we will do our best to seat you right away." },
            { icon: "sparkle", title: "Appointments preferred", text: "Reserve online to guarantee your time, especially on weekends." },
            { icon: "flower", title: "Open daily", text: `Mon–Sat 10am–7pm · Sun 11am–5pm. Tea on arrival.` },
          ].map((i) => (
            <div key={i.title} className="flex items-start gap-5 py-7 md:px-8 md:first:pl-0 md:last:pr-0">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 text-rose">
                <GlyphIcon name={i.icon as "hand"} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">{i.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section overflow-hidden" aria-label="About us">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div className="relative pb-16 pr-10 sm:pr-14">
              <SalonImage image={images.aboutMain} shape="arch" className="aspect-[3/4] w-full shadow-lift" sizes="(min-width:1024px) 36vw, 80vw" iconSize="h-20 w-20" />
              <SalonImage
                image={images.aboutAccent}
                shape="rounded"
                className="absolute bottom-0 right-0 aspect-square w-[46%] border-[6px] border-ivory shadow-soft"
                sizes="20vw"
              />
              <span aria-hidden className="absolute -left-4 top-1/3 hidden h-28 w-28 rounded-full border border-gold/50 sm:block" />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title={
                <>
                  A quieter kind of <em>luxury</em>
                </>
              }
            />
            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-ink/90">
                {site.name} was imagined as a place to slow down. Soft light, thoughtful details and a team who treats every nail as a small work of art.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We pair meticulous technique with premium products and a spotless, serene space, so you leave not only with beautiful nails, but with the feeling of having been truly looked after.
              </p>
              <ul className="mt-8 space-y-3">
                {["Hospital-grade sanitation, every guest, every time", "Premium, long-wear and gentle formulas", "Tea, quiet music and zero rush"].map((t) => (
                  <li key={t} className="flex items-center gap-4 text-ink">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blush text-rose">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <BookButton />
                <Link href="/services" className="link-line">
                  Explore services
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Service categories */}
      <section className="section" aria-label="Services">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our services"
            title={
              <>
                Crafted <em>care</em>, from fingertip to toe
              </>
            }
            intro="Four signature collections, each delivered with patience, precision and a little ceremony."
          />
          <ul className="mt-20 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((c, i) => (
              <Reveal as="li" key={c.id} delay={i * 90}>
                <ServiceCard category={c} index={i} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-blush/45" aria-label="Why choose us">
        <div className="container-x">
          <SectionHeading eyebrow="Why Maison Belle" title={<>The little things, <em>done beautifully</em></>} />
          <ul className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-gold/40 bg-gold/30 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 80} className="bg-ivory p-8 md:p-10">
                <span className="font-display text-sm tracking-[0.3em] text-gold-deep">0{i + 1}</span>
                <span className="mt-5 grid h-14 w-14 place-items-center rounded-full bg-blush text-rose">
                  <GlyphIcon name={r.icon} className="h-7 w-7" />
                </span>
                <h3 className="display-md mt-6 text-ink">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{r.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section className="section overflow-hidden" aria-label="Reviews">
        <div className="container-x">
          <SectionHeading
            eyebrow="Kind words"
            title={
              <>
                Loved by our <em>guests</em>
              </>
            }
            intro={
              <span className="inline-flex flex-wrap items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1 text-gold">
                  <StarIcon className="h-5 w-5" />
                </span>
                {reviewSummary.rating} average from {reviewSummary.count} clients <span className="text-sm">(placeholder figures)</span>
              </span>
            }
          />
          <Reveal className="mt-14">
            <ReviewCarousel />
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section bg-sand/70 pb-28 md:pb-40" aria-label="Gallery preview">
        <div className="container-x">
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                A glimpse of our <em>work</em>
              </>
            }
            intro="Soft nudes, glossy classics and delicate nail art. Placeholder imagery shown here."
          />
          <Reveal className="mt-16">
            <GalleryGrid variant="preview" items={gallery.slice(0, 6)} />
          </Reveal>
          <div className="mt-20 text-center md:mt-24">
            <Button href="/gallery" variant="outline">
              View full gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Contact + map */}
      <section className="section" aria-label="Visit us">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Visit us"
              title={
                <>
                  Come in, <em>unwind</em>
                </>
              }
            />
            <Reveal delay={100} className="mt-10 space-y-7">
              <div className="flex gap-5">
                <PinIcon className="mt-1 h-6 w-6 shrink-0 text-rose" />
                <div>
                  <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-gold-deep">Address</h3>
                  <p className="mt-1 text-lg text-ink">{fullAddress}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <PhoneIcon className="mt-1 h-6 w-6 shrink-0 text-rose" />
                <div>
                  <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-gold-deep">Call or email</h3>
                  <p className="mt-1 text-lg text-ink">
                    <a href={`tel:${site.phone.tel}`} className="hover:text-rose">{site.phone.display}</a>
                  </p>
                  <p className="text-ink">
                    <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-rose">
                      <MailIcon className="h-4 w-4" /> {site.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <ClockIcon className="mt-1 h-6 w-6 shrink-0 text-rose" />
                <div className="w-full max-w-xs">
                  <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-gold-deep">Hours</h3>
                  <div className="mt-3">
                    <HoursList />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <BookButton />
                <Button
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                  variant="outline"
                >
                  Directions
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-7">
            <MapEmbed className="h-full min-h-[22rem] md:min-h-[32rem]" />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
