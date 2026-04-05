import { db } from "@/lib/db";
import { ProductCard } from "@/components/product-card";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Products | LUMIERE",
};

export default async function ProductsPage() {
  const products = await db.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-light sm:text-5xl">
          All Products
        </h1>
        <p className="mt-4 text-muted-foreground">
          Explore our complete collection of fine jewelry
        </p>
      </div>

      {products.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          No products available yet.
        </p>
      ) : (
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
      )}
    </div>
  );
}
