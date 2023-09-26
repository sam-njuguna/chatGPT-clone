"use client";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { UseModal } from "@/provider/ModalContext";
import { HiPlus } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { TbMessageDots } from "react-icons/tb";
import Image from "next/image";
import MdModal from "./custom/MdModal";
import Link from "next/link";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const {
    isSetting,
    settingRef,
    isNav,
    toggleSetting,
    openSettingModal,
    openCustomModal,
    openUpgradeModal,
    handleNav,
  } = UseModal();

  return (
    <div
      className={twMerge(
        "flex-shrink-0 relative z-30 flex overflow-x-hidden h-full min-h-0 ",
        isNav
          ? "block max-md:absolute max-md:w-full"
          : "hidden max-md:hidden md:block"
      )}
    >
      <div
        className={twMerge(
          "supports-[height:100dvh]:h-[100dvh] overflow-hidden relative w-full max-w-[260px] p-2 bg-home-color-nav_bg text-white flex flex-col"
        )}
      >
        <div className="flex relative items-center gap-2 w-full">
          <div className="h-[44px] w-[192px] pl-4 rounded-md border border-white/20 flex items-center justify-start gap-3 cursor-pointer">
            <HiPlus className="text-gray-300 text-[16px]" />
            <p className="text-white">New Chat</p>
          </div>
          <button
            className="w-11 h-11 flex justify-center items-center rounded-md border border-white/20"
            onClick={handleNav}
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
        <div
          className="w-full relative  border-t border-white/20 pt-2"
          ref={settingRef} // setting ref
        >
          <button
            className={twMerge(
              " h-[44px] px-3 flex items-center justify-between w-full duration-200 hover:bg-[#444654] rounded-md cursor-pointer ",
              isSetting && "hover:bg-transparent"
            )}
            disabled={isSetting && true}
            onClick={openUpgradeModal}
          >
            <div className="flex items-center gap-3">
              <LuUser size={16} />
              <p>Upgrade to plus</p>
            </div>
          </button>
          <button
            className={twMerge(
              "relative z-10 h-[60px] duration-200 hover:bg-[#444654] rounded-md flex w-full items-center justify-between px-3 ",
              isSetting && "bg-[#444654]"
            )}
            onClick={toggleSetting}
          >
            <div className=" flex items-center gap-2">
              <div className=" h-9 w-9 rounded overflow-hidden">
                <Image
                  src="/user.jpg"
                  alt="user"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <p className="font-bold">John Doe</p>
            </div>
            <BsThreeDots
              size={16}
              className="text-gray-400 duration-200 hover:text-gray-200"
            />
          </button>
          {isSetting ? (
            <MdModal
              isOpen={isSetting}
              className={twMerge(
                "absolute -top-[106px] z-20 py-1 left-0 bg-black w-full rounded-md ",
                isSetting
                  ? "opacity-100 duration-200"
                  : "opacity-0 duration-200"
              )}
            >
              <button
                className="flex items-center h-11 w-full justify-star gap-3 px-3 duration-200 hover:bg-[#444654] "
                onClick={openCustomModal}
              >
                <TbMessageDots size={16} />
                <div className="text-sm font-medium">Customize</div>
              </button>
              <button
                className="flex items-center h-11 w-full justify-start gap-3 px-3 duration-200 hover:bg-[#444654] "
                onClick={openSettingModal}
              >
                <FiSettings size={16} />
                <div className="text-sm font-medium"> Settings</div>
              </button>
              <div className="my-1.5 h-px bg-white/20" />
              <Link
                href="/app/"
                className="flex items-center h-11 w-full justify-start gap-3 px-3 duration-200 hover:bg-[#444654] "
              >
                <FiLogOut size={16} />
                <div className="text-sm font-medium"> Log out</div>
              </Link>
            </MdModal>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
