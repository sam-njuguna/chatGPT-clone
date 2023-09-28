"use client";
import { shortcuts } from "@/constant";
import { FC } from "react";
import Modal from "../custom/Modal";
import { HiX } from "react-icons/hi";
import { UseModal } from "@/provider/ModalContext";

interface KeysProps {}

const Keys: FC<KeysProps> = ({}) => {
  const { isKeyModal, closeKeyModal } = UseModal();
  return (
    <Modal
      isOpen={isKeyModal}
      closeModal={closeKeyModal}
      className=" max-w-[928px] mx-auto w-full px-2 xphone:px-4 md:px-8 "
    >
      <div className="bg-white text-gray-700 dark:bg-home-color-nav_bg w-full rounded-lg dark:text-gray-300">
        <div className=" p-4 sm:p-5 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
          <p className="text-[18px] font-semibold text-gray-900 dark:text-gray-200 ">
            Keyboard Shortcuts
          </p>
          <button
            onClick={closeKeyModal}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-200 text-[20px] duration-200"
          >
            <HiX />
          </button>
        </div>
        <ul className="grid grid-cols-2 max-sm:grid-cols-1 gap-x-8 p-4 sm:p-6">
          {shortcuts.map((shortcut, index) => (
            <li
              key={index}
              className="h-[48px] text-gray-600 dark:text-gray-300 text-sm  w-full flex items-center justify-between"
            >
              <p className="font-medium"> {shortcut.action}</p>
              <div className="flex items-center gap-2">
                {shortcut.keyCombination.map((key, keyIndex) => (
                  <span
                    key={keyIndex}
                    className=" border rounded min-w-[32px] h-[32px]  flex justify-center items-center p-2 border-black/10 dark:border-white/10"
                  >
                    {key.name}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default Keys;
