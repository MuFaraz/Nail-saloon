"use client";

import { useEffect, useRef } from "react";
import type { GalleryItem } from "@/config/site";
import { SalonImage } from "./SalonImage";
import { ChevronIcon, CloseIcon } from "./Icons";

const aspectClass = {
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
} as const;

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null && items[index];

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      document.body.style.overflow = "hidden";
    }
    if (!open && d.open) d.close();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onIndex]);

  const item = index !== null ? items[index] : undefined;
  const btn =
    "grid h-12 w-12 place-items-center rounded-full border border-ivory/40 bg-ink/40 text-ivory backdrop-blur transition-colors duration-300 hover:bg-ivory hover:text-rose-deep";

  return (
    <dialog
      ref={ref}
      aria-label="Image viewer"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-4 backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
    >
      {item && index !== null && (
        <figure className="relative mx-auto flex flex-col items-center" style={{ animation: "scale-in .45s cubic-bezier(.2,.7,.2,1) both" }}>
          <div className="w-[min(88vw,calc(70svh*0.8))]">
            <SalonImage
              key={item.id}
              image={item.image}
              shape="rounded"
              zoom={false}
              sizes="90vw"
              className={`w-full ${aspectClass[item.aspect === "wide" ? "wide" : "portrait"]} shadow-lift`}
              iconSize="h-20 w-20"
            />
          </div>
          <figcaption className="mt-5 max-w-md text-center text-ivory">
            <p className="font-display text-2xl italic">{item.image.alt}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-ivory/70">
              {item.category} · {index + 1} / {items.length}
            </p>
          </figcaption>
          <div className="absolute -top-1 right-0 flex translate-y-[-120%] gap-3 sm:translate-y-0 sm:right-[-4rem] sm:top-0">
            <button type="button" onClick={onClose} aria-label="Close image viewer" className={btn} autoFocus>
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-6 flex gap-4 sm:mt-0">
            <button
              type="button"
              onClick={() => onIndex((index - 1 + items.length) % items.length)}
              aria-label="Previous image"
              className={`${btn} sm:absolute sm:left-[-4.5rem] sm:top-1/2 sm:-translate-y-1/2`}
            >
              <ChevronIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => onIndex((index + 1) % items.length)}
              aria-label="Next image"
              className={`${btn} sm:absolute sm:right-[-4.5rem] sm:top-1/2 sm:-translate-y-1/2`}
            >
              <ChevronIcon className="h-5 w-5" />
            </button>
          </div>
        </figure>
      )}
    </dialog>
  );
}
