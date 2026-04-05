import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client.ts";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString =
  process.env.DIRECT_DATABASE_URL ||
  "postgres://postgres:postgres@localhost:51214/template1";

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.cartItem.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  const products = [
    {
      name: "3 Piece Fashion Set",
      slug: "3-piece-fashion-set",
      description: "A stunning trio of complementary pieces designed to elevate any ensemble. Crafted with precision and finished with our signature golden accents.",
      price: 89900,
      images: ["https://images.unsplash.com/photo-1515562141589-67f0d79e6e67?w=800&h=1000&fit=crop"],
      category: "Sets",
      collection: "lifestyle",
      featured: true,
    },
    {
      name: "Custom Bundle",
      slug: "custom-bundle",
      description: "Create your own curated collection. Choose from our finest pieces to build a set that reflects your unique style.",
      price: 36000,
      images: ["https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"],
      category: "Bundles",
      collection: "lifestyle",
      featured: true,
    },
    {
      name: "Azure Drift",
      slug: "azure-drift",
      description: "Inspired by the endless horizon where sky meets sea. A mesmerizing blue sapphire pendant set in 18k white gold.",
      price: 49900,
      images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop"],
      category: "Necklaces",
      collection: "relax",
      featured: true,
    },
    {
      name: "Ocean Bloom",
      slug: "ocean-bloom",
      description: "Delicate petals of gold embrace a center aquamarine stone, evoking the beauty of flowers by the shore.",
      price: 45000,
      images: ["https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop"],
      category: "Rings",
      collection: "relax",
      featured: true,
    },
    {
      name: "Beneath the Starless Sky",
      slug: "beneath-the-starless-sky",
      description: "A bold statement piece featuring black onyx and diamond accents. For those who find beauty in the night.",
      price: 12500,
      images: ["https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"],
      category: "Bracelets",
      collection: "lifestyle",
      featured: true,
    },
    {
      name: "Le Bag Autre",
      slug: "le-bag-autre",
      description: "Our iconic leather accessory, hand-stitched by master artisans in our Parisian atelier. A timeless companion.",
      price: 199900,
      compareAt: 249900,
      images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&h=1000&fit=crop"],
      category: "Accessories",
      collection: "lifestyle",
      featured: true,
    },
    {
      name: "Golden Hour Earrings",
      slug: "golden-hour-earrings",
      description: "Catch the light with these elegant drop earrings. 14k gold with hand-set citrine stones.",
      price: 32500,
      images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop"],
      category: "Earrings",
      collection: "relax",
      featured: false,
    },
    {
      name: "Midnight Choker",
      slug: "midnight-choker",
      description: "A sleek black velvet choker with a central diamond clasp. Understated luxury for evening wear.",
      price: 27500,
      images: ["https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=1000&fit=crop"],
      category: "Necklaces",
      collection: "lifestyle",
      featured: false,
    },
  ];

  for (const product of products) {
    await prisma.product.create({ data: product });
  }

  const fashionSet = await prisma.product.findUnique({
    where: { slug: "3-piece-fashion-set" },
  });
  if (fashionSet) {
    await prisma.variant.createMany({
      data: [
        { name: "Size", value: "Small", productId: fashionSet.id },
        { name: "Size", value: "Medium", productId: fashionSet.id },
        { name: "Size", value: "Large", productId: fashionSet.id },
      ],
    });
  }

  console.log("Seeded 8 products successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
