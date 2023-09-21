"use client";
import { FC } from "react";
import { Keys, Navbar, Upgrade } from "@/components";
import Shortcuts from "@/components/Shortcuts";
import { useModal } from "@/provider/ModalContext";
interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  const { isCut, isPlus } = useModal();

  return (
    <div className="flex relative overflow-hidden w-full h-full z-0 supports-[min-height:100dvh]:min-h-[100dvh]">
      <Navbar />
      <div className="bg-white flex flex-1 text-home dark:bg-home-color-dark_btn dark:text-home-color-dark_text">
        {children}
      </div>
      <Shortcuts />
      {isCut && (
        <div className="h-screen right-0 left-0 w-full flex justify-center items-center fixed inset-0 bg-gray-300/70 dark:bg-gray-600/70 z-40">
          <Keys />
        </div>
      )}
      {isPlus && (
        <div className="h-screen right-0 left-0 w-full flex justify-center items-center fixed inset-0 bg-gray-300/70 dark:bg-gray-600/70 z-40">
          <Upgrade />
        </div>
      )}
    </div>
  );
};

export default layout;
