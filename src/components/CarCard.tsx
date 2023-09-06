"use client";
import { FC } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import { Button } from ".";
import { HiArrowRight } from "react-icons/hi";

interface CarCardProps {
  car: CarProps;
  onClick: () => void;
}

const CarCard: FC<CarCardProps> = ({ car, onClick }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <>
      <div className="group flex flex-col p-6 justify-center items-start text-black-100 shadow-md rounded duration-200 hover:scale-105">
        <div className=" w-full flex justify-between items-start gap-2">
          <h2 className="text-[22px] leading-[26px] font-bold font-outfit capitalize">
            {make}
            {model}
          </h2>
          <p className="flex my-6 text-[28px] font-extrabold font-outfit">
            <span className="self-start text-[14px] font-semibold">$</span>
            {carRent}
            <span className="self-end text-[14px] font-medium">/day</span>
          </p>
        </div>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/hero.png"
            alt="car-model"
            fill
            priority
            className=" object-contain"
          />
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-gray-700">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/steering-wheel.svg"
                width={20}
                height={20}
                alt="steerin wheel"
              />
              <p className="text-[14px]">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tire.svg" width={20} height={20} alt="tire" />
              <p className="text-[14px]">{drive.toUpperCase()}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/gas.svg"
                width={20}
                height={20}
                alt="steerin wheel"
              />
              <p className="text-[14px]">{city_mpg} MPG</p>
            </div>
          </div>
          <div className="hidden group-hover:flex absolute bottom-0 w-full z-10 ">
            <Button
              title="View More"
              type="button"
              className="w-full bg-primary-blue cursor-pointer text-gray-50 rounded duration-500"
              handleClick={onClick}
              icon={<HiArrowRight />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;
