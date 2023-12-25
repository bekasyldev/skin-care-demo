"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface ShippingOption {
  name: string;
  price: number;
}

const CartSummary: React.FC = () => {
  const [selectedShipping, setSelectedShipping] =
    useState<ShippingOption | null>(null);

  const shippingOptions: ShippingOption[] = [
    { name: "Free shipping", price: 0.0 },
    { name: "Express shipping", price: 15.0 },
    { name: "Pick up", price: 21.0 },
  ];

  const handleShippingSelection = (option: ShippingOption) => {
    setSelectedShipping(option);
  };

  const subtotal = 1234.0; // Replace this with your actual subtotal calculation

  const total = selectedShipping ? subtotal + selectedShipping.price : subtotal;

  return (
    <div className="w-[380px] border-black border rounded-[6px] px-6 py-4 space-y-4 my-10 text-left">
      <h2 className="text-2xl">Cart Summary</h2>
      <div className="space-y-2">
        {shippingOptions.map((option, index) => (
          <div
            key={index}
            className={`border-black border flex flex-row justify-between py-2 px-4 rounded-[4px] ${
              selectedShipping?.name === option.name ? "bg-gray-100" : ""
            }`}
            onClick={() => handleShippingSelection(option)}
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-black rounded-full flex items-center justify-center">
                {selectedShipping?.name === option.name && (
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                )}
              </div>
              <p>{option.name}</p>
            </div>
            <span>${option.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-between mt-6">
            <p className="text-gray-600">Subtotal</p>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Separator className="bg-gray-600" />
          <div className="flex items-center justify-between text-lg font-semibold">
            <p>Total</p>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Button className="w-full bg-black hover:bg-black text-white rounded-xl py-6">
        <Link href={"/cart/checkout"}>Checkout</Link>
      </Button>
    </div>
  );
};

export default CartSummary;
