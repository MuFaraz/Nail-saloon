import Link from "next/link";
import { priceFrom, type ServiceCategory } from "@/config/site";
import { GlyphIcon, ArrowIcon } from "./Icons";
import { SalonImage } from "./SalonImage";

export function ServiceCard({ category, index }: { category: ServiceCategory; index: number }) {
  return (
    <Link
      href={`/services#${category.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-gold/30 bg-ivory p-3 shadow-[0_1px_0_rgba(184,147,90,0.2)] transition-all duration-500 hover:-translate-y-2 hover:border-gold/70 hover:shadow-lift"
    >
      <SalonImage
        image={category.image}
        shape="arch-soft"
        className="aspect-[4/4.4] w-full"
        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
      />
      <div className="relative flex flex-1 flex-col px-3 pb-4 pt-6">
        <span className="absolute -top-10 right-3 grid h-14 w-14 place-items-center rounded-full border border-gold/50 bg-ivory text-rose transition-colors duration-500 group-hover:bg-rose group-hover:text-ivory">
          <GlyphIcon name={category.icon} className="h-6 w-6" />
        </span>
        <span className="font-display text-5xl font-light leading-none text-gold/80 md:text-6xl">0{index + 1}</span>
        <h3 className="display-md mt-3 text-ink">{category.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{category.short}</p>
        <div className="mt-6 flex items-center justify-between border-t border-gold/30 pt-4 text-xs font-medium uppercase tracking-[0.22em]">
          <span className="text-gold-deep">From ${priceFrom(category)}</span>
          <span className="inline-flex items-center gap-2 text-rose transition-all duration-500 group-hover:gap-3">
            Explore <ArrowIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
