"use client";
import React from "react";
import { Button } from ".";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="max-width">
      <div className="flex gap-10">
        <div className="pt-36 w-full">
          <div className="title leading-[1em] tracking-tighter">
            Discover our fleet of quality cars today!
          </div>
          <h3 className="sub__title font-light leading-[1.2em] mt-4">
            streamline your car rental exprience with our effortless booking
            process.
          </h3>
          <Button
            title="Explore Cars"
            className=" bg-primary-blue font-semibold text-white mt-8 "
            handleClick={handleScroll}
          />
        </div>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default Hero;
