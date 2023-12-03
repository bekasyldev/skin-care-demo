import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const ShopCollection = () => {
  return (
    <section className="h-screen">
      <MaxWidthWrapper className="py-10 px-20">
        <div className="space-y-10">
          <h3 className="font-semibold text-3xl">Shop Collection</h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative">
              <Image
                className="block z-0"
                src={"/junior.png"}
                alt="Junior"
                width={548}
                height={664}
              />
              <div className="absolute bottom-10 left-10 z-10">
                <p className="font-semibold text-3xl">Junior Set</p>
                <Link href={"/product/set"}>Collections</Link>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-5">
              <div className="relative">
                <Image
                  className="block z-0"
                  src={"/men-set.png"}
                  alt="Men's Set"
                  width={548}
                  height={664}
                />
                <div className="absolute bottom-10 left-10 z-10">
                  <p className="font-semibold text-3xl">Men's Set</p>
                  <Link href={"/product/set"}>Collections</Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  className="block z-0"
                  src={"/women-set.png"}
                  alt="Women's Set"
                  width={548}
                  height={664}
                />
                <div className="absolute bottom-10 left-10 z-10">
                  <p className="font-semibold text-3xl">Women's Set</p>
                  <Link href={"/product/set"}>Collections</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ShopCollection;
