"use server";

import { db } from "@/lib/db";
import { getSessionId, ensureSessionId } from "@/lib/session";
import { revalidatePath } from "next/cache";

export async function addToCart(productId: string, variantId?: string) {
  const sessionId = await ensureSessionId();

  const existing = await db.cartItem.findFirst({
    where: {
      sessionId,
      productId,
      variantId: variantId ?? null,
    },
  });

  if (existing) {
    await db.cartItem.update({
      where: { id: existing.id },
      data: { quantity: existing.quantity + 1 },
    });
  } else {
    await db.cartItem.create({
      data: {
        sessionId,
        productId,
        variantId: variantId ?? null,
        quantity: 1,
      },
    });
  }

  revalidatePath("/cart");
}

export async function updateCartItem(itemId: string, quantity: number) {
  if (quantity <= 0) {
    await db.cartItem.delete({ where: { id: itemId } });
  } else {
    await db.cartItem.update({
      where: { id: itemId },
      data: { quantity },
    });
  }
  revalidatePath("/cart");
}

export async function removeCartItem(itemId: string) {
  await db.cartItem.delete({ where: { id: itemId } });
  revalidatePath("/cart");
}

export async function getCart() {
  const sessionId = await getSessionId();

  if (!sessionId) return [];

  return db.cartItem.findMany({
    where: { sessionId },
    include: {
      product: true,
      variant: true,
    },
    orderBy: { createdAt: "asc" },
  });
}
