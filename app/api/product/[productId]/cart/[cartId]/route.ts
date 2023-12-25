import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    const product = await db.product.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!product) {
      return new NextResponse("Not found", { status: 404 });
    }

    const cart = await db.cart.findMany({
        where: {
          productId: params.id,
        },
      });
      
      // Check if the product is already in the cart
      if (cart.length > 0) {
        // Increase quantity if product already exists in the cart
        await db.cart.updateMany({
          where: {
            productId: params.id,
          },
          data: {
            quantity: {
              increment: 1,
            },
          },
        });
      
        return new NextResponse("Product quantity updated in the cart", { status: 200 });
      }

    // If the product is not in the cart, add it with a quantity of 1
    const cartProduct = await db.cart.create({
      data: {
        productId: product.id,
        quantity: 1,
      },
    });

    return NextResponse.json(cartProduct);
  } catch (error) {
    console.error("[PRODUCT CART ID]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
