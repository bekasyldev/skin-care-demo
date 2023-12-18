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
  const fee = 10;
  let cartTotal = 0;
  {
    carts.map((cart) => (cartTotal += cart.product.price));
  }
  cartTotal += fee;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingBag aria-hidden={true} />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <div className="flex w-full flex-col my-5">
          <div className="space-y-4">
            <ProductCart />
            <Separator className="bg-black" />
            <div className="space-y-1.5 text-sm">
              <div className="flex">
                <span className="flex-1">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex">
                <span className="flex-1">Transaction Fee</span>
                <span>{fee}$</span>
              </div>
              <div className="flex text-lg font-semibold">
                <span className="flex-1 ">Total</span>
                <span>{cartTotal}$</span>
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
