import type { ServiceItem } from "@/config/site";

export function PriceList({ items }: { items: ServiceItem[] }) {
  return (
    <ul className="divide-y divide-transparent">
      {items.map((item) => (
        <li key={item.name} className="py-4 md:py-5">
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-xl font-medium text-ink md:text-[1.6rem]">{item.name}</h3>
            <span className="leader" aria-hidden />
            <span className="font-display text-xl font-semibold text-rose md:text-2xl">${item.price}</span>
          </div>
          {(item.description || item.duration) && (
            <p className="mt-1 max-w-[34rem] pr-12 text-sm leading-relaxed text-muted">
              {item.duration && (
                <span className="mr-2 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-gold-deep">
                  {item.duration}
                </span>
              )}
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
