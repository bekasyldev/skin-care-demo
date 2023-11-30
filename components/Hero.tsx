import React from "react";
import { Button } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Hero = () => {
  return (
    <section
      className="hero h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/ball.png')" }}
    >
      <MaxWidthWrapper className="flex py-24 items-center justify-between flex-row">
        <div className="text-left space-y-4">
          <h1 className="text-7xl font-meduim text-shadow-md">
            More than <br /> just a game. <br /> It's a lifestyle.
          </h1>
          <p>
            Whether you’re just starting out, have played <br /> your whole life
            or you're a Tour pro, <br /> your swing is like a fingerprint.
          </p>
          <Button className="bg-[#38cb89] text-black px-10 rounded-xl">
            Shopping now
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
