"use client";
import React from "react";

export default function page() {
  return (
    <div className="max-w-3xl mx-auto supports-[height:100dvh]:h-[100dvh] flex justify-center relative ">
      <div className="h-[98px] flex justify-center items-center w-full">
        <div className="flex items-center h-[54px] p-2 sm:h-[50px]  gap-1 sm:p-1 bg-home-color-light_btn dark:bg-home-color-nav_bg rounded-lg">
          <button className="h-full w-[148px] bg-white dark:bg-home-color-dark_btn text-home-color-dark_btn dark:text-home-color-dark_text ">
            GPT-3.5
          </button>
          <button className="h-full flex items-center justify-center gap-1 w-[148px] text-home-color-dark_btn dark:text-[#8e8ea0]">
            GPT-4
          </button>
        </div>
      </div>
      <div className="text-center font-semibold text-[36px] text-gray-200 dark:text-gray-600"></div>
    </div>
  );
}
