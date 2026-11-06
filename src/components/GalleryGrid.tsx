"use client";

import { useState } from "react";
import { gallery, galleryCategories, type GalleryCategory, type GalleryItem } from "@/config/site";
import { SalonImage } from "./SalonImage";
import { Lightbox } from "./Lightbox";

const aspectClass = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4.4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
} as const;

type Filter = "All" | GalleryCategory;

export function GalleryGrid({
  variant = "full",
  items = gallery,
}: {
  variant?: "full" | "preview";
  items?: GalleryItem[];
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<number | null>(null);

  const visible = variant === "preview" ? items : items.filter((g) => filter === "All" || g.category === filter);
  const filters: Filter[] = ["All", ...galleryCategories];

  const trigger = (g: GalleryItem, i: number, aspect: string, shape: "rounded" | "arch-soft") => (
    <button
      type="button"
      onClick={() => setOpen(i)}
      aria-label={`View larger: ${g.image.alt}`}
      className="group block w-full rounded-[1.5rem] text-left"
    >
      <SalonImage
        image={g.image}
        shape={shape}
        className={`w-full ${aspect} shadow-[0_18px_40px_-26px_rgba(94,45,57,0.5)] transition-shadow duration-500 group-hover:shadow-lift`}
        sizes="(min-width: 1024px) 28vw, 48vw"
        iconSize="h-10 w-10 md:h-14 md:w-14"
      />
    </button>
  );

  return (
    <div>
      {variant === "full" && (
        <div role="group" aria-label="Filter gallery" className="mb-10 flex flex-wrap justify-center gap-2 md:mb-14 md:gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-6 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-all duration-500 ${
                filter === f ? "border-rose bg-rose text-ivory" : "border-gold/50 text-ink hover:border-rose hover:text-rose"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      {variant === "full" ? (
        <ul key={filter} className="fade-in columns-2 gap-4 md:columns-3 md:gap-6">
          {visible.map((g, i) => (
            <li key={g.id} className="mb-4 break-inside-avoid md:mb-6">
              {trigger(g, i, aspectClass[g.aspect], "rounded")}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
          {visible.map((g, i) => (
            <li key={g.id} className={i % 3 === 1 ? "lg:translate-y-10" : ""}>
              {trigger(g, i, "aspect-[4/5]", i % 3 === 1 ? "arch-soft" : "rounded")}
            </li>
          ))}
        </ul>
      )}

      <Lightbox items={visible} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </div>
  );
}
