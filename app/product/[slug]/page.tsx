import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "./add-to-cart-button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await db.product.findUnique({ where: { slug } });
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | LUMIERE`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await db.product.findUnique({
    where: { slug },
    include: { variants: true },
  });

  if (!product) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Image gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1, 5).map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden bg-muted"
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 12.5vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product details */}
        <div className="flex flex-col justify-center">
          {product.category && (
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
              {product.category}
            </p>
          )}
          <h1 className="mt-2 font-serif text-4xl font-light sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <p className="text-2xl">{formatPrice(product.price)}</p>
            {product.compareAt && product.compareAt > product.price && (
              <p className="text-lg text-muted-foreground line-through">
                {formatPrice(product.compareAt)}
              </p>
            )}
          </div>

          {product.description && (
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Variants */}
          {product.variants.length > 0 && (
            <div className="mt-8 space-y-4">
              <h3 className="text-sm tracking-wide uppercase">Options</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <span
                    key={variant.id}
                    className="border border-border px-4 py-2 text-sm hover:border-foreground cursor-pointer transition-colors"
                  >
                    {variant.value}
                  </span>
                ))}
              </div>
            </div>
          )}

          <AddToCartButton productId={product.id} />

          {/* Product details accordion */}
          <div className="mt-12 space-y-4 border-t border-border pt-8">
            <div className="border-b border-border pb-4">
              <h3 className="text-sm tracking-wide uppercase">
                Shipping & Returns
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Complimentary shipping on orders over $500. Free returns within
                30 days.
              </p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-sm tracking-wide uppercase">Care Guide</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Store in the provided jewelry box. Clean gently with a soft
                cloth. Avoid contact with perfumes and chemicals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
