import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import ProductCart from "./ProductCart";
import { db } from "@/lib/db";

export default async function Cart() {
  const carts = await db.cart.findMany({
    include: {
      product: {
        select: {
          price: true,
        },
      },
    },
  });
  const productCount = carts.reduce((total, cart) => {
    return total + cart.quantity;
  }, 0);
  const fee = 10;
  const prodcutPrice = carts.reduce((total, cart) => {
    return total + cart.product.price;
  }, 0);
  const totalPrice = prodcutPrice + fee;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex space-x-2">
          <ShoppingBag aria-hidden={true} />
          <span className="bg-black w-6 h-6 text-white rounded-full text-center">
            {productCount}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle className="text-2xl font-medium">Cart</SheetTitle>
        </SheetHeader>
        <div className="flex w-full flex-col my-5">
          <div className="space-y-8">
            <ProductCart />
            <Separator className="bg-black" />
            <div className="space-y-1.5 text-sm">
              <div className="flex">
                <span className="flex-1">Transaction Fee</span>
                <span>{fee}$</span>
              </div>
              <div className="flex text-lg font-semibold">
                <span className="flex-1 ">Total</span>
                <span>{totalPrice}$</span>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetTrigger asChild>
            <Button
              asChild
              className="bg-[#65806b] hover:bg-[#465c4b] text-white rounded-xl w-full"
            >
              <Link href="/cart">Continue to Checkout</Link>
            </Button>
          </SheetTrigger>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
