import { db } from "@/lib/db";
import { formatPrice } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: "Order Confirmed | LUMIERE",
};

export default async function OrderSuccessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await db.order.findUnique({ where: { id } });

  if (!order) notFound();

  const items = order.items as Array<{
    productName: string;
    variantValue?: string;
    quantity: number;
    price: number;
  }>;

  return (
    <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:px-8 text-center">
      <p className="text-sm tracking-[0.3em] uppercase text-accent">
        Order Confirmed
      </p>
      <h1 className="mt-4 font-serif text-4xl font-light">Thank You</h1>
      <p className="mt-4 text-muted-foreground">
        Your order has been placed successfully. A confirmation email will be
        sent to {order.email}.
      </p>

      <div className="mt-12 border border-border p-6 text-left">
        <p className="text-sm text-muted-foreground">
          Order #{order.id.slice(0, 8).toUpperCase()}
        </p>
        <div className="mt-4 space-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span>
                {item.productName}
                {item.variantValue ? ` — ${item.variantValue}` : ""} x{" "}
                {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-border pt-4 flex justify-between">
          <span>Total</span>
          <span className="font-serif text-lg">{formatPrice(order.total)}</span>
        </div>
      </div>

      <Link
        href="/products"
        className="mt-8 inline-flex bg-foreground text-background px-8 py-3 text-sm tracking-wide uppercase hover:bg-foreground/90 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
