"use server";

import { db } from "@/lib/db";
import { ensureSessionId } from "@/lib/session";
import { redirect } from "next/navigation";

export async function placeOrder(formData: FormData) {
  const sessionId = await ensureSessionId();

  const cartItems = await db.cartItem.findMany({
    where: { sessionId },
    include: { product: true, variant: true },
  });

  if (cartItems.length === 0) {
    redirect("/cart");
  }

  const total = cartItems.reduce(
    (sum, item) =>
      sum + (item.variant?.price ?? item.product.price) * item.quantity,
    0
  );

  const order = await db.order.create({
    data: {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      zip: formData.get("zip") as string,
      country: formData.get("country") as string,
      total,
      items: cartItems.map((item) => ({
        productId: item.productId,
        productName: item.product.name,
        variantValue: item.variant?.value,
        quantity: item.quantity,
        price: item.variant?.price ?? item.product.price,
      })),
    },
  });

  // Clear cart
  await db.cartItem.deleteMany({ where: { sessionId } });

  redirect(`/order/success/${order.id}`);
}
