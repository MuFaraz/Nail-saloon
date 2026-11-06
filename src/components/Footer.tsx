import Link from "next/link";
import { fullAddress, site, services } from "@/config/site";
import { Wordmark } from "./Wordmark";
import { HoursList } from "./HoursList";
import { BookButton } from "./Button";
import { socialIcons } from "./Icons";

export function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-ink pb-24 text-ivory md:pb-0">
      <div className="hairline" />
      <div className="container-x pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Wordmark light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/75">
              A boutique nail salon &amp; spa devoted to quiet luxury, flawless detail and a calmer pace.
            </p>
            <ul className="mt-7 flex gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.name as keyof typeof socialIcons];
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.shortName} on ${s.name}`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-ivory/25 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-5">
            <h2 className="eyebrow !tracking-[0.3em] before:hidden">Explore</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {[...site.nav, { label: "Policy", href: "/policy" }].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-ivory/80 transition-colors hover:text-blush">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 border-t border-ivory/15 pt-6 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="text-ivory/80 transition-colors hover:text-blush">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow before:hidden">Opening hours</h2>
            <div className="mt-6">
              <HoursList dark />
            </div>
            <p className="mt-5 text-sm text-ivory/70">Walk-ins welcome. Appointments recommended on weekends.</p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="eyebrow before:hidden">Visit us</h2>
            <address className="mt-6 space-y-3 text-sm not-italic text-ivory/80">
              <p>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
              <p>
                <a href={`tel:${site.phone.tel}`} className="inline-block py-1.5 transition-colors hover:text-blush">
                  {site.phone.display}
                </a>
                <br />
                <a href={`mailto:${site.email}`} className="inline-block py-1.5 transition-colors hover:text-blush">
                  {site.email}
                </a>
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#e2c58f] underline decoration-gold/50 underline-offset-8 transition-colors hover:text-ivory"
              >
                Get directions
              </a>
            </address>
            <BookButton variant="light" size="sm" className="mt-7" />
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="pointer-events-none mt-14 select-none overflow-hidden text-center md:mt-20">
        <p
          data-text={site.shortName}
          className="font-display text-[clamp(3.6rem,17.5vw,17rem)] font-light italic leading-[0.85] tracking-[-0.02em] text-ivory/[0.07] before:content-[attr(data-text)]"
        />
      </div>

      <div className="border-t border-ivory/15">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/65 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-center">Demo design preview · All content, prices and reviews are placeholders.</p>
          <Link href="/policy" className="inline-block py-1.5 transition-colors hover:text-blush">
            Booking &amp; cancellation policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
