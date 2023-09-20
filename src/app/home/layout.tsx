"use client";
import { NavbarProvider } from "@/provider";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <NavbarProvider>
      <div className="bg-white flex flex-1 text-home dark:bg-home-color-dark_btn dark:text-home-color-dark_text">
        {children}
      </div>
    </NavbarProvider>
  );
};

export default layout;
