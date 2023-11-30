import { features } from "@/constants/data";
import Image from "next/image";
import StarRating from "./StarRating";

const Products = () => {
  return (
    <div className="flex flex-row gap-x-6">
      {features.map((feature) => (
        <div key={feature.price} className="w-[270px]">
          <div className="relative">
            <Image
              src={feature.imageUrl}
              alt={feature.imageUrl}
              width={250}
              height={350}
              className="block"
            />
            <span className="absolute font-semibold text-xs top-2 left-4 bg-white text-black px-1 py-1 uppercase">
              Hot
            </span>
          </div>

          <div className="font-semibold ">
            <StarRating rating={feature.stars} starSize={4} />
            <p className="flex flex-wrap">{feature.description}</p>
            <span>${feature.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
