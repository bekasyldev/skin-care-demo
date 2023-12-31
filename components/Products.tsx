import Image from "next/image";
import StarRating from "./product/product-star";
import CartButton from "./CartButton";
import { db } from "@/lib/db";

const Products = async () => {
  const products = await db.product.findMany();
  return (
    <div className="flex flex-row gap-x-6">
      {products.map((product) => (
        <div key={product.id} className="w-[270px]">
          <div className="relative">
            <Image
              src={`/${product.imageUrl}.png`}
              alt={product.imageUrl}
              width={250}
              height={350}
              className="block"
            />
            <span className="absolute font-semibold text-xs top-2 left-4 bg-white text-black px-1 py-1 uppercase">
              Hot
            </span>
            <CartButton id={product.id} />
          </div>

          <div className="font-semibold">
            <StarRating rating={product.stars} starSize={4} />
            <p className="flex flex-wrap">{product.title}</p>
            <span>${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
