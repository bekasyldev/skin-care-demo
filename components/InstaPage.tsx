import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { instas } from "@/constants/data";

const InstaPage = () => {
  return (
    <section className="h-[500px]">
      <MaxWidthWrapper>
        <div className="grid grid-rows-2">
          <div></div>
          <div className="flex flex-row">
            {instas.map((insta) => (
              <>
                <Image
                  src={insta.imageUrl}
                  className="w-[240px]"
                  alt={insta.imageUrl}
                  width={270}
                  height={270}
                />
              </>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default InstaPage;
