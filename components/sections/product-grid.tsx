import { db } from "@/lib/db";
import { ProductCard } from "@/components/product-card";

export async function ProductGrid() {
  const products = await db.product.findMany({
    where: { featured: true },
    take: 6,
    orderBy: { createdAt: "desc" },
  });

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
          Curated For You
        </p>
        <h2 className="mt-3 font-serif text-3xl font-light sm:text-4xl">
          Signature Pieces
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            slug={product.slug}
            price={product.price}
            compareAt={product.compareAt}
            image={product.images[0] || "/placeholder.svg"}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
}
