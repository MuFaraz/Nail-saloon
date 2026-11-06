import type { SVGProps } from "react";
import type { IconName } from "@/config/site";

type P = SVGProps<SVGSVGElement>;

const base: P = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

/* Decorative service / brand glyphs */
const glyphs: Record<IconName, React.ReactNode> = {
  bottle: (
    <>
      <path d="M9.5 2.5h5v4h-5z" />
      <path d="M8 6.5h8l1.5 3v9a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 18.500v-9z" />
      <path d="M9.500 13.500c1.500-1 3.500 1 5 0" />
    </>
  ),
  hand: (
    <>
      <path d="M8 13V6.500a1.500 1.500 0 0 1 3 0V12" />
      <path d="M11 11V4.500a1.500 1.500 0 0 1 3 0V12" />
      <path d="M14 12V6.500a1.500 1.500 0 0 1 3 0v8c0 4-2.500 6.500-6 6.500s-5-2-6.500-5L3 12.500a1.500 1.500 0 0 1 2.500-1.500L8 13" />
    </>
  ),
  foot: (
    <>
      <path d="M9 21c-2 0-3-1.500-3-3.500 0-2 .8-3.500 1.500-5.500C8.500 9 9 6 11.500 5c2.500-1 3.500 1 3.500 3 0 2-.5 3.500-.5 5.500 0 2 1 3 1 4.500 0 2-2.500 3-6.500 3z" />
      <circle cx="17.500" cy="6" r="1" />
      <circle cx="19.500" cy="9" r="0.9" />
      <circle cx="20" cy="12.500" r="0.8" />
    </>
  ),
  lash: (
    <>
      <path d="M2.500 13s3.500-6 9.500-6 9.500 6 9.500 6-3.500 5.500-9.500 5.500S2.500 13 2.500 13z" />
      <circle cx="12" cy="13" r="2.800" />
      <path d="M12 2.500v2.500M5.500 5l1.300 2M18.500 5l-1.300 2M2.500 8.500l1.800 1.200M21.500 8.500l-1.800 1.200" />
    </>
  ),
  wax: (
    <>
      <path d="M4.500 19.500C4.500 10.500 10 4.500 20 4c0 10-5.500 15.500-15.500 15.500z" />
      <path d="M4 20c3-5.500 6-8.500 10.500-11" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3c.6 4.200 2.800 6.400 7 7-4.200.6-6.400 2.800-7 7-.6-4.200-2.800-6.400-7-7 4.200-.6 6.400-2.800 7-7z" />
      <path d="M19 15.500c.2 1.400 1 2.200 2.300 2.500-1.300.3-2.100 1.100-2.300 2.500-.2-1.400-1-2.200-2.300-2.500 1.300-.3 2.100-1.100 2.300-2.500z" />
    </>
  ),
  flower: (
    <>
      <path d="M12 20.500c-4.500 0-7.500-3.200-7.500-8 3.200 0 5.800 1.500 7.500 4.200 1.700-2.700 4.300-4.200 7.500-4.200 0 4.800-3 8-7.500 8z" />
      <path d="M12 16.500c-2.200-2.200-2.700-6-0-11.500 2.700 5.500 2.200 9.300 0 11.500z" />
    </>
  ),
  gem: (
    <>
      <path d="M6.500 4h11l4 5.200L12 20.500 2.500 9.200z" />
      <path d="M2.500 9.200h19M9.500 4 7.500 9.200 12 20.500l4.500-11.300L14.500 4" />
    </>
  ),
};

export function GlyphIcon({ name, ...props }: P & { name: IconName }) {
  return (
    <svg {...base} {...props}>
      {glyphs[name]}
    </svg>
  );
}

/* UI icons */
export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.200-7-11.500A7 7 0 0 1 19 9.500C19 14.800 12 21 12 21z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </svg>
);
export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const MailIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const ArrowIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);
export const ChevronIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 8h16M4 16h10" />
  </svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12.500 4.500 4.500L19 7.500" />
  </svg>
);
export const QuoteIcon = (p: P) => (
  <svg viewBox="0 0 48 36" fill="currentColor" aria-hidden focusable={false} {...p}>
    <path d="M0 36V21.600C0 9.400 6.600 2 18.600 0l1.800 4.800C13.800 6.800 11 10.400 10.800 15.600H20V36zm26.400 0V21.600C26.400 9.400 33 2 45 0l1.800 4.800c-6.600 2-9.400 5.600-9.600 10.800H46.400V36z" />
  </svg>
);
export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...p}>
    <path d="m12 2.500 2.900 6.100 6.600.8-4.900 4.600 1.300 6.600L12 17.300l-5.900 3.300 1.300-6.600L2.500 9.400l6.600-.8z" />
  </svg>
);

/* Brand icons (simple monoline marks) */
export const InstagramIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r=".6" fill="currentColor" />
  </svg>
);
export const FacebookIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14 8.500h2.500V5H14a3.500 3.500 0 0 0-3.500 3.500V11H8v3.500h2.500V21H14v-6.500h2.500L17 11h-3V8.500z" />
  </svg>
);
export const GoogleIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 12.200c0-.6 0-1.100-.2-1.700H12v3.200h4.600A4 4 0 0 1 14.900 16l2.600 2c1.500-1.400 2.500-3.500 2.500-5.800z" />
    <path d="M12 20.500c2.200 0 4-.7 5.500-2l-2.600-2c-.7.500-1.700.8-2.900.8a5.300 5.300 0 0 1-5-3.600l-2.700 2A8.500 8.500 0 0 0 12 20.500z" />
    <path d="M7 13.700a5.300 5.300 0 0 1 0-3.400l-2.700-2a8.500 8.500 0 0 0 0 7.400z" />
    <path d="M12 6.800c1.200 0 2.300.4 3.100 1.200l2.300-2.300A8.200 8.200 0 0 0 12 3.500a8.500 8.500 0 0 0-7.700 4.800l2.700 2A5.300 5.300 0 0 1 12 6.800z" />
  </svg>
);
export const YelpIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.500v8M12 11.500l-6 2.500M12 11.500l5.500 3M12 11.500l4-6M12 11.500l-3.500 5.500" />
    <circle cx="12" cy="11.500" r="1.200" fill="currentColor" />
  </svg>
);

export const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Google: GoogleIcon,
  Yelp: YelpIcon,
} as const;
