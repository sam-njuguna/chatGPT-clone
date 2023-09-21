"use client";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useModal } from "@/provider/ModalContext";
import { HiPlus } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import Modal from "./custom/Modal";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { isOpen, toggleNavbar, openPlus } = useModal();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex-shrink-0 relative flex overflow-x-hidden h-full min-h-0 max-xtablet:hidden ">
      <div
        className={twMerge(
          "supports-[height:100dvh]:h-[100dvh] relative bg-home-color-nav_bg text-white flex flex-col",
          isOpen ? "w-[260px] p-2" : "w-0"
        )}
      >
        <div className="flex items-center gap-2 w-full">
          <div className="h-[44px] w-[192px] pl-4 rounded-md border border-white/20 flex items-center justify-start gap-3 cursor-pointer">
            <HiPlus className="text-gray-300 text-[16px]" />
            <p className="text-white">New Chat</p>
          </div>
          <button
            onClick={toggleNavbar}
            className="w-11 h-11 flex justify-center items-center rounded-md border border-white/20"
          >
            <Image
              src="/bar.svg"
              alt="bar"
              width={16}
              height={16}
              className="object-contain"
            />
          </button>
        </div>
        <div className="flex flex-1 flex-col"></div>
        <div className="w-full  p-2 border-t border-white/20">
          <button
            onClick={openPlus}
            className=" h-[44px] px-3 flex items-center justify-between w-full hover:bg-gray-800 duration-100 rounded-md cursor-pointer "
          >
            <div className="flex items-center gap-3">
              <LuUser size={16} />
              <p>Upgrade to plus</p>
            </div>
            <button className=" w-max h-[20px] flex items-center justify-center text-sm text-gray-800 px-1 rounded bg-yellow-200  ">
              New
            </button>
          </button>
          <div className="relative ">
            <button
              onClick={handleOpen}
              className=" h-[60px] flex w-full items-center justify-between cursor-pointer px-3 duration-100  hover:bg-gray-800 "
            >
              <div className="flex w-full items-center gap-3">
                <div className="h-9 w-9 rounded-sm"></div>
                <p className="text-white font-semibold">Jojn Doe</p>
              </div>
              <BsThreeDots
                size={16}
                className="text-gray-400 duration-200 hover:text-gray-200"
              />
            </button>
            {isOpen && (
              <Modal
                isOpen={open}
                closeModal={handleOpen}
                className="absolute top-[70px] left-0 max-w-[250px] bg-black w-full mx-2"
              >
                <div className="flex items-center">Customize</div>
                <div className="flex items-center">Settings</div>
                <div className="flex items-center">Log out</div>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
