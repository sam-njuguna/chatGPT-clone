"use client";
import { FC, useEffect, useRef, useState } from "react";
import Modal from "../custom/Modal";
import { UseModal } from "@/provider/ModalContext";
import { TbInfoCircle } from "react-icons/tb";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface CustomizeProps {}

const Customize: FC<CustomizeProps> = ({}) => {
  const { isCustomModal, closeCustomModal } = UseModal();
  const [instruction, setInstruction] = useState(false);
  const [instruction1, setInstruction1] = useState(false);

  const handleClick1 = () => {
    setInstruction(!instruction);
  };

  const handleClick2 = () => {
    setInstruction1(!instruction1);
  };
  return (
    <Modal
      isOpen={isCustomModal}
      closeModal={closeCustomModal}
      className=" max-w-[576px] mx-auto  w-full max-xphone:px-2 max-md:px-4"
    >
      <div className="bg-home-color-nav_bg w-full rounded-lg mt-12   text-gray-300">
        <div className="text-[18px] flex items-center gap-2 pt-6 pb-6 px-6 border-b border-white/10">
          <p className="font-semibold">Custom instructions</p>
          <TbInfoCircle size={18} />
        </div>
        <div className=" px-6 pt-6">
          <div className="flex flex-col">
            <p className="mb-2 text-sm">
              What would you like ChatGPT to know about you to provide better
              responses?
            </p>
            <div className="flex flex-col relative">
              <textarea
                name=""
                id=""
                className="h-[200px] p-4 border rounded  dark:bg-gray-800 text-[16px] focus:border focus:border-[#10a37f]"
              />
              <div className="flex justify-between  text-gray-400">
                <p className="text-xs">0/1500</p>
                <button onClick={handleClick1}>
                  {instruction ? (
                    <div className="flex items-center gap-1 text-sm">
                      <p>Hide tips</p>
                      <BsEyeSlash />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-sm">
                      <p>Show tips</p>
                      <BsEye />
                    </div>
                  )}
                </button>
              </div>
              {instruction && (
                <div className="absolute right-[-324px] p-4 rounded-md w-[320px] top-0 bg-home-color-nav_bg ">
                  hello
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col py-6">
            <p className="mb-2 text-sm">
              How would you like ChatGPT to respond?
            </p>
            <div className="flex flex-col relative">
              <textarea
                name=""
                id=""
                className="h-[200px] p-4  border rounded  dark:bg-gray-800 text-[16px] focus:border focus:border-[#10a37f]"
              />
              <div className="flex justify-between  text-gray-400">
                <p className="text-xs">0/1500</p>
                <button onClick={handleClick2}>
                  {instruction ? (
                    <div className="flex items-center gap-1 text-sm">
                      <p>Hide tips</p>
                      <BsEyeSlash />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-sm">
                      <p>Show tips</p>
                      <BsEye />
                    </div>
                  )}
                </button>
              </div>
              {instruction1 && (
                <div className="absolute right-[-324px] p-4 rounded-md w-[320px] top-0 bg-home-color-nav_bg ">
                  hello
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center w-full py-4">
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-sm">Enable for new chats</p>
              <div className="w-[42px] h-[25px] justify-end flex items-center bg-[#10a37f] rounded-full">
                <div className="h-[21px] w-[21px] bg-white rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="py-2 px-4 rounded bg-[#343541] border border-[rgba(86,88,105,1)]"
                onClick={closeCustomModal}
              >
                Cancle
              </button>
              <button className="py-2 px-4 rounded bg-[#10a37f] opacity-70">
                save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Customize;
