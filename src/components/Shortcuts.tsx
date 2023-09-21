"use client";
import { FC } from "react";
import Modal from "./custom/Modal";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PiSquaresFourBold } from "react-icons/pi";
import { useModal } from "@/provider/ModalContext";
interface ShortcutsProps {}

const Shortcuts: FC<ShortcutsProps> = ({}) => {
  const { isKey, openCut, openKey } = useModal();
  return (
    <div className="absolute w-full h-[52px] bottom-0 z-10 left-0 flex justify-end items-end flex-col gap-0 px-4 py-6 max-md:hidden">
      <button
        onClick={openKey}
        className="h-6 w-6 text-[18px] font-medium bg-[#444654] border border-gray-400 text-gray-300 rounded-full flex justify-center items-center"
      >
        ?
      </button>
      {isKey && (
        <Modal
          isOpen={isKey}
          closeModal={openKey}
          className="absolute top-[-108px] w-[175px] overflow-hidden right-0 m-4 rounded-md dark:bg-black drop-shadow-lg dark:text-gray-100 text-gray-700"
        >
          <div className="h-[44px] flex items-center gap-2 cursor-pointer p-2 px-3 hover:bg-[#444654] ">
            <FaArrowUpRightFromSquare className="text-[16px]" />
            <p className="text-sm">Help & FAQ</p>
          </div>
          <div
            className="h-[44px] flex items-center gap-2 cursor-pointer p-2 px-3 hover:bg-[#444654] "
            onClick={openCut}
          >
            <PiSquaresFourBold className="text-[18px]" />
            <p className="text-sm">Keybord shortcuts</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Shortcuts;
