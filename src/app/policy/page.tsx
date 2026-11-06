import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { site } from "@/config/site";

export const metadata = buildMetadata({
  title: "Booking & Cancellation Policy",
  description: "How booking, cancellations and late arrivals work at our salon. Placeholder policy text.",
  path: "/policy",
});

const sections = [
  {
    id: "booking",
    title: "Booking",
    text: [
      "Appointments can be reserved online or by phone. Walk-ins are always welcome and seated in order of arrival, subject to availability.",
      "For groups of four or more, please call ahead so we can prepare a comfortable space for everyone.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation",
    text: [
      "We kindly ask for at least 24 hours’ notice if you need to cancel or reschedule, so that we can offer your time to another guest.",
      "Repeated late cancellations or missed appointments may require a deposit for future bookings.",
    ],
  },
  {
    id: "late",
    title: "Late arrival",
    text: [
      "We hold your appointment for 15 minutes. After that, your service may need to be shortened or rescheduled so that we can respect the guests who follow.",
      "If you are running behind, a quick call helps us do our best to accommodate you.",
    ],
  },
];

export default function PolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title={
          <>
            Our <em>policy</em>
          </>
        }
        intro="A few gentle guidelines that help us keep every visit calm and on time. This text is a placeholder."
      />
      <section className="section" aria-label="Policy">
        <div className="container-x">
          <div className="mx-auto max-w-3xl divide-y divide-gold/30">
            {sections.map((s, i) => (
              <Reveal key={s.id} className="py-10 first:pt-0 md:grid md:grid-cols-[8rem_1fr] md:gap-8">
                <span className="font-display text-6xl font-light leading-none text-gold/80">0{i + 1}</span>
                <div className="mt-3 md:mt-0">
                  <h2 id={s.id} className="display-md text-ink">
                    {s.title}
                  </h2>
                  {s.text.map((t) => (
                    <p key={t} className="mt-4 leading-relaxed text-muted md:text-lg">
                      {t}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
            <p className="pt-10 text-sm text-muted">
              Questions? Call us on{" "}
              <a href={`tel:${site.phone.tel}`} className="text-rose underline underline-offset-4">
                {site.phone.display}
              </a>{" "}
              and we will be happy to help.
            </p>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
