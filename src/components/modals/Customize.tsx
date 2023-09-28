"use client";
import { FC, useState } from "react";
import Modal from "../custom/Modal";
import { UseModal } from "@/provider/ModalContext";
import { TbInfoCircle } from "react-icons/tb";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { HiX } from "react-icons/hi";

interface CustomizeProps {}

const Customize: FC<CustomizeProps> = ({}) => {
  const { isCustomModal, setIsCustomModal, closeCustomModal } = UseModal();
  const [instruction, setInstruction] = useState(false);
  const [instruction1, setInstruction1] = useState(false);

  const handleClick1 = () => {
    setInstruction(!instruction);
    setInstruction1(false);
    setIsCustomModal(true);
  };

  const handleClick2 = () => {
    setInstruction1(!instruction1);
    setInstruction(false);
    setIsCustomModal(true);
  };
  return (
    <div className="relative w-full">
      <Modal
        isOpen={isCustomModal}
        closeModal={closeCustomModal}
        className=" max-w-[576px] mx-auto pt-[6rem]  w-full max-xphone:px-2 max-md:px-4"
      >
        <div className="bg-white text-gray-700 dark:bg-home-color-nav_bg  w-full rounded-lg  dark:text-gray-300">
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
                  <div className="absolute right-[-324px] hidden lg:block p-4 rounded-md max-w-[320px] top-0 bg-white dark:bg-home-color-nav_bg text-sm ">
                    <p className="font-semibold text-gray-900 dark:text-gray-200 ">
                      Keyboard Shortcuts
                    </p>
                    <ul className="pl-6 ">
                      <li className="list-disc">Where are you based?</li>
                      <li className="list-disc">What do you do for work?</li>
                      <li className="list-disc">
                        What are your hobbies and interests?
                      </li>
                      <li className="list-disc">
                        What subjects can you talk about for hours?
                      </li>
                      <li className="list-disc">
                        What are some goals you have?
                      </li>
                    </ul>
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
                  <div className="absolute right-[-324px] hidden lg:block p-4 rounded-md max-w-[320px] top-0 bg-white dark:bg-home-color-nav_bg text-sm ">
                    <ul className="pl-6">
                      <li className="list-disc ">
                        How formal or casual should ChatGPT be?
                      </li>
                      <li className="list-disc">
                        How long or short should responses generally be?
                      </li>
                      <li className="list-disc">
                        How do you want to be addressed?
                      </li>
                      <li className="list-disc">
                        Should ChatGPT have opinions on topics or remain
                        neutral?
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between max-sm:flex-col  items-center w-full py-4">
              <div className="flex items-center max-sm:justify-between gap-2 max-sm:w-full max-sm:mb-3 ">
                <p className="text-gray-400 text-sm">Enable for new chats</p>
                <div className="w-[42px] h-[25px] justify-end flex items-center bg-[#10a37f] rounded-full pr-1">
                  <div className="h-[21px] w-[21px] bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center max-sm:flex-col-reverse max-sm:w-full  gap-3">
                <button
                  className=" py-2 px-4 rounded max-sm:w-full dark:bg-[#343541] border bg-transparent duration-200 hover:bg-gray-100 hover:dark:bg-gray-700/40 border-gray-200 dark:border-[#565869]"
                  onClick={closeCustomModal}
                >
                  Cancle
                </button>
                <button className="py-2 px-4 rounded max-sm:w-full text-white bg-[#10a37f] opacity-70">
                  save
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {instruction1 && (
        <div className="h-screen right-0 left-0 w-full flex justify-center items-center fixed inset-0 bg-gray-300/70 dark:bg-gray-600/70 z-50 lg:hidden">
          <div className=" max-w-[550px] mx-auto w-full max-xphone:px-2 max-md:px-4">
            <div className="bg-white text-gray-700 dark:bg-home-color-nav_bg w-full rounded-lg  dark:text-gray-300">
              <div className=" p-4 sm:p-5 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                <p className="text-[18px] font-semibold text-gray-900 dark:text-gray-200 ">
                  Keyboard Shortcuts
                </p>
                <button
                  onClick={() => setInstruction(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-200 text-[20px] duration-200"
                >
                  <HiX />
                </button>
              </div>
              <div className="p-4 sm:p-6 sm:pt-4">
                <ul className="pl-6 ">
                  <li className="list-disc  ">
                    How formal or casual should ChatGPT be?
                  </li>
                  <li className="list-disc">
                    How long or short should responses generally be?
                  </li>
                  <li className="list-disc">
                    How do you want to be addressed?
                  </li>
                  <li className="list-disc">
                    Should ChatGPT have opinions on topics or remain neutral?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {instruction && (
        <div className="h-screen right-0 left-0 w-full flex justify-center items-center fixed inset-0 bg-gray-300/70 dark:bg-gray-600/70 z-50 lg:hidden">
          <div className=" max-w-[550px] mx-auto w-full max-xphone:px-2 max-md:px-4">
            <div className="bg-white text-gray-700 dark:bg-home-color-nav_bg w-full rounded-lg  dark:text-gray-300">
              <div className=" p-4 sm:p-5 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
                <p className="text-[18px] font-semibold text-gray-900 dark:text-gray-200 ">
                  Thought starters
                </p>
                <button
                  onClick={() => setInstruction1(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-200 text-[20px] duration-200"
                >
                  <HiX />
                </button>
              </div>
              <div className="p-4 sm:p-6 sm:pt-4">
                <ul className="pl-6 ">
                  <li className="list-disc">Where are you based?</li>
                  <li className="list-disc">What do you do for work?</li>
                  <li className="list-disc">
                    What are your hobbies and interests?
                  </li>
                  <li className="list-disc">
                    What subjects can you talk about for hours?
                  </li>
                  <li className="list-disc">What are some goals you have?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customize;
