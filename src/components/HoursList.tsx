import { site } from "@/config/site";

export function HoursList({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {site.hours.map((h) => (
        <li key={h.label} className="flex items-baseline gap-3 text-sm">
          <span className={dark ? "text-ivory" : "text-ink"}>{h.label}</span>
          <span className="leader" aria-hidden />
          <span className={`font-medium ${dark ? "text-ivory" : "text-rose-deep"}`}>{h.time}</span>
        </li>
      ))}
    </ul>
  );
}
