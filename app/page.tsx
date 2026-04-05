import { Hero } from "@/components/sections/hero";
import { ProductGrid } from "@/components/sections/product-grid";
import { About } from "@/components/sections/about";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <About />
      <Newsletter />
    </>
  );
}
