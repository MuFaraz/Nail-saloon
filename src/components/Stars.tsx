import { StarIcon } from "./Icons";

export function Stars({ count = 5, className = "h-4 w-4" }: { count?: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-gold" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  );
}
