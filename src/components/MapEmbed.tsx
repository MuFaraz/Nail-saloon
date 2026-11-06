import { site } from "@/config/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(site.map.query)}&output=embed`;
  return (
    <div className={`overflow-hidden rounded-[2rem] border border-gold/40 bg-blush shadow-soft ${className}`}>
      <iframe
        title={`Map showing the location of ${site.name}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-full min-h-[22rem] w-full grayscale-[35%] contrast-[0.95] sepia-[15%]"
        allowFullScreen
      />
    </div>
  );
}
