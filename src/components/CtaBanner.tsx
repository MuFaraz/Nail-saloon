import { site } from "@/config/site";
import { BookButton } from "./Button";
import { PhoneIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function CtaBanner({
  title = (
    <>
      Your moment of <em>calm</em> awaits.
    </>
  ),
  text = "Walk in or reserve your time. Either way, we will take beautiful care of you.",
}: {
  title?: React.ReactNode;
  text?: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-rose-deep text-ivory" aria-labelledby="cta-title">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/2 h-[28rem] w-[20rem] -translate-y-1/2 shape-arch border border-gold/50" />
        <div className="absolute -left-10 top-1/2 h-[28rem] w-[20rem] -translate-y-1/2 shape-arch border border-gold/25" />
        <div className="absolute -right-20 bottom-[-40%] h-[32rem] w-[32rem] rounded-full bg-rose/50 blur-3xl" />
      </div>
      <div className="container-x relative py-20 text-center md:py-28">
        <Reveal>
          <span className="eyebrow eyebrow-center">Book your visit</span>
          <h2 id="cta-title" className="display-lg mx-auto mt-6 max-w-2xl text-ivory">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-ivory/80 md:text-lg">{text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <BookButton variant="light" />
            <a href={`tel:${site.phone.tel}`} className="btn btn-ghost-light">
              <PhoneIcon className="h-4 w-4" /> {site.phone.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
