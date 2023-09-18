"use client";
import Image from "next/image";
import React from "react";
import { BiSolidLockAlt } from "react-icons/bi";
export default function page() {
  return (
    <div className="max-w-3xl mx-auto supports-[height:100dvh]:h-[100dvh] flex justify-center relative ">
      <div className="h-[98px] flex justify-center items-center w-full">
        <div className="flex items-center h-[54px] p-2 sm:h-[50px]  gap-1 sm:p-1 bg-home-color-light_btn dark:bg-home-color-nav_bg rounded-lg">
          <button className="h-full w-[148px] bg-white dark:bg-home-color-dark_btn rounded-lg font-semibold text-home-color-dark_btn dark:text-home-color-dark_text ">
            GPT-3.5
          </button>
          <button className="h-full flex items-center justify-center gap-1 w-[148px]btn font-semibold text-[#8e8ea0]">
            <div className="h-4 w-4">
              <Image src="/plus.svg" alt="plus" width={16} height={16} />
            </div>
            GPT-4
            <BiSolidLockAlt />
          </button>
        </div>
      </div>
      <div className="text-center font-semibold text-[36px] text-gray-200 dark:text-gray-600"></div>
    </div>
  );
}
