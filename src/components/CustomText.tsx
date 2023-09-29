"use client";
import React, { useEffect, useState } from "react";
import TypingText from "./custom/TypingText";

interface DataItem {
  title: string;
  subtitles: string;
}

const dataArray: DataItem[] = [
  {
    title: "Recommend a dish",
    subtitles: "Quick and Easy Recipe for Weeknight Dinners",
  },
  {
    title: "Sammarize this artical",
    subtitles: "Key Points and Takeaways",
  },
  {
    title: "Plan a trip",
    subtitles: "Choosing Your Destination",
  },
  {
    title: "Write a thank-you note",
    subtitles: "Expressing Gratitude for a Gift",
  },
  {
    title: "Brainstorm names",
    subtitles: "Name Generation Techniques",
  },
];

const CustomText: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [shuffledData, setShuffledData] = useState<DataItem[]>([]);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  useEffect(() => {
    const shuffled = [...dataArray].sort(() => Math.random() - 0.5);
    setShuffledData(shuffled);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledData.length);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, shuffledData]);

  useEffect(() => {
    setVisibleIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="min-h-[100px] pt-[30px]">
      {shuffledData.map((item, index) => (
        <div
          key={index}
          className={index === visibleIndex ? "block" : "hidden"}
        >
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.2]">
            {item.title}
          </h2>
          <p>
            {index === visibleIndex ? (
              <TypingText text={item.subtitles} typingSpeed={50} />
            ) : null}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CustomText;
