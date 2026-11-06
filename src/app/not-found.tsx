import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { SalonImage } from "@/components/SalonImage";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="eyebrow">Error 404</p>
          <h1 className="display-xl mt-6 text-ink">
            Lost your <em>polish?</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-muted md:text-lg lg:mx-0">
            The page you are looking for has slipped away. Let us guide you back to something beautiful.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href="/">Back to home</Button>
            <Button href="/services" variant="outline">
              View services
            </Button>
          </div>
        </div>
        <SalonImage
          image={{ alt: "Soft decorative arch", tone: "blush", icon: "sparkle" }}
          shape="arch"
          className="mx-auto aspect-[3/4] w-full max-w-sm"
          iconSize="h-20 w-20"
        />
      </div>
    </section>
  );
}
