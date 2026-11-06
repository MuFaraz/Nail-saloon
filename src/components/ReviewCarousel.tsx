"use client";

import { useRef, useState } from "react";
import { reviews } from "@/config/site";
import { Stars } from "./Stars";
import { ChevronIcon, QuoteIcon } from "./Icons";

export function ReviewCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = (card?.getBoundingClientRect().width ?? 320) + 24;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = (card?.getBoundingClientRect().width ?? 320) + 24;
    setIndex(Math.min(reviews.length - 1, Math.round(el.scrollLeft / step)));
  };

  return (
    <div>
      <ul
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Client reviews"
        className="no-scrollbar -mb-8 mr-[calc(50%-50vw)] flex snap-x snap-mandatory gap-6 overflow-x-auto pb-12 pr-[calc(50vw-50%)]"
      >
        {reviews.map((r, i) => (
          <li
            key={r.name}
            className="relative flex w-[86%] shrink-0 snap-start flex-col rounded-[2rem] border border-gold/30 bg-ivory p-7 shadow-soft sm:w-[26rem] md:p-9"
            aria-label={`Review ${i + 1} of ${reviews.length}`}
          >
            <QuoteIcon className="h-8 w-10 text-blush" />
            <blockquote className="mt-5 flex-1 font-display text-[1.45rem] font-normal italic leading-snug text-ink md:text-[1.6rem]">
              {r.text}
            </blockquote>
            <div className="mt-7 flex items-center justify-between border-t border-gold/30 pt-5">
              <div>
                <p className="text-sm font-medium text-ink">{r.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gold-deep">{r.service}</p>
              </div>
              <Stars />
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex flex-1 items-center gap-4">
          <span className="font-display text-lg text-rose-deep" aria-live="polite">
            0{index + 1} <span className="text-gold">/</span> 0{reviews.length}
          </span>
          <span className="relative h-px max-w-48 flex-1 bg-gold/30" aria-hidden>
            <span
              className="absolute inset-y-0 left-0 bg-rose transition-all duration-500"
              style={{ width: `${((index + 1) / reviews.length) * 100}%` }}
            />
          </span>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="grid h-12 w-12 place-items-center rounded-full border border-rose/50 text-rose transition-colors duration-300 hover:bg-rose hover:text-ivory"
          >
            <ChevronIcon className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="grid h-12 w-12 place-items-center rounded-full border border-rose/50 text-rose transition-colors duration-300 hover:bg-rose hover:text-ivory"
          >
            <ChevronIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
