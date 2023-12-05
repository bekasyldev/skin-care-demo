"use client";

import { useState } from "react";
import { features } from "@/constants/data";
import Image from "next/image";
import StarRating from "./StarRating";
import { Button } from "./ui/button";
interface Feature {
  imageUrl: string;
  stars: number;
  description: string;
  price: number;
  // Add any other fields present in your features data
}

const Products: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="flex flex-row gap-x-6">
      {features.map((feature: Feature, index: number) => (
        <div
          key={index}
          className="w-[270px]"
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
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
            {hoveredCard === index && (
              <Button className="text-white bg-black bottom-4 left-8 w-48 rounded-xl absolute hover:bg-zinc-900">
                Add to cart
              </Button>
            )}
          </div>

          <div className="font-semibold">
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
