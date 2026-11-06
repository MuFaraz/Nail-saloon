const words = ["Manicure", "Pedicure", "Gel Extensions", "Waxing", "Lash Extensions", "Nail Art", "Spa Rituals", "Lash Lift"];

export function Marquee({ dark = false }: { dark?: boolean }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w} className="flex items-center">
          <span className="px-7 font-display text-3xl font-light italic md:px-10 md:text-4xl">{w}</span>
          <span className="text-gold" aria-hidden>
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div
      className={`marquee overflow-hidden border-y py-5 md:py-6 ${
        dark ? "border-ivory/20 bg-rose text-ivory" : "border-gold/40 bg-blush/50 text-rose-deep"
      }`}
      role="presentation"
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
