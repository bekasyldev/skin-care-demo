import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { categories } from "@/constants/data";
import Image from "next/image";

const Categories = () => {
  return (
    <section>
      <MaxWidthWrapper className="py-10 h-[1000px]">
        <div className="flex items-center justify-center flex-col gap-y-4">
          <h3 className="text-2xl font-semibold">Shop by Categories</h3>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.id}>
                <Image
                  src={category.imageUrl}
                  width={420}
                  height={400}
                  alt={category.title}
                />
                <p className="text-center my-4 font-medium">{category.title}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Categories;
