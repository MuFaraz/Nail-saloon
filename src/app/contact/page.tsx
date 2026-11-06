import { fullAddress, site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { HoursList } from "@/components/HoursList";
import { BookButton, Button } from "@/components/Button";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, socialIcons } from "@/components/Icons";

export const metadata = buildMetadata({
  title: "Contact & Location",
  description: `Visit ${site.name} at ${fullAddress}, call ${site.phone.display} or send us a message.`,
  path: "/contact",
});

export default function ContactPage() {
  const rows = [
    { icon: PinIcon, label: "Address", body: <p>{fullAddress}</p> },
    {
      icon: PhoneIcon,
      label: "Phone",
      body: (
        <a href={`tel:${site.phone.tel}`} className="hover:text-rose">
          {site.phone.display}
        </a>
      ),
    },
    {
      icon: MailIcon,
      label: "Email",
      body: (
        <a href={`mailto:${site.email}`} className="break-all hover:text-rose">
          {site.email}
        </a>
      ),
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Say <em>hello</em>
          </>
        }
        intro="Questions, special requests or group bookings? Send a note or simply walk in. We would love to see you."
      />
      <section className="section" aria-label="Contact details">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="display-md text-ink">Find us</h2>
            <ul className="mt-8 space-y-7">
              {rows.map((r) => (
                <li key={r.label} className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 text-rose">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-gold-deep">{r.label}</h3>
                    <div className="mt-1 text-lg text-ink">{r.body}</div>
                  </div>
                </li>
              ))}
              <li className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 text-rose">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div className="w-full max-w-xs">
                  <h3 className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-gold-deep">Hours</h3>
                  <div className="mt-3">
                    <HoursList />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="mt-9 flex gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcons[s.name as keyof typeof socialIcons];
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.shortName} on ${s.name}`}
                      className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 text-rose transition-all duration-500 hover:-translate-y-0.5 hover:bg-rose hover:text-ivory"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <BookButton />
              <Button href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`} variant="outline">
                Directions
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <h2 className="display-md mb-8 text-ink">Send a message</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <section className="pb-20 md:pb-28" aria-label="Map">
        <div className="container-x">
          <MapEmbed className="h-[26rem] md:h-[30rem]" />
        </div>
      </section>
    </>
  );
}
