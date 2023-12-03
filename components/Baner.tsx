import Image from "next/image";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className="h-[532px] w-full flex flex-row">
      <Image src={"/banner.png"} alt="banner" width={720} height={532} />
      <div className="bg-black flex-1 px-20 text-white flex items-left justify-center flex-col gap-y-6">
        <div className="space-y-3">
          <span className="text-[#38cb89] uppercase">limited edition</span>
          <h3 className="text-3xl font-medium">Hurry up! 30% OFF</h3>
          <p>Find clubs that are right for your game</p>
        </div>
        <div>
          <p>Offer expires in:</p>
        </div>
        <Button className="bg-[#38cb89] text-black rounded-xl w-40">
          Shop now
        </Button>
      </div>
    </section>
  );
};

export default Banner;
