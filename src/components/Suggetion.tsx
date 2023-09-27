"use client";
import { Prompt, prompts } from "@/constant";
import { FC, useEffect, useState } from "react";
import { Svg } from ".";
import { arrowPathIcon } from "@/types";
import { UseModal } from "@/provider/ModalContext";
import { twMerge } from "tailwind-merge";

interface SuggestionProps {}

function getRandomPrompts(prompts: Prompt[], count: number): Prompt[] {
  const shuffledPrompts = [...prompts].sort(() => 0.5 - Math.random());
  return shuffledPrompts.slice(0, count);
}

const Suggestion: FC<SuggestionProps> = ({}) => {
  const [randomPrompts, setRandomPrompts] = useState<Prompt[]>([]);
  const [numCardsToShow, setNumCardsToShow] = useState<number>(4);
  const { isNav } = UseModal();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 638) {
        setNumCardsToShow(2);
      } else {
        setNumCardsToShow(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const randomPromptsToShow = getRandomPrompts(prompts, numCardsToShow);
    setRandomPrompts(randomPromptsToShow);
  }, [numCardsToShow]);

  return (
    <ul
      className={twMerge(
        "grid w-full grid-cols-1 max-xphone:grid-cols-1 max-md:grid-cols-2  xtablet:grid-cols-2 gap-3",
        isNav ? "max-xtablet:grid-cols-1" : "max-xtablet:grid-cols-2"
      )}
    >
      {randomPrompts.map((prompt, index) => (
        <li
          key={index}
          className="relative group cursor-pointer max-w-[380px] max-xphone:max-w-full max-xtablet:max-w-full overflow-hidden h-[58px] text-[14px] px-3 flex flex-col items-start justify-center border border-[#565869] group w-full whitespace-nowrap rounded-xl text-left text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 md:whitespace-normal hover:dark:bg-[#444654e8] hover:bg-gray-100"
        >
          <h3 className="font-bold truncate">{prompt.title}</h3>
          <p className="truncate w-full text-gray-400 text-[14px] font-medium leading-none">
            {prompt.description}
          </p>
          <div className="absolute right-0 h-full flex justify-center items-center px-3 invisible group-hover:visible bg-gradient-to-l from-gray-100 from-[60%] dark:from-[#444654]">
            <Svg
              pathData={arrowPathIcon}
              fill="currentColor"
              height="20"
              width="20"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Suggestion;
