import Image from "next/image";
import type { ImageSpec, Tone, IconName } from "@/config/site";
import { GlyphIcon } from "./Icons";

export type Shape = "arch" | "arch-soft" | "rounded" | "pill" | "circle" | "square";

const shapeClass: Record<Shape, string> = {
  arch: "shape-arch",
  "arch-soft": "shape-arch-soft",
  rounded: "shape-rounded",
  pill: "shape-pill",
  circle: "shape-circle",
  square: "",
};

const toneStyle: Record<Tone, { bg: string; dark: boolean }> = {
  blush: { bg: "linear-gradient(160deg,#fbeeea 0%,#f3dcd9 55%,#e8c3c0 100%)", dark: false },
  ivory: { bg: "linear-gradient(160deg,#ffffff 0%,#f6ece4 60%,#ead9cd 100%)", dark: false },
  gold: { bg: "linear-gradient(160deg,#f1e2c4 0%,#dcc08c 55%,#c19b61 100%)", dark: false },
  mauve: { bg: "linear-gradient(160deg,#e6cbcd 0%,#c9a0a7 55%,#a97783 100%)", dark: true },
  rose: { bg: "linear-gradient(160deg,#a56270 0%,#7a3e4b 55%,#552632 100%)", dark: true },
};

const patternFor: Partial<Record<IconName, string>> = {
  bottle: "pat-lines",
  hand: "pat-lines",
  foot: "pat-dots",
  flower: "pat-dots",
  lash: "pat-grid",
  wax: "pat-grid",
  sparkle: "pat-dots",
  gem: "pat-lines",
};

type Props = {
  image: ImageSpec;
  shape?: Shape;
  /** Tailwind classes for size / aspect ratio, e.g. "aspect-[3/4] w-full" */
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** slow zoom when a parent/own `group` is hovered */
  zoom?: boolean;
  iconSize?: string;
};

/**
 * The only image primitive on the site.
 * - If `image.file` is set, it renders /public/images/<file> with next/image.
 * - Otherwise it renders an elegant gradient + pattern placeholder.
 * Alt text is always kept (role="img" + aria-label on the placeholder).
 */
export function SalonImage({
  image,
  shape = "rounded",
  className = "",
  sizes = "(min-width: 1024px) 40vw, 90vw",
  priority = false,
  zoom = true,
  iconSize = "h-12 w-12 md:h-16 md:w-16",
}: Props) {
  const tone = toneStyle[image.tone];
  const frame = `group relative isolate overflow-hidden ${shapeClass[shape]} ${className}`;
  const zoomCls = zoom ? "transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]" : "";

  if (image.file) {
    return (
      <div className={frame}>
        <Image
          src={`/images/${image.file}`}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${zoomCls}`}
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/30" style={{ borderRadius: "inherit" }} />
      </div>
    );
  }

  const iconColor = tone.dark ? "text-ivory/90" : "text-rose/80";
  const ringColor = tone.dark ? "border-ivory/40" : "border-gold/70";

  return (
    <div role="img" aria-label={image.alt} className={frame}>
      <div className={`absolute inset-0 ${zoomCls}`} style={{ background: tone.bg }}>
        <div className={`absolute inset-0 opacity-70 ${patternFor[image.icon] ?? "pat-lines"}`} />
        {/* soft light + depth */}
        <div className="absolute -left-1/4 -top-1/4 h-3/4 w-3/4 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-2/3 w-2/3 rounded-full bg-black/10 blur-3xl" />
      </div>
      {/* inset hairline echoing the frame */}
      <div
        className={`pointer-events-none absolute inset-2.5 border ${ringColor} opacity-70 md:inset-3.5 ${shapeClass[shape]}`}
        style={{ borderRadius: shape === "arch" ? "50% 50% 0.9rem 0.9rem / 37.5% 37.5% 0.9rem 0.9rem" : undefined }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className={`grid place-items-center rounded-full border ${ringColor} bg-white/10 p-4 backdrop-blur-[2px] md:p-5 ${iconColor}`}>
          <GlyphIcon name={image.icon} className={iconSize} strokeWidth={0.9} />
        </span>
      </div>
    </div>
  );
}
