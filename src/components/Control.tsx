"use client";
import { FC } from "react";

interface ControlProps {
  active: boolean;
}

const Control: FC<ControlProps> = ({ active }) => {
  return active ? (
    <div className="px-2 py-4 w-full flex flex-col">
      <div className="flex items-center justify-between">
        <p>Chat history & Training</p>
        <div className="w-[42px] h-[25px] justify-end flex items-center bg-[#10a37f] pr-1 rounded-full">
          <div className="h-[21px] w-[21px] bg-white rounded-full" />
        </div>
      </div>
      <p className=" border-b border-black/20 dark:border-white/20 pb-3 text-gray-400 text-xs pt-1">
        Save new chats on this browser to your history and allow them to be used
        to improve our models. Unsaved chats will be deleted from our systems
        within 30 days. This setting does not sync across browsers or devices.
        <span className="ml-1 underline ">Learn more</span>
      </p>
      <div className="flex border-b items-center justify-between border-black/20 dark:border-white/20 py-3">
        <p>Shared links</p>
        <button className="py-2 px-4 rounded dark:bg-[#343541] border bg-transparent border-gray-200 dark:border-[#565869]">
          Manage
        </button>
      </div>
      <div className=" border-b border-black/20 dark:border-white/20 flex items-center justify-between  py-3">
        <p>Export data</p>
        <button className=" py-2 px-4 rounded dark:bg-[#343541] border bg-transparent border-gray-200 dark:border-[#565869]">
          Export
        </button>
      </div>
      <div className="flex items-center justify-between py-3">
        <p>Delete account</p>
        <button className="py-2 px-4 rounded bg-[#b91c1c] text-gray-50">
          Delete
        </button>
      </div>
    </div>
  ) : null;
};

export default Control;
