import { useModal } from "@/provider/ModalContext";
import { FC, useState } from "react";
import Modal from "../custom/Modal";
import { HiX } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import General from "../General";
import Control from "../Control";
import { twMerge } from "tailwind-merge";
import { FaDatabase } from "react-icons/fa6";

interface SettingsProps {}

const Settings: FC<SettingsProps> = ({}) => {
  const { isSettingModal, closeSettingModal } = useModal();
  const [active, setActive] = useState(1);

  const handleActive = (tabNumber: number) => {
    setActive(tabNumber);
  };
  return (
    <Modal
      isOpen={isSettingModal}
      closeModal={closeSettingModal}
      className=" max-w-[712px] mx-auto w-full max-xphone:px-2 max-md:px-4"
    >
      <div className="bg-home-color-nav_bg w-full rounded-lg  text-gray-300">
        <div className=" p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
          <p className="text-[18px] font-semibold text-gray-900 dark:text-gray-200 ">
            Settings
          </p>
          <button
            onClick={closeSettingModal}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-200 text-[20px] duration-200"
          >
            <HiX />
          </button>
        </div>
        <div className="h-[370px] flex  max-[765px]:h-full max-[765px]:mt-4 max-[765px]:flex-col  w-full gap-3 px-4">
          <div className="flex flex-col max-[765px]:flex-row  mt-4 max-[765px]:p-1 max-[765px]:bg-black/30 rounded-md">
            <button
              className={twMerge(
                "flex gap-2 py-1.5 px-2 rounded-md h-8 w-[180px] max-[765px]:w-full items-center justify-start max-[765px]:justify-center text-gray-300",
                active === 1 && "bg-[#343541] text-white"
              )}
              onClick={() => handleActive(1)}
            >
              <FiSettings size={16} />
              <div className="text-sm font-medium">General</div>
            </button>
            <button
              className={twMerge(
                "flex gap-2 py-1.5 px-2 rounded-md h-8 w-[180px] max-[765px]:w-full items-center justify-start max-[765px]:justify-center text-gray-300",
                active === 2 && "bg-[#343541] text-white"
              )}
              onClick={() => handleActive(2)}
            >
              <FaDatabase size={16} />
              <div className="text-sm font-medium">Data controls</div>
            </button>
          </div>
          <General active={active === 1} />
          <Control active={active === 2} />
        </div>
      </div>
    </Modal>
  );
};

export default Settings;
