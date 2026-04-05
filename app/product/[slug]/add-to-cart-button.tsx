"use client";

import { useTransition } from "react";
import { addToCart } from "@/app/actions/cart";

export function AddToCartButton({ productId }: { productId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() =>
        startTransition(async () => {
          await addToCart(productId);
        })
      }
      disabled={isPending}
      className="mt-8 w-full bg-foreground text-background py-4 text-sm tracking-wide uppercase hover:bg-foreground/90 transition-colors disabled:opacity-50"
    >
      {isPending ? "Adding..." : "Add to Cart"}
    </button>
  );
}
