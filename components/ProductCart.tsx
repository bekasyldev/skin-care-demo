import { db } from "@/lib/db";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ProductCount from "./prodcut/product-count";
import { X } from "lucide-react";

const ProductCart = async () => {
  const carts = await db.cart.findMany({
    include: {
      product: {
        select: {
          imageUrl: true,
          price: true,
          title: true,
        },
      },
    },
  });

  return (
    <div className="text-[15px]">
      {carts.map((cart) => (
        <div key={cart.id}>
          <div className="flex felx-row justify-between" key={cart.id}>
            <div className="flex flex-row">
              <Image
                className="mb-4"
                src={`/${cart.product.imageUrl}.png`}
                alt={cart.product.imageUrl}
                width={80}
                height={96}
              />
              <div className="flex flex-col ml-6 gap-y-2">
                <p className="flex-wrap font-semibold">{cart.product.title}</p>
                <ProductCount id={cart.id} quantity={cart.quantity} />
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-2">
              <span className="font-semibold">${cart.product.price}.00</span>
              <X size={20} className="text-gray-400" />
            </div>
          </div>
          <Separator className="bg-gray-200 mt-2 mb-8" />
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
