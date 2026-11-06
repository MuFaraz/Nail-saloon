import type { ImageSpec } from "@/config/site";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: string;
  image: ImageSpec;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "the-art-of-a-lasting-manicure",
    title: "The Art of a Manicure That Lasts",
    excerpt: "Salon-fresh nails for three weeks and beyond: what happens in the chair, and the small habits that make the difference at home.",
    category: "Nail Care",
    date: "2026-09-12",
    readTime: "5 min read",
    image: { alt: "Soft blush manicure resting on ivory linen", tone: "blush", icon: "bottle" },
    body: [
      { type: "p", text: "A manicure that stays flawless is rarely luck. It is preparation, patience and a few quiet habits, and most of them begin long before the polish touches the nail." },
      { type: "h2", text: "It begins with preparation" },
      { type: "p", text: "Every lasting finish starts with a clean, dry, gently buffed nail plate. Cuticles are softened and eased back, never cut aggressively, so the colour can sit close to the skin without lifting. Skipping this step is the most common reason polish chips early." },
      { type: "quote", text: "Beautiful nails are built in the first ten minutes, not the last." },
      { type: "h2", text: "Choose the right finish for your life" },
      { type: "p", text: "Gel suits busy weeks and travel. Dip powder adds strength to nails that tend to bend. Classic polish is perfect when you love changing colour often. A good technician will help you choose based on your routine rather than a trend." },
      { type: "h2", text: "Small habits at home" },
      { type: "list", items: ["Apply cuticle oil every evening. It keeps the skin supple and the finish glossy.", "Wear gloves for washing up and cleaning products.", "Use your fingertips, not your nails, to open cans and packaging.", "Book your next visit before the edges begin to grow out."] },
      { type: "p", text: "Treat your hands with a little daily care and your manicure will reward you with weeks of quiet polish." },
    ],
  },
  {
    slug: "why-a-spa-pedicure-is-worth-the-pause",
    title: "Why a Spa Pedicure Is Worth the Pause",
    excerpt: "More than polish: a spa pedicure is circulation, softness and a rare hour of stillness. Here is what to expect from your first one.",
    category: "Spa Rituals",
    date: "2026-08-03",
    readTime: "4 min read",
    image: { alt: "Warm towels and rose petals beside a pedicure basin", tone: "mauve", icon: "flower" },
    body: [
      { type: "p", text: "Our feet carry us through every day, and they rarely get a moment of thanks. A spa pedicure is part grooming, part restoration, and entirely a pause you have earned." },
      { type: "h2", text: "What happens during your visit" },
      { type: "p", text: "You begin with a warm, lightly scented soak that softens skin and eases tension. Nails are shaped, cuticles tended, and rough areas smoothed with care. A sugar scrub and mineral mask follow, then hot towels and an unhurried massage of the feet and calves." },
      { type: "quote", text: "The best part is the quiet. For one hour, nothing else needs you." },
      { type: "h2", text: "How often should you book?" },
      { type: "p", text: "Every four to six weeks keeps feet soft and nails tidy. In sandal season, many guests prefer a shorter interval so polish always looks fresh." },
      { type: "h2", text: "Before you arrive" },
      { type: "list", items: ["Skip shaving your legs for 24 hours beforehand to avoid irritation.", "Wear loose, open footwear so your polish can dry properly.", "Let us know about any skin sensitivities or medical concerns."] },
    ],
  },
  {
    slug: "choosing-the-right-lash-style",
    title: "Choosing the Right Lash Style for Your Eyes",
    excerpt: "Classic, hybrid or volume? A calm guide to finding the lash look that suits your eye shape, lifestyle and maintenance appetite.",
    category: "Lashes",
    date: "2026-06-21",
    readTime: "6 min read",
    image: { alt: "Delicate lash extensions in soft natural light", tone: "gold", icon: "lash" },
    body: [
      { type: "p", text: "Lash extensions should feel like your best natural lashes: lifted, defined and effortless. The right style depends on your eye shape, your own lash health and how much upkeep you enjoy." },
      { type: "h2", text: "Classic: refined and natural" },
      { type: "p", text: "One extension is applied to each natural lash. The result is a softly defined, polished look, ideal for first-timers and anyone who prefers a minimal finish." },
      { type: "h2", text: "Hybrid: texture with softness" },
      { type: "p", text: "A mix of classic lashes and handmade fans creates a gently fuller, textured effect that still looks natural from every angle." },
      { type: "quote", text: "The most beautiful lashes are the ones that look like they belong to you." },
      { type: "h2", text: "Volume: fuller and fluffier" },
      { type: "p", text: "Lightweight fans create density and soft drama, suited to those who like to wake up with their eyes already defined." },
      { type: "list", items: ["Avoid oil-based products around the eyes.", "Brush your lashes gently each morning with a clean spoolie.", "Book fills every two to three weeks to keep the set full."] },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
