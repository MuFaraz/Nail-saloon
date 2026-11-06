import { site } from "@/config/site";
import { PhoneIcon } from "./Icons";

export function AnnouncementBar() {
  return (
    <div className="on-dark bg-rose-deep text-ivory">
      <div className="container-x flex h-9 items-center justify-center gap-6 text-[0.68rem] font-medium uppercase tracking-[0.28em] md:justify-between">
        <p className="truncate">{site.announcement}</p>
        <a
          href={`tel:${site.phone.tel}`}
          className="hidden items-center gap-2 tracking-[0.2em] transition-colors hover:text-blush md:inline-flex"
        >
          <PhoneIcon className="h-3.5 w-3.5" />
          {site.phone.display}
        </a>
      </div>
    </div>
  );
}
