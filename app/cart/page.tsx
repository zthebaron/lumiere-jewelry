import { getCart } from "@/app/actions/cart";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { CartItemRow } from "./cart-item-row";

export const metadata = {
  title: "Cart | LUMIERE",
};

export default async function CartPage() {
  const items = await getCart();

  const subtotal = items.reduce(
    (sum, item) =>
      sum + (item.variant?.price ?? item.product.price) * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl font-light">Your Cart</h1>
        <p className="mt-4 text-muted-foreground">Your cart is empty.</p>
        <Link
          href="/products"
          className="mt-8 inline-flex bg-foreground text-background px-8 py-3 text-sm tracking-wide uppercase hover:bg-foreground/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-light text-center">Your Cart</h1>

      <div className="mt-12 space-y-6">
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <div className="flex justify-between items-center">
          <p className="text-lg">Subtotal</p>
          <p className="text-xl font-serif">{formatPrice(subtotal)}</p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Shipping and taxes calculated at checkout.
        </p>
        <Link
          href="/checkout"
          className="mt-6 block w-full text-center bg-foreground text-background py-4 text-sm tracking-wide uppercase hover:bg-foreground/90 transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
