import { Button, CustomText, Logo } from "@/components";
import { ThemeSwitcher } from "@/provider";
import React from "react";

export default function page() {
  return (
    <div className="w-screen  supports-[min-height:100dvh]:min-h-[100dvh] relative flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[60%_40%] bg-[#00002E]">
      <div className=" relative text-theme-color-light dark:text-theme-color-dark flex flex-1 flex-col gap-4 justify-center px-5 pt-8 md:py-[22px] lg:px-8 max-md:hidden">
        <CustomText />
      </div>
      <nav className="absolute w-full top-8 left-0 md:top-[22px] flex gap-4 items-center px-6 lg:px-8 z-10">
        <h1 className="text-[20px] lg:text-[22px] font-bold cursor-default flex items-center gap-1 text-theme-color-light dark:text-theme-color-dark  max-md:text-black max-md:dark:text-theme-color-dark">
          ChatGPT
          <span className="block w-[20px] h-[20px] rounded-full bg-theme-color-light dark:bg-theme-color-dark max-md:bg-black max-md:dark:bg-theme-color-dark" />
        </h1>
        <ThemeSwitcher />
      </nav>
      <div className="relative max-md:flex-1  md:rounded-none bg-white dark:bg-black h-full flex flex-col justify-center items-center px-5 md:px-6 py-8 md:py-0">
        <h2 className="text-[20px] text-black  dark:text-[#fff] font-bold md:text-[32px]">
          Get Started
        </h2>
        <div className="max-w-[440px] w-full mt-5 max-md:mx-auto">
          <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1 ">
            <Button
              text="Log in"
              href="/auth/login"
              className="font-semibold flex items-center justify-center bg-p-blue text-[#fff] rounded-md w-full hover:bg-p-blue-100 text-base duration-200"
            />
            <Button
              text="Sign up"
              href="/auth/signup"
              className="font-semibold flex items-center justify-center bg-p-blue text-[#fff] rounded-md w-full hover:bg-p-blue-100 text-base duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mt-10 absolute left-1/2 -translate-x-1/2 bottom-4 w-max">
          <Logo />
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
