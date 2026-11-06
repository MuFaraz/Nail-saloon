import { site } from "@/config/site";

export function Wordmark({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className={`font-display text-[1.7rem] font-medium tracking-[0.04em] md:text-[2rem] ${light ? "text-ivory" : "text-rose-deep"}`}>
        {site.shortName}
      </span>
      <span className={`mt-1 text-[0.58rem] font-medium uppercase tracking-[0.5em] ${light ? "text-[#e2c58f]" : "text-gold-deep"}`}>
        {site.suffix}
      </span>
    </span>
  );
}
