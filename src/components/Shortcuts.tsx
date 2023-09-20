"use client";
import { FC, useState } from "react";
import Modal from "./custom/Modal";

interface ShortcutsProps {}

const Shortcuts: FC<ShortcutsProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute w-full h-[52px] bottom-0 left-0 flex justify-end items-end flex-col gap-0 p-4">
      <button
        onClick={handleModal}
        className="h-8 w-8 text-[20px] font-bold bg-red-400 rounded-full flex justify-center items-center"
      >
        ?
      </button>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          closeModal={handleModal}
          className="absolute right-0 -top-14 dark:bg-black w-[175px] "
        >
          <div className="flex h-[44px]">
            <p>Help and FAQ</p>
          </div>
          <div className="flex  h-[44px]">
            <p>Keyboard shorcuts</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Shortcuts;
