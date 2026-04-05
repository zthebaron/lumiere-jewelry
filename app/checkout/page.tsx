import { getCart } from "@/app/actions/cart";
import { formatPrice } from "@/lib/utils";
import { redirect } from "next/navigation";
import { CheckoutForm } from "./checkout-form";

export const metadata = {
  title: "Checkout | LUMIERE",
};

export default async function CheckoutPage() {
  const items = await getCart();

  if (items.length === 0) {
    redirect("/cart");
  }

  const subtotal = items.reduce(
    (sum, item) =>
      sum + (item.variant?.price ?? item.product.price) * item.quantity,
    0
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-light text-center">Checkout</h1>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Form */}
        <div className="lg:col-span-3">
          <CheckoutForm />
        </div>

        {/* Order summary */}
        <div className="lg:col-span-2">
          <div className="border border-border p-6">
            <h2 className="text-sm tracking-wide uppercase mb-6">
              Order Summary
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.product.name} x {item.quantity}
                  </span>
                  <span>
                    {formatPrice(
                      (item.variant?.price ?? item.product.price) *
                        item.quantity
                    )}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-border pt-4 flex justify-between">
              <span>Total</span>
              <span className="font-serif text-lg">
                {formatPrice(subtotal)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
