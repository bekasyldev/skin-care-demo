"use client";
import { useState } from "react";
import { useCounterProduct } from "@/hooks/product";

interface CountProps {
  quantity: number;
  id: string;
}

const ProductCount = ({ quantity, id }: CountProps) => {
  const count = useCounterProduct(quantity);
  const [product, setProduct] = useState<any>(null); // Change `any` to your expected type for product

  return (
    <div className="border border-[#6c7275] text-[#6c7275] w-16 h-7 flex items-center justify-between rounded-[6px]">
      <span
        className="cursor-pointer w-8 h-full flex items-center justify-center"
        onClick={() => {}}
      >
        -
      </span>
      <span className="h-full flex items-center justify-center w-8 text-black">
        {quantity}
      </span>
      <span
        className="cursor-pointer w-8 h-full flex items-center justify-center"
        onClick={() => {
          /* Implement increment logic */
        }}
      >
        +
      </span>
    </div>
  );
};

export default ProductCount;
