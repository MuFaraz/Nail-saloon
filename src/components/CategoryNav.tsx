"use client";

import { useEffect, useState } from "react";

export function CategoryNav({ items }: { items: { id: string; name: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Service categories"
      className="sticky top-[var(--header-h)] z-30 border-y border-gold/30 bg-ivory/90 backdrop-blur-md"
    >
      <ul className="no-scrollbar container-x flex gap-2 overflow-x-auto py-3 md:justify-center md:gap-4">
        {items.map((i) => (
          <li key={i.id} className="shrink-0">
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "true" : undefined}
              className={`block rounded-full border px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-all duration-500 ${
                active === i.id
                  ? "border-rose bg-rose text-ivory"
                  : "border-gold/40 text-ink hover:border-rose hover:text-rose"
              }`}
            >
              {i.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
