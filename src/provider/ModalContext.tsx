"use client";
import React, { createContext, useContext, useState, useMemo } from "react";

interface ModalContextType {
  isPlus: boolean;
  isKey: boolean;
  isCut: boolean;
  isOpen: boolean;
  isSetting: boolean;
  openPlus: () => void;
  openKey: () => void;
  openCut: () => void;
  toggleNavbar: () => void;
  openSetting: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);
type ModalProps = {
  children: React.ReactNode;
};
export const ModalProvider: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlus, setIsPlus] = useState(false);
  const [isKey, setIsKey] = useState(false);
  const [isCut, setIsCut] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const openPlus = () => {
    setIsPlus(!isPlus);
    setIsCut(false);
    setIsKey(false);
    setIsSetting(false);
  };
  const openKey = () => {
    setIsKey(!isKey);
    setIsPlus(false);
    setIsSetting(false);

    setIsCut(false);
  };
  const openCut = () => {
    setIsCut(!isCut);
    setIsPlus(false);
    setIsSetting(false);

    setIsKey(false);
  };
  const openSetting = () => {
    setIsSetting(!isSetting);
    setIsPlus(false);
    setIsCut(false);
    setIsKey(false);
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const contextValue = useMemo(() => {
    return {
      isOpen,
      isPlus,
      isKey,
      isCut,
      isSetting,
      toggleNavbar,
      openPlus,
      openKey,
      openCut,
      openSetting,
    };
  }, [isOpen, isPlus, isKey, isCut, isSetting]);
  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
