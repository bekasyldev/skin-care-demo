import ProductCount from "@/components/prodcut/product-count";
import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import Image from "next/image";
import React from "react";

const ProductTable: React.FC = async () => {
  const carts = await db.cart.findMany({
    include: {
      product: {
        select: {
          id: true,
          imageUrl: true,
          price: true,
          title: true,
        },
      },
    },
  });

  return (
    <div className="my-10 flex-1">
      <div className="flex items-center justify-between font-semibold">
        <p>Product</p>
        <ul className="flex flex-row gap-x-20">
          <li>Quantity</li>
          <li>Price</li>
          <li>Subtotal</li>
        </ul>
      </div>
      <Separator className="bg-black mt-8" />
      <div>
        {carts.map((cart) => (
          <div key={cart.id} className="flex flex-col my-4">
            <div className="flex flex-row items-center justify-between ">
              <div className="flex flex-row items-center gap-x-4">
                <Image
                  width={80}
                  height={96}
                  alt={cart.product.imageUrl}
                  src={`/${cart.product.imageUrl}.png`}
                />
                <p>{cart.product.title}</p>
              </div>
              <div className="grid grid-cols-3 space-x-14">
                <ProductCount id={cart.product.id} quantity={cart.quantity} />
                <span>${cart.product.price}.00</span>
                <span className="font-semibold">${cart.product.price}.00</span>
              </div>
            </div>
            <Separator className="bg-gray-200 mt-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
