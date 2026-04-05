import { db } from "@/lib/db";
import { ProductCard } from "@/components/product-card";

export const metadata = {
  title: "Search | LUMIERE",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  const products = q
    ? await db.product.findMany({
        where: {
          OR: [
            { name: { contains: q, mode: "insensitive" } },
            { description: { contains: q, mode: "insensitive" } },
            { category: { contains: q, mode: "insensitive" } },
          ],
        },
        orderBy: { createdAt: "desc" },
      })
    : [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-light sm:text-5xl">Search</h1>
      </div>

      <form className="mt-8 mx-auto max-w-xl">
        <div className="flex gap-3">
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Search for jewelry..."
            className="flex-1 border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <button
            type="submit"
            className="bg-foreground text-background px-6 py-3 text-sm tracking-wide uppercase hover:bg-foreground/90 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {q && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {products.length} result{products.length !== 1 ? "s" : ""} for
          &ldquo;{q}&rdquo;
        </p>
      )}

      {products.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
