"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

interface DropdownContextType {
  isKey: boolean;
  isSetting: boolean;
  isKeyModal: boolean;
  isSettingModal: boolean;
  isCustomModal: boolean;
  isUpgradeModal: boolean;
  isNav: boolean;
  isNavM: boolean;
  toggleKey: () => void;
  toggleSetting: () => void;
  openKeyModal: () => void;
  closeKeyModal: () => void;
  openSettingModal: () => void;
  closeSettingModal: () => void;
  openCustomModal: () => void;
  closeCustomModal: () => void;
  openUpgradeModal: () => void;
  closeUpgardeModal: () => void;
  handleNav: () => void;
  handleNavM: () => void;
  keyRef: React.RefObject<HTMLDivElement> | null;
  settingRef: React.RefObject<HTMLDivElement> | null;
}

const DropdownContext = createContext<DropdownContextType | null>(null);
type Prop = {
  children: React.ReactNode;
};
export const ModalProvider: React.FC<Prop> = ({ children }) => {
  const [isKey, setIsKey] = useState(false);
  const [isKeyModal, setIsKeyModal] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const [isSettingModal, setIsSettingModal] = useState(false);
  const [isCustomModal, setIsCustomModal] = useState(false);
  const [isUpgradeModal, setIsUpgradeModal] = useState(false);
  const [isNav, setIsNav] = useState(true);
  const [isNavM, setIsNavM] = useState(false);

  // Track the closed state

  const keyRef = useRef<HTMLDivElement | null>(null);
  const settingRef = useRef<HTMLDivElement | null>(null);

  const toggleKey = () => {
    setIsKey(!isKey);
    setIsSetting(false);
  };
  const toggleSetting = () => {
    setIsSetting(!isSetting);
    setIsKey(false);
  };

  const openKeyModal = () => {
    setIsKeyModal(true);
    toggleKey();
  };

  const closeKeyModal = () => {
    setIsKeyModal(false);
  };
  const openSettingModal = () => {
    setIsSettingModal(true);
    toggleSetting();
  };

  const closeSettingModal = () => {
    setIsSettingModal(false);
  };
  const openCustomModal = () => {
    setIsCustomModal(true);
    toggleSetting();
  };

  const closeCustomModal = () => {
    setIsCustomModal(false);
  };
  const openUpgradeModal = () => {
    setIsUpgradeModal(true);
    toggleSetting();
    toggleKey();
  };

  const closeUpgardeModal = () => {
    setIsUpgradeModal(false);
  };

  const handleNav = () => {
    setIsNav(!isNav);
    setIsNavM(false);
  };
  const handleNavM = () => {
    setIsNavM(!isNavM);
    setIsNav(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        isKey &&
        keyRef.current &&
        !keyRef.current.contains(event.target as Node)
      ) {
        setIsKey(false);
        setIsSetting(false);
      }
    };

    if (isKey) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isKey]);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        isSetting &&
        settingRef.current &&
        !settingRef.current.contains(event.target as Node)
      ) {
        setIsKey(false);
        setIsSetting(false);
      }
    };

    if (isSetting) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSetting]);

  const contextValue = {
    isKey,
    isSetting,
    isKeyModal,
    isSettingModal,
    isCustomModal,
    isUpgradeModal,
    isNav,
    isNavM,
    toggleKey,
    toggleSetting,
    openKeyModal,
    closeKeyModal,
    openSettingModal,
    closeSettingModal,
    openCustomModal,
    closeCustomModal,
    openUpgradeModal,
    closeUpgardeModal,
    handleNav,
    handleNavM,
    keyRef,
    settingRef,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      {children}
    </DropdownContext.Provider>
  );
};

export const UseModal = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }

  return context;
};
