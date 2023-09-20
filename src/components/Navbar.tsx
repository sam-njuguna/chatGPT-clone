"use client";
import { useNavbar } from "@/provider/NavbarProvider";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { isOpen, toggleNavbar } = useNavbar();
  return (
    <div className="flex-shrink-0 flex overflow-x-hidden h-full min-h-0 max-xtablet:hidden ">
      <div
        className={twMerge(
          "supports-[height:100dvh]:h-[100dvh] bg-home-color-nav_bg text-white flex ",
          isOpen ? "w-[260px]" : "w-[40px]"
        )}
      >
        {isOpen && (
          <div
            className={twMerge(
              "w-full h-full",
              isOpen ? "w-full duration-500" : " w-[0%]"
            )}
          ></div>
        )}
        <button
          onClick={toggleNavbar}
          className="bg-red-600 text-white absolute top-0"
        >
          Open
        </button>
      </div>
    </div>
  );
};

export default Navbar;
