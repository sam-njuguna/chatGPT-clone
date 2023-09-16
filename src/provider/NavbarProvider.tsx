"use client";
import { FC, createContext, useContext, useMemo, useState } from "react";

interface NavbarContextProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}
interface NavbarProviderProps {
  children: React.ReactNode;
}

const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

const NavbarProvider: FC<NavbarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const contextValue = useMemo(() => {
    return { isOpen, toggleNavbar };
  }, [isOpen]);
  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
