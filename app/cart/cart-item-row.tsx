"use client";

import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { updateCartItem, removeCartItem } from "@/app/actions/cart";
import { useTransition } from "react";
import { Minus, Plus, X } from "lucide-react";

interface CartItemRowProps {
  item: {
    id: string;
    quantity: number;
    product: {
      name: string;
      price: number;
      images: string[];
      slug: string;
    };
    variant?: {
      value: string;
      price: number | null;
    } | null;
  };
}

export function CartItemRow({ item }: CartItemRowProps) {
  const [isPending, startTransition] = useTransition();
  const price = item.variant?.price ?? item.product.price;

  return (
    <div className="flex gap-6 border-b border-border pb-6">
      <div className="relative h-28 w-20 flex-shrink-0 overflow-hidden bg-muted">
        <Image
          src={item.product.images[0] || "/placeholder.svg"}
          alt={item.product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h3 className="font-serif text-lg">{item.product.name}</h3>
            {item.variant && (
              <p className="text-sm text-muted-foreground">
                {item.variant.value}
              </p>
            )}
          </div>
          <p className="text-sm">{formatPrice(price * item.quantity)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              disabled={isPending}
              onClick={() =>
                startTransition(() =>
                  updateCartItem(item.id, item.quantity - 1)
                )
              }
              className="p-1 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-sm w-6 text-center">{item.quantity}</span>
            <button
              disabled={isPending}
              onClick={() =>
                startTransition(() =>
                  updateCartItem(item.id, item.quantity + 1)
                )
              }
              className="p-1 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            disabled={isPending}
            onClick={() =>
              startTransition(() => removeCartItem(item.id))
            }
            className="p-1 text-muted-foreground hover:text-destructive transition-colors disabled:opacity-50"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
