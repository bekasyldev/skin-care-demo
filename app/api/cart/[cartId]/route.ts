import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    const productId = params.id; // Retrieve the ID from params

    if (!productId) {
      return new NextResponse("Product ID is missing", { status: 400 });
    }

    const product = await db.product.findUnique({
      where: {
        id: productId
      },
    });

    if (!product) {
      return new NextResponse("Product not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.error("[PRODUCT CART ID]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
