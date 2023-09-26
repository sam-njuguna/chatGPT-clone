"use client";
import { Suggestion, Svg, Textarea } from "@/components";
import { UseModal } from "@/provider/ModalContext";
import { flashPathIcon, plusPathIcon } from "@/types";
import { FC, useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface pageProps {}

const Home: FC<pageProps> = ({}) => {
  const { openKeyModal } = UseModal();
  const [gpt3, setGpt3] = useState(false);
  const [gpt4, setGpt4] = useState(false);
  const enterGpt3 = () => {
    setGpt3(!gpt3);
  };
  const leaveGpt3 = () => {
    setGpt3(false);
  };
  const enterGpt4 = () => {
    setGpt4(!gpt4);
  };
  const leaveGpt4 = () => {
    setGpt4(false);
  };
  return (
    <div className="w-full supports-[height:100dvh]:h-[100dvh] relative  ">
      <div className="max-w-3xl w-full mx-auto max-xtablet:px-2 flex flex-col justify-center">
        <div className="h-[98px] flex justify-center items-center w-full">
          <div className="flex  relative items-center h-[54px] max-xphone:w-full p-1 sm:h-[50px]  gap-1 sm:p-1 bg-home-color-light_btn dark:bg-home-color-nav_bg rounded-lg">
            <button
              className={twMerge(
                "h-full flex gap-2 items-center justify-center w-[148px] max-xphone:w-full  bg-white dark:bg-[#444654] border border-gray-400 rounded-lg font-semibold text-home-color-dark_btn dark:text-home-color-dark_text ",
                "border-black/10 shodow-[o_1px_7px_rgba(0,0,0,0,0.6)] "
              )}
            >
              <Svg
                className="text-green-500"
                width="16"
                height="16"
                fill="none"
                pathData={flashPathIcon}
              />
              GPT-3.5
            </button>

            <button
              className="h-full group flex items-center justify-center gap-2 w-[148px] max-xphone:w-full btn font-semibold text-[#8e8ea0]"
              onClick={enterGpt4}
            >
              <div className="h-4 w-4">
                <Svg
                  className=" text-[#8e8ea0] duration-200 group-hover:text-purple-400"
                  width="16"
                  height="16"
                  fill="currentColor"
                  pathData={plusPathIcon}
                />
              </div>
              GPT-4
              <BiSolidLockAlt className=" text-[16px]" />
            </button>
          </div>
        </div>
        <div className="text-4xl h-[56px] flex justify-center items-center  font-bold text-center text-gray-200 dark:text-[#444654]">
          ChatGPT
        </div>
      </div>

      <div className="absolute w-full left-0 bottom-0 pb-6">
        <div className="max-w-3xl mx-auto max-xphone:px-2 max-xtablet:px-4 max-lg:px-6 flex flex-col gap-4 justify-center ">
          <Suggestion />
          <div className="text-gray-600 flex flex-col gap-3 dark:text-gray-300">
            <Textarea />
            <p className="text-xs text-center">
              Free Research Preview. ChatGPT may produce inaccurate information
              about people, places, or facts.
              <span className="underline ml-1">ChatGPT August 3 Version</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
