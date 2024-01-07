import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        const product = await db.product.findMany()
        return NextResponse.json(product)
    } catch (error) {
        console.log("[PRODUCT]", error)
        return new NextResponse("Internel error", { status: 500 })
    }
}