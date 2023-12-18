"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";

interface CountProps {
  quantity: number;
  id: string;
}

const ProductCount = ({ quantity, id }: CountProps) => {
  const [product, setProduct] = useState<any>(null); // Change `any` to your expected type for product

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProduct = await db.product.findUnique({
          where: {
            id,
          },
        });
        setProduct(fetchedProduct);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="border border-black w-20 p-1 rounded-xl px-3 space-x-2">
      <span>-</span>
      <span>{quantity}</span>
      <span>+</span>
    </div>
  );
};

export default ProductCount;
