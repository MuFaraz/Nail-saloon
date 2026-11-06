/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — the single place to edit every placeholder.
 *  Name, address, phone, hours, booking link, socials, services, prices,
 *  reviews, promotions and image file names all live here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type Tone = "blush" | "rose" | "gold" | "ivory" | "mauve";
export type IconName =
  | "hand"
  | "foot"
  | "lash"
  | "wax"
  | "sparkle"
  | "flower"
  | "bottle"
  | "gem";

/**
 * Every picture on the site is described by an ImageSpec.
 * To use a real photo: drop it into /public/images and set `file`
 * (e.g. file: "hero-main.jpg"). While `file` is empty, an elegant
 * placeholder is drawn using `tone` and `icon`.
 */
export type ImageSpec = {
  file?: string;
  alt: string;
  tone: Tone;
  icon: IconName;
};

export const site = {
  name: "Maison Belle Nails & Spa", // placeholder
  shortName: "Maison Belle",
  suffix: "Nails & Spa",
  tagline: "Where every detail shines.",
  description:
    "Maison Belle Nails & Spa is a boutique nail salon in Houston offering refined manicures, pedicures, waxing and eyelash services in a calm, beautifully clean space.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel once you have the real domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://maison-belle-demo.vercel.app",
  announcement: "Walk-ins welcome · Open daily",

  address: {
    street: "123 Main Street", // placeholder
    city: "Houston",
    region: "TX",
    postalCode: "77001",
    country: "US",
  },
  phone: { display: "(555) 123-4567", tel: "+15551234567" }, // placeholder
  email: "hello@example.com", // placeholder

  hours: [
    {
      label: "Mon – Sat",
      time: "10am – 7pm",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      label: "Sunday",
      time: "11am – 5pm",
      days: ["Sunday"],
      opens: "11:00",
      closes: "17:00",
    },
  ],

  // External booking platform — opens in a new tab.
  bookingUrl: "#",

  socials: [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Google", href: "#" },
    { name: "Yelp", href: "#" },
  ],

  map: {
    // Used for the Google Maps embed and the "Get directions" link.
    query: "123 Main Street, Houston, TX 77001",
    geo: { lat: 29.7604, lng: -95.3698 },
  },
  priceRange: "$$",

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Promotions", href: "/promotions" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

/* ───────────────────────────── Services ───────────────────────────── */

export type ServiceItem = {
  name: string;
  price: number;
  duration?: string;
  description?: string;
};
export type ServiceCategory = {
  id: "manicure" | "pedicure" | "waxing" | "eyelashes";
  name: string;
  short: string;
  blurb: string;
  icon: IconName;
  image: ImageSpec;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    id: "manicure",
    name: "Manicure",
    short: "Sculpted, polished, perfected.",
    blurb:
      "From a clean classic polish to a bespoke gel finish, every manicure begins with a gentle cuticle ritual and ends with a flawless, long-wearing shine.",
    icon: "bottle",
    image: { alt: "Soft pink manicure with a glossy finish", tone: "blush", icon: "bottle" },
    items: [
      { name: "Classic Manicure", price: 28, duration: "30 min", description: "Shape, cuticle care, hand massage and polish." },
      { name: "Gel Manicure", price: 40, duration: "45 min", description: "Chip-resistant colour with a mirror-like gloss." },
      { name: "Signature Spa Manicure", price: 52, duration: "60 min", description: "Exfoliating scrub, warm mask and extended massage." },
      { name: "Dip Powder Set", price: 55, duration: "60 min", description: "Lightweight, durable colour with natural strength." },
      { name: "Gel Extensions", price: 70, duration: "90 min", description: "Sculpted length in your chosen shape and finish." },
      { name: "Nail Art (per nail)", price: 5, description: "Hand-painted details, chrome, French and more." },
    ],
  },
  {
    id: "pedicure",
    name: "Pedicure",
    short: "Slow, restorative, indulgent.",
    blurb:
      "Sink into a warm soak and let the stress melt away. Our pedicures pair meticulous care with a deeply relaxing massage.",
    icon: "foot",
    image: { alt: "Relaxing spa pedicure with warm towels", tone: "mauve", icon: "flower" },
    items: [
      { name: "Classic Pedicure", price: 40, duration: "45 min", description: "Soak, shape, callus care and polish." },
      { name: "Gel Pedicure", price: 52, duration: "60 min", description: "Our classic pedicure finished in long-wear gel." },
      { name: "Signature Spa Pedicure", price: 68, duration: "75 min", description: "Sugar scrub, mineral mask, hot towels and massage." },
      { name: "Luxury Rose Pedicure", price: 82, duration: "90 min", description: "Rose-infused ritual with paraffin treatment." },
      { name: "Kids’ Pedicure", price: 28, duration: "30 min", description: "A gentle treat for guests under 12." },
      { name: "Polish Change", price: 15, duration: "15 min", description: "Fresh colour on hands or feet." },
    ],
  },
  {
    id: "waxing",
    name: "Waxing",
    short: "Smooth, quick, comfortable.",
    blurb:
      "Gentle, skin-friendly wax applied by trained hands, with a fresh spatula every time and a calm, private setting.",
    icon: "wax",
    image: { alt: "Calm waxing room with soft linens", tone: "ivory", icon: "wax" },
    items: [
      { name: "Eyebrow Shaping", price: 15, duration: "15 min" },
      { name: "Upper Lip", price: 8, duration: "10 min" },
      { name: "Chin", price: 10, duration: "10 min" },
      { name: "Underarms", price: 20, duration: "15 min" },
      { name: "Half Leg", price: 35, duration: "30 min" },
      { name: "Full Leg", price: 58, duration: "45 min" },
    ],
  },
  {
    id: "eyelashes",
    name: "Eyelashes",
    short: "Soft, defined, effortless.",
    blurb:
      "Lightweight lash extensions and lifts designed around your eye shape, for a look that is polished from the moment you wake up.",
    icon: "lash",
    image: { alt: "Close-up of fluttering natural-look lashes", tone: "gold", icon: "lash" },
    items: [
      { name: "Classic Full Set", price: 95, duration: "2 hrs", description: "One extension per natural lash for a refined look." },
      { name: "Hybrid Full Set", price: 115, duration: "2 hrs", description: "A blend of classic and volume for texture." },
      { name: "Volume Full Set", price: 135, duration: "2.5 hrs", description: "Fuller, fluffier fans with soft drama." },
      { name: "Classic Fill (2–3 wks)", price: 55, duration: "1 hr" },
      { name: "Lash Lift & Tint", price: 70, duration: "1 hr", description: "Curl and colour for your own lashes." },
      { name: "Lash Removal", price: 20, duration: "20 min" },
    ],
  },
];

export const priceFrom = (cat: ServiceCategory) => Math.min(...cat.items.map((i) => i.price));

/* ───────────────────────────── Images ───────────────────────────── */

export const images = {
  heroMain: { alt: "Elegant hands with a soft blush manicure", tone: "blush", icon: "bottle" },
  heroAccent: { alt: "Detail of a champagne-gold nail finish", tone: "gold", icon: "sparkle" },
  aboutMain: { alt: "The calm, ivory-toned interior of the salon", tone: "mauve", icon: "flower" },
  aboutAccent: { alt: "Manicure station set with polishes and tools", tone: "ivory", icon: "bottle" },
  cta: { alt: "Soft petals and a polished manicure", tone: "rose", icon: "flower" },
} satisfies Record<string, ImageSpec>;

/* ───────────────────────────── Gallery ───────────────────────────── */

export type GalleryCategory = "Nails" | "Pedicure" | "Lashes";
export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  aspect: "portrait" | "square" | "tall" | "wide";
  image: ImageSpec;
};

export const galleryCategories: GalleryCategory[] = ["Nails", "Pedicure", "Lashes"];

export const gallery: GalleryItem[] = [
  { id: "g1", category: "Nails", aspect: "tall", image: { alt: "Nude gel manicure with a glossy finish", tone: "blush", icon: "bottle" } },
  { id: "g2", category: "Pedicure", aspect: "square", image: { alt: "Rose-toned spa pedicure", tone: "mauve", icon: "foot" } },
  { id: "g3", category: "Lashes", aspect: "portrait", image: { alt: "Soft hybrid lash set", tone: "gold", icon: "lash" } },
  { id: "g4", category: "Nails", aspect: "square", image: { alt: "Chrome champagne nail art", tone: "gold", icon: "sparkle" } },
  { id: "g5", category: "Nails", aspect: "portrait", image: { alt: "Classic French tip manicure", tone: "ivory", icon: "gem" } },
  { id: "g6", category: "Pedicure", aspect: "tall", image: { alt: "Deep rosewood gel pedicure", tone: "rose", icon: "foot" } },
  { id: "g7", category: "Lashes", aspect: "square", image: { alt: "Natural classic lash extensions", tone: "blush", icon: "lash" } },
  { id: "g8", category: "Nails", aspect: "wide", image: { alt: "Pearl and blush ombré set", tone: "mauve", icon: "gem" } },
  { id: "g9", category: "Pedicure", aspect: "portrait", image: { alt: "Pale pink pedicure with minimal florals", tone: "blush", icon: "flower" } },
  { id: "g10", category: "Nails", aspect: "tall", image: { alt: "Almond-shaped sculpted extensions", tone: "ivory", icon: "bottle" } },
  { id: "g11", category: "Lashes", aspect: "portrait", image: { alt: "Volume lash set with a gentle curl", tone: "rose", icon: "lash" } },
  { id: "g12", category: "Pedicure", aspect: "square", image: { alt: "Glossy red gel pedicure", tone: "rose", icon: "sparkle" } },
];

/* ───────────────────────────── Reviews (placeholder) ───────────────────────────── */

export const reviewSummary = { rating: "4.9", count: "500+" }; // placeholder numbers

export const reviews = [
  { name: "Sample Client A.", service: "Gel Manicure", text: "Placeholder review: the most serene salon I have visited. The attention to detail was extraordinary and my nails stayed perfect for weeks." },
  { name: "Sample Client B.", service: "Spa Pedicure", text: "Placeholder review: an hour of complete calm. The massage, the warm towels, the polish – every moment felt considered." },
  { name: "Sample Client C.", service: "Lash Set", text: "Placeholder review: my lashes look natural yet defined. I have never felt so looked after in a salon chair." },
  { name: "Sample Client D.", service: "Mani + Pedi", text: "Placeholder review: spotless, welcoming and genuinely skilled. This has become my monthly ritual." },
  { name: "Sample Client E.", service: "Nail Art", text: "Placeholder review: I brought a tiny inspiration photo and left with something even prettier. Truly artists." },
] as const;

/* ───────────────────────────── Promotions ───────────────────────────── */

export const promotions = [
  {
    id: "first-visit",
    tag: "New guests",
    title: "First Visit Offer",
    highlight: "15% off",
    text: "Treat yourself to your first Maison Belle experience with 15% off any service. Mention this offer when you book.",
    fine: "Placeholder offer. New clients only. Not combinable with other offers.",
    icon: "sparkle",
  },
  {
    id: "mani-pedi",
    tag: "Best value",
    title: "Mani + Pedi Combo",
    highlight: "Save $15",
    text: "Pair any gel manicure with a spa pedicure and enjoy a complimentary paraffin upgrade for your hands.",
    fine: "Placeholder offer. Valid Monday to Thursday.",
    icon: "bottle",
  },
  {
    id: "refer",
    tag: "Share the glow",
    title: "Refer a Friend",
    highlight: "$10 credit",
    text: "Introduce a friend and you will both receive $10 towards your next visit once their first appointment is complete.",
    fine: "Placeholder offer. One credit per referral.",
    icon: "flower",
  },
] as const;

/* ───────────────────────────── Why us ───────────────────────────── */

export const reasons = [
  { icon: "sparkle", title: "Spotless by design", text: "Hospital-grade sterilisation and single-use files, buffers and liners for every guest." },
  { icon: "gem", title: "Premium products", text: "Long-wear, gentle formulas chosen for quality, colour depth and nail health." },
  { icon: "hand", title: "Skilled artists", text: "A team trained in precision, patient with detail and fluent in every shape." },
  { icon: "flower", title: "An unhurried ritual", text: "Soft lighting, quiet music and tea on arrival. Your time here is yours." },
] as const;
