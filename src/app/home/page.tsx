"use client";
import { Suggestion, Svg, Textarea } from "@/components";
import { UseModal } from "@/provider/ModalContext";
import { flashPathIcon, plusPathIcon } from "@/types";
import Image from "next/image";
import { FC, useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { HiInformationCircle, HiPlus } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import { MdKeyboardArrowUp } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface pageProps {}

const Home: FC<pageProps> = ({}) => {
  const { openKeyModal, isNav, isNavM, handleNav, handleNavM } = UseModal();
  const [gpt3, setGpt3] = useState(false);
  const [gpt4, setGpt4] = useState(false);
  const enterGpt3 = () => {
    setGpt3(!gpt3);
    setGpt4(false);
  };
  const enterGpt4 = () => {
    setGpt4(!gpt4);
    setGpt3(false);
  };
  const openModal = () => {
    setGpt4(false);
    openKeyModal();
  };

  return (
    <div className="w-full supports-[height:100dvh]:h-[100dvh] relative  ">
      <div className="max-w-3xl w-full mx-auto flex flex-col justify-center">
        <div className="md:hidden h-[44px] border-b border-white/20 flex justify-center items-center">
          <div className="w-full pr-2 flex justify-between items-center">
            {!isNavM && (
              <button
                className="w-10 h-10 flex justify-center items-center rounded hover:border-white hover:border-2  dark:text-gray-300 "
                onClick={handleNavM}
              >
                <HiBars3 size={24} />
              </button>
            )}
            <p className="font-medium">New Chat</p>
            <a href="#new">
              <HiPlus size={24} className="text-gray-300" />
            </a>
          </div>
        </div>
        <div className="max-md:px-2 pt-2">
          <div className="h-[98px] relative max-md:h-full flex justify-center items-center w-full">
            <div className="flex  relative items-center h-[54px] max-xphone:w-full p-1 sm:h-[50px]  gap-1 sm:p-1 bg-home-color-light_btn dark:bg-home-color-nav_bg rounded-lg">
              <button
                className={twMerge(
                  "h-full flex gap-2 items-center justify-center w-[148px] max-md:w-full  bg-white dark:bg-gray-700/90 text-gray-900 dark:text-gray-100 border border-black/10 dark:border-[#4E4F60] shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] rounded-lg font-semibold",
                  !gpt3 && "group"
                )}
                onClick={enterGpt3}
              >
                <Svg
                  className="text-green-500"
                  width="16"
                  height="16"
                  fill="none"
                  pathData={flashPathIcon}
                />
                GPT-3.5
                <div className="block md:hidden">
                  {gpt3 ? (
                    <MdKeyboardArrowUp size={16} />
                  ) : (
                    <HiInformationCircle size={16} />
                  )}
                </div>
              </button>

              <button
                className="h-full flex items-center justify-center gap-2 w-[148px] max-xphone:w-full btn font-semibold text-[#8e8ea0]"
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
                {gpt4 && (
                  <MdKeyboardArrowUp size={16} className="block md:hidden" />
                )}
              </button>
              <div
                className={twMerge(
                  "absolute w-full left-0 flex z-20 flex-col gap-2 font-semibold rounded-lg dark:bg-home-color-nav_bg px-5 py-4 whitespace-pre-line shadow-xl bg-white   top-[64px]",
                  "border border-gray-100 dark:border-none",
                  gpt3 ? "block" : "hidden group-hover:block"
                )}
              >
                <h3 className="text-gray-900 dark:text-white text-sm sm:text-base font-bold">
                  Our fastest model,great for most everyday tasks
                </h3>
                <p className="text-gray-500 text-xs mt-3">
                  Avalable to Free and Plus users.
                </p>
              </div>

              <div
                className={twMerge(
                  "absolute w-full  left-0 flex z-20 flex-col gap-2 font-semibold rounded-lg dark:bg-home-color-nav_bg px-5 py-4 whitespace-pre-line shadow-xl bg-white border border-black/10 dark:border-none  top-[64px]",
                  gpt4 ? "block" : "hidden group-hover:block",
                  "border border-gray-100 dark:border-none"
                )}
              >
                <h3 className="text-gray-900 dark:text-white text-sm sm:text-base font-bold">
                  Our most capable model, great for tasks that require
                  creativity and advanced reasoning.
                </h3>
                <p className="text-gray-500 text-xs  py-3">
                  Available exclusively to Plus users
                </p>
                <p className="text-gray-500 text-xs">
                  GPT-4 currently has a cap of 25 messages every 3 hours.
                </p>
                <button
                  className="w-full rounded h-[42px] flex items-center justify-center text-xs text-white font-bold bg-[#ab68ff] duration-100  hover:brightness-90 mt-3"
                  onClick={openModal}
                >
                  Upgrade to ChatGPT Plus
                </button>
              </div>
            </div>
          </div>
          <div className="text-4xl h-[56px] flex justify-center items-center  font-bold text-center text-gray-200 dark:text-[#444654]">
            ChatGPT
          </div>
        </div>

        <div className="absolute w-full left-0 bottom-0 pb-6 max-md:pb-3">
          <div className="max-w-3xl mx-auto max-md:px-0 max-xtablet:px-4 max-lg:px-6 flex flex-col gap-3 justify-center ">
            <div className="max-md:px-2">
              <Suggestion />
            </div>
            <div
              className="text-gray-600  dark:text-gray-300 max-md:border-t pt-2 border-white/20"
              id="new"
            >
              <div className="flex flex-col gap-3 max-md:gap-2  max-md:px-2">
                <Textarea />
                <p className="text-xs text-center">
                  Free Research Preview. ChatGPT may produce inaccurate
                  information about people, places, or facts.
                  <span className="underline ml-1">
                    ChatGPT August 3 Version
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="absolute top-2 max-md:hidden left-2"
        onClick={handleNav}
      >
        {!isNav && (
          <p className="w-11 h-11 flex justify-center items-center rounded-md border border-white/20">
            <Image
              src="/bar.svg"
              alt="bar"
              width={16}
              height={16}
              className="object-contain"
            />
          </p>
        )}
      </button>
    </div>
  );
};

export default Home;
