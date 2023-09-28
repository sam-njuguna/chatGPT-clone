"use client";
import { FC, useState } from "react";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PiSquaresFourBold } from "react-icons/pi";
import { UseModal } from "@/provider/ModalContext";
import MdModal from "./custom/MdModal";
interface ShortcutsProps {}

const Shortcuts: FC<ShortcutsProps> = ({}) => {
  const { isKey, keyRef, toggleKey, openKeyModal } = UseModal();

  return (
    <div className="absolute w-full h-[52px] bottom-0 z-10 left-0 flex justify-end items-end flex-col gap-0 px-4 py-6 max-md:hidden">
      <div className="flex relative" ref={keyRef}>
        <button
          onClick={toggleKey}
          className="h-6 w-6 text-[18px] font-medium dark:bg-[#444654] bg-gray-200 border border-black/5 dark:border-gray-400 text-gray-800 dark:text-gray-200 rounded-full flex justify-center items-center"
        >
          ?
        </button>
        {isKey && (
          <MdModal
            isOpen={isKey}
            className="absolute top-[-108px] w-[175px] overflow-hidden right-0 my-4 rounded-md bg-gray-100 dark:bg-black drop-shadow-lg dark:text-gray-100 text-gray-700"
          >
            <div className="h-[44px] flex items-center gap-2 cursor-pointer p-2 px-3  hover:dark:bg-[#444654] bg-gray-200 ">
              <FaArrowUpRightFromSquare className="text-[16px]" />
              <p className="text-sm">Help & FAQ</p>
            </div>
            <div
              className="h-[44px] flex items-center gap-2 cursor-pointer p-2 px-3 hover:dark:bg-[#444654] bg-gray-200 "
              onClick={openKeyModal}
            >
              <PiSquaresFourBold className="text-[18px]" />
              <p className="text-sm">Keybord shortcuts</p>
            </div>
          </MdModal>
        )}
      </div>
    </div>
  );
};

export default Shortcuts;
