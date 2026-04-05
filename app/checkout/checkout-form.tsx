"use client";

import { useTransition } from "react";
import { placeOrder } from "@/app/actions/order";

export function CheckoutForm() {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={(formData) =>
        startTransition(async () => {
          await placeOrder(formData);
        })
      }
      className="space-y-6"
    >
      <div>
        <h2 className="text-sm tracking-wide uppercase mb-4">
          Contact Information
        </h2>
        <div className="space-y-4">
          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <input
            name="name"
            type="text"
            required
            placeholder="Full name"
            className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      <div>
        <h2 className="text-sm tracking-wide uppercase mb-4">
          Shipping Address
        </h2>
        <div className="space-y-4">
          <input
            name="address"
            type="text"
            required
            placeholder="Street address"
            className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              name="city"
              type="text"
              required
              placeholder="City"
              className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <input
              name="zip"
              type="text"
              required
              placeholder="ZIP / Postal code"
              className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <input
            name="country"
            type="text"
            required
            placeholder="Country"
            className="w-full border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-foreground text-background py-4 text-sm tracking-wide uppercase hover:bg-foreground/90 transition-colors disabled:opacity-50"
      >
        {isPending ? "Placing Order..." : "Place Order"}
      </button>

      <p className="text-xs text-center text-muted-foreground">
        Payment integration coming soon. This is a demo checkout.
      </p>
    </form>
  );
}
