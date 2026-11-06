import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  dark = false,
  as: H = "h2",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${dark ? "on-dark" : ""} ${className}`}>
      <span className={`eyebrow ${center ? "eyebrow-center" : ""}`}>{eyebrow}</span>
      <H className={`display-lg mt-5 ${dark ? "text-ivory" : "text-ink"}`}>{title}</H>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-ivory/80" : "text-muted"}`}>{intro}</p>
      )}
    </Reveal>
  );
}
