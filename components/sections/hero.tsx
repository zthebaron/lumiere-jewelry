import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-muted">
      {/* Background pattern / gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
          Crafting Brilliance Since 1999
        </p>
        <h1 className="mt-6 font-serif text-5xl font-light leading-tight sm:text-6xl lg:text-7xl">
          Timeless Elegance,
          <br />
          Modern Design
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Discover our curated collection of GIA-certified fine jewelry, where
          exceptional craftsmanship meets contemporary sophistication.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-foreground text-background px-8 py-3 text-sm tracking-wide uppercase hover:bg-foreground/90 transition-colors"
          >
            Shop Collection
          </Link>
          <Link
            href="/collection/lifestyle"
            className="inline-flex items-center justify-center border border-foreground px-8 py-3 text-sm tracking-wide uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
