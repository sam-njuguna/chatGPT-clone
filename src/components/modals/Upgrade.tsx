"use client";
import { FC } from "react";
import Modal from "../custom/Modal";
import { UseModal } from "@/provider/ModalContext";
import { HiX } from "react-icons/hi";
import { LiaCheckCircle } from "react-icons/lia";

interface UpgradeProps {}

const Upgrade: FC<UpgradeProps> = ({}) => {
  const { isUpgradeModal, closeUpgardeModal } = UseModal();
  return (
    <Modal
      isOpen={isUpgradeModal}
      closeModal={closeUpgardeModal}
      className=" max-w-[652px] max-[639px]:max-w-[310px] mx-auto w-full max-xphone:px-2 px-4"
    >
      <div className="bg-white text-gray-700 dark:bg-home-color-nav_bg w-full rounded-lg  dark:text-gray-300">
        <div className=" p-4 sm:p-5 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
          <p className="text-[16px] font-bold text-gray-900 dark:text-gray-50 ">
            Your plan
          </p>
          <button
            onClick={closeUpgardeModal}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-200 text-[20px] duration-200"
          >
            <HiX />
          </button>
        </div>
        <div className="flex max-[639px]:flex-col-reverse">
          <div className="flex flex-col p-4 max-[639px]:border-t  sm:border-r border-black/10 dark:border-white/10  w-full">
            <h3 className="text-[20px] font-bold text-gray-900 dark:text-gray-50 ">
              Free plan
            </h3>
            <button className="h-[44px] mt-3 w-full rounded bg-gray-300 dark:bg-gray-500 text-gray-800 font-semibold cursor-not-allowed">
              Your current plan
            </button>
            <div className="flex flex-col mt-3 gap-y-2">
              <div className="flex items-start gap-1.5">
                <LiaCheckCircle size={20} className=" text-gray-500" />
                <p className="text-sm">Access to our GPT-3.5 model</p>
              </div>
              <div className="flex items-start gap-1.5 ">
                <LiaCheckCircle size={20} className=" text-gray-500" />
                <p className="text-sm">Standard response speed</p>
              </div>
              <div className="flex items-start gap-1.5">
                <LiaCheckCircle size={20} className=" text-gray-500" />
                <p className="text-sm">Regular model updates</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] font-bold text-gray-900 dark:text-gray-50 ">
                ChatGPT Plus
              </h3>
              <p className="text-[20px] font-bold text-gray-900 dark:text-gray-500 ">
                USD $20/mo
              </p>
            </div>
            <button className="h-[44px]  mt-3  w-full rounded bg-[#10a37f] text-gray-50 font-semibold">
              Upgrade to plus
            </button>
            <div className="flex flex-col mt-3 gap-y-2">
              <div className="flex items-start gap-1.5">
                <LiaCheckCircle size={20} className=" text-[#10a37f]" />
                <p className="text-sm">
                  Access to GPT-4, our most capable model
                </p>
              </div>
              <div className="flex items-start gap-1.5">
                <LiaCheckCircle size={20} className=" text-[#10a37f]" />
                <p className="text-sm">Faster response speed</p>
              </div>
              <div className="flex items-start gap-1.5">
                <div className="h-5 w-5">
                  <LiaCheckCircle className="text-[20px] text-[#10a37f]" />
                </div>
                <p className="text-sm">
                  Exclusive access to features like Plugins and Advanced Data
                  Analysis
                </p>
              </div>
            </div>
            <p className="mt-4 cursor-pointer underline">
              I need help with a billing issue
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Upgrade;
