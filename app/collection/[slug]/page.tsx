import { db } from "@/lib/db";
import { ProductCard } from "@/components/product-card";
import { notFound } from "next/navigation";

const collections: Record<string, { title: string; description: string }> = {
  relax: {
    title: "Relax Collection",
    description:
      "Pieces designed for everyday elegance. Effortless luxury that moves with you.",
  },
  lifestyle: {
    title: "Lifestyle Collection",
    description:
      "Statement pieces that define your personal style. Bold, modern, unforgettable.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections[slug];
  if (!collection) return { title: "Collection Not Found" };
  return { title: `${collection.title} | LUMIERE` };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections[slug];
  if (!collection) notFound();

  const products = await db.product.findMany({
    where: { collection: slug },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-light sm:text-5xl">
          {collection.title}
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          {collection.description}
        </p>
      </div>

      {products.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          No products in this collection yet.
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
