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
    subtitles: [
      "A Flavorful and Healthy Seafood Delight",
      "Quick and Easy Recipe for Weeknight Dinners",
    ],
  },
  {
    title: "Sammarize this artical",
    subtitles: ["Key Points and Takeaways", "Into 3 points"],
  },
  {
    title: "Plan a trip",
    subtitles: ["Choosing Your Destination", "Creating an Itinerary"],
  },
  {
    title: "Write a thank-you note",
    subtitles: ["Expressing Gratitude for a Gift"],
  },
  {
    title: "Brainstorm names",
    subtitles: ["Name Generation Techniques", "Creative Naming Ideas"],
  },
];

const CustomText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [currentSubtitles, setCurrentSubtitles] = useState<string[]>([]);
  const [shuffledData, setShuffledData] = useState<DataItem[]>([]);

  useEffect(() => {
    const shuffled = [...dataArray].sort(() => Math.random() - 0.5);
    console.log("shuffled:", shuffled); // Log the shuffled data
    setShuffledData(shuffled);
    setCurrentIndex(0);
    setCurrentSubtitles(shuffled[0]?.subtitles || []);

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % shuffled.length;
        console.log("nextIndex:", nextIndex); // Log the next index
        setCurrentSubtitles(shuffled[nextIndex]?.subtitles || []);
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
            {shuffledData[currentIndex]?.title || ""}
          </h1>
          <TypingText
            textArray={currentSubtitles}
            delayBetweenTexts={10000}
            cursorBlinkSpeed={500}
          />
        </div>
      )}
    </div>
  );
};

export default CustomText;
