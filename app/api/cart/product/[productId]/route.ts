// import { NextResponse } from "next/server";
// import { db } from "@/lib/db";

// export async function DELETE(
//     req: Request,
//     { params }: { params: { id: string} }
//   ) {
//     try {
//         const product = await db.cart.findUnique({
//             where: {
//                 productId: params.id
//             }
//         })
//         if(!product) {
//             return new NextResponse("Not found", {status: 404})
//         }

//         const delteProduct = await db.cart.delete({
//             where: {
//                 productId: product.id
//             }
//         })
//     } catch (error) {
//         console.log("[CART PRODUCT ID]", error);
//         return new NextResponse("Internal error", {status: 500})
//     }
// }