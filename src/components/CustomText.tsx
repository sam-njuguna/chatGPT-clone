"use client";
import React, { useEffect, useState } from "react";
import TypingText from "./custom/TypingText";

interface DataItem {
  title: string;
  subtitles: string[];
}

const dataArray: DataItem[] = [
  {
    title: "Recommend a dish",
    subtitles: ["Subtitle 1-1", "Subtitle 1-2"],
  },
  {
    title: "Sammarize this artical",
    subtitles: ["Subtitle 2-", "Into 3 points"],
  },
  {
    title: "Plan a trip",
    subtitles: ["Subtitle 3-1", "Subtitle 3-2"],
  },
  {
    title: "Write a thank-you note",
    subtitles: ["Subtitle 3-1", "Subtitle 3-2"],
  },
  {
    title: "Brainstorm names",
    subtitles: ["Subtitle 3-1", "Subtitle 3-2"],
  },
];

const CustomText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [currentSubtitles, setCurrentSubtitles] = useState<string[]>([]);
  const [shuffledData, setShuffledData] = useState<DataItem[]>([]);

  useEffect(() => {
    const shuffled = [...dataArray].sort(() => Math.random() - 0.5);
    setShuffledData(shuffled);
    setCurrentIndex(0);
    setCurrentSubtitles(shuffled[0].subtitles);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % shuffled.length;
        setCurrentSubtitles(shuffled[nextIndex].subtitles);
        return nextIndex;
      });
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      {currentIndex !== -1 && (
        <div className="min-h-[100px] pt-[30px]">
          <h1 className="text-[32px] md:text-[40px] font-bold leading-[1.2]">
            {shuffledData[currentIndex].title}
          </h1>
          <TypingText
            textArray={currentSubtitles}
            delayBetweenTexts={10000}
            cursorBlinkSpeed={500} // Cursor blink speed (0.5 seconds)
          />
        </div>
      )}
    </div>
  );
};

export default CustomText;
