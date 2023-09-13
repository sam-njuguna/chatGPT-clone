import { Button } from "@/components";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-screen supports-[min-height:100dvh]:min-h-[100dvh] relative flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[60%_40%] bg-blue-950">
      <div className=" relative text-theme-color-dark flex flex-1 flex-col gap-4 justify-center px-5 pt-8 md:py-[22px] lg:px-8 ">
        <nav className="absolute w-full top-8 left-0 md:top-[22px] px-6 lg:px-8">
          <h1 className="text-[20px] lg:text-[22px] font-bold cursor-default flex items-center text-theme-color-dark">
            ChatGPT
            <span className="block w-[20px] h-[20px] rounded-full bg-theme-color-dark" />
          </h1>
        </nav>
      </div>
      <div className="relative rounded-t-[30px] md:rounded-none bg-black h-full flex flex-col justify-center items-center px-5 md:px-6 py-8">
        <h2 className="text-[20px] leading-[1.2] text-[#fff] font-bold md:text-[32px] md:leading-[1.25]">
          Get Started
        </h2>
        <div className="max-w-[440px] w-full mt-5">
          <div className="grid grid-cols-2 gap-x-3 ">
            <Button
              text="Log in"
              href="/login"
              className="font-medium flex items-center justify-center bg-p-blue text-[#fff] rounded-md w-full hover:bg-p-blue-100 text-base"
            />
            <Button
              text="Sign up"
              href="/signup"
              className="font-medium flex items-center justify-center bg-p-blue text-[#fff] rounded-md w-full hover:bg-p-blue-100 text-base"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mt-10 md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-4">
          <div className="flex justify-center md:mb-3 h-[22px]">
            <Image
              src="/chatGPT.png"
              alt="chatGPT"
              height={22}
              width={118}
              className="object-contain"
            />
          </div>
          <div className="py-3 text-xs">
            <a href="" className="text-gray-500 mx-3">
              Terms of use
            </a>
            <span className="text-gray-600">|</span>
            <a href="" className="text-gray-500 mx-3">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
