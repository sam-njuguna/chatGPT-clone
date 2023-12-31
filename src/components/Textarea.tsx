"use client";
import React, { FC, useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import { twMerge } from "tailwind-merge";
import { Svg } from ".";
import { arrowPathIcon } from "@/types";

interface TextareaProps {}

const Textarea: FC<TextareaProps> = ({}) => {
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(true);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    setDisable(newText === "");
  };

  return (
    <div className="w-full relative">
      <TextareaAutosize
        className="max-h-[200px] text-[16px] p-4 max-xtablet:p-[10px] pr-12 bg-white border shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] border-gray-200 dark:border-none dark:bg-[#444654] dark:shadow-xl w-full rounded-xl b0 font-medium dark:text-gray-300 text-gray-700"
        value={text}
        placeholder="Send a message"
        onChange={handleTextChange}
      />
      <button
        disabled={disable}
        className="absolute right-0 bottom-0 p-4 max-xtablet:p-[10px]  max-xtablet:pb-3"
      >
        <div
          className={twMerge(
            "h-8 w-8 justify-center flex items-center rounded",
            disable ? "bg-transparent" : "bg-green-500"
          )}
        >
          <Svg
            className={twMerge(
              disable
                ? "dark:text-gray-400 text-gray-700 opacity-40"
                : "text-white"
            )}
            height="16"
            width="16"
            fill="currentColor"
            pathData={arrowPathIcon}
          />
        </div>
      </button>
    </div>
  );
};

export default Textarea;
