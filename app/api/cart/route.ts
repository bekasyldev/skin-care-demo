import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        const cart = await db.cart.findMany()
        return NextResponse.json(cart)
    } catch (error) {
        console.log("[PRODUCT]", error)
        return new NextResponse("Internel error", { status: 500 })
    }
}