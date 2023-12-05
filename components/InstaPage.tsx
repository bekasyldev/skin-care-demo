import React from "react";
import Image from "next/image";
import { instas } from "@/constants/data";
import Link from "next/link";

const InstaPage = () => {
  return (
    <section className="h-[500px]">
      <div className="grid grid-rows-2 h-full">
        <div className="flex items-center justify-center text-[#6c7275] flex-col gap-y-4">
          <span className="uppercase">newsfeed</span>
          <h3 className="text-3xl text-black">Instagram</h3>
          <p>Follow us on social media for more discount & promotions</p>
          <Link href={"https://www.instagram.com/oyuoiym/"} className=" cursor">
            @oyuoiym
          </Link>
        </div>
        <div className="flex flex-row">
          {instas.map((insta) => (
            <Image
              key={insta.id}
              src={insta.imageUrl}
              alt={insta.imageUrl}
              width={270}
              height={270}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstaPage;
