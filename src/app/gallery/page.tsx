import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = buildMetadata({
  title: "Gallery",
  description: "A look at our nail art, pedicures and lash sets. Browse by category and tap any image to enlarge.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Our <em>work</em>
          </>
        }
        intro="Filter by category and tap an image to view it larger. Placeholder imagery shown, real photos coming soon."
      />
      <section className="section" aria-label="Gallery">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
