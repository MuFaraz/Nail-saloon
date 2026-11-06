import { site } from "@/config/site";
import { BookButton } from "./Button";
import { PhoneIcon } from "./Icons";

/** Sticky bottom action bar — mobile only. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-ivory/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_-18px_rgba(94,45,57,0.45)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a href={`tel:${site.phone.tel}`} className="btn btn-outline flex-1" aria-label={`Call ${site.phone.display}`}>
          <PhoneIcon className="h-4 w-4" /> Call
        </a>
        <BookButton className="flex-1" />
      </div>
    </div>
  );
}
