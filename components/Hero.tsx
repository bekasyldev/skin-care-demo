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
        <div className="text-center">
          <h1 className="text-4xl text-shadow-md">
            More than just a game. It's a lifestyle.
          </h1>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
