"use client";
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

export default function Cart() {
  const fee = 1;
  let cartTotal = 0;
  const productCount = 1;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingBag aria-hidden={true} />
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Cart ({cartTotal})</SheetTitle>
        </SheetHeader>
        <div className="flex w-full flex-col pr-6 my-5">
          <div className="space-y-4 pr-6">
            <Separator />
            <div className="space-y-1.5 text-sm">
              <div className="flex">
                <span className="flex-1">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex">
                <span className="flex-1">Transaction Fee</span>
                <span>{fee}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Total</span>
                <span>{cartTotal + fee}</span>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetTrigger asChild>
            <Button
              asChild
              className="bg-[#65806b] text-white rounded-xl w-full"
            >
              <Link href="/cart">Continue to Checkout</Link>
            </Button>
          </SheetTrigger>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
