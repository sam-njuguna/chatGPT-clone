"use client";
import React from "react";
import { Button } from ".";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex xl:flex-row flex-col gap-10 relative z-0 max-width">
      <div className="pt-60 flex-1">
        <div className="title leading-[1em]">
          Discover our fleet of quality cars today!
        </div>
        <h3 className="sub__title font-light leading-[1.2em] mt-4">
          Streamline your car rental exprience with our effortless booking
          process.
        </h3>
        <Button
          title="Explore Cars"
          className=" bg-primary-blue font-semibold text-[16px] text-white mt-8 "
          type="button"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="xl:h-full xl:w-full relative w-[90%] h-[590px] z-0">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
