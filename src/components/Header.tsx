"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";
import { Wordmark } from "./Wordmark";
import { BookButton } from "./Button";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change (adjust state during render, per React guidance)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-500 ${
          scrolled
            ? "border-gold/30 bg-ivory/90 shadow-[0_10px_30px_-22px_rgba(94,45,57,0.5)] backdrop-blur-md"
            : "border-transparent bg-ivory"
        }`}
      >
        <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${site.name} – home`}
            className="shrink-0"
          >
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`group relative py-2 text-[0.74rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300 ${
                      isActive(item.href)
                        ? "text-rose"
                        : "text-ink hover:text-rose"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-500 ${
                        isActive(item.href)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <BookButton size="sm" className="hidden sm:inline-flex" />
            <button
              ref={menuBtn}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-rose transition-colors hover:bg-blush lg:hidden"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu (sibling of header: backdrop-filter would otherwise trap position:fixed) */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="on-dark fixed inset-0 z-50 flex flex-col overflow-y-auto bg-rose-deep text-ivory lg:hidden"
        style={{ animation: open ? "fade-in .4s ease both" : undefined }}
      >
        <div className="container-x flex h-[var(--header-h)] shrink-0 items-center justify-between">
          <Wordmark light />
          <button
            ref={closeBtn}
            type="button"
            onClick={() => {
              setOpen(false);
              menuBtn.current?.focus();
            }}
            aria-label="Close menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-ivory/40 transition-colors hover:bg-ivory/10"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav
          aria-label="Mobile"
          className="container-x flex flex-1 flex-col justify-center py-8"
        >
          <ul>
            {site.nav.map((item, i) => (
              <li key={item.href} className="border-b border-ivory/15">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex items-baseline justify-between py-4 font-display text-[2.1rem] font-light leading-none transition-colors hover:text-blush"
                  style={
                    open
                      ? {
                          animation: `fade-up .7s ${120 + i * 70}ms cubic-bezier(.2,.7,.2,1) both`,
                        }
                      : undefined
                  }
                >
                  <span
                    className={isActive(item.href) ? "italic text-blush" : ""}
                  >
                    {item.label}
                  </span>
                  <span className="text-xs tracking-[0.3em] text-ivory/50">
                    0{i + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BookButton variant="light" className="flex-1" />
            <a
              href={`tel:${site.phone.tel}`}
              className="btn btn-ghost-light flex-1"
            >
              <PhoneIcon className="h-4 w-4" /> Call us
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
