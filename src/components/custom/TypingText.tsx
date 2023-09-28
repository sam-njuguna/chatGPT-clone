import React, { useEffect, useState } from "react";

interface TypingTextProps {
  textArray: string[];
  delayBetweenTexts: number;
  cursorBlinkSpeed: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  textArray,
  delayBetweenTexts,
  cursorBlinkSpeed,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(!showCursor);
    }, cursorBlinkSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [showCursor, cursorBlinkSpeed]);

  useEffect(() => {
    const text = textArray[currentTextIndex];
    let currentIndex = 0;
    setCurrentText("");
    setShowCursor(true);

    const typingInterval = setInterval(() => {
      setCurrentText((prevText) => {
        if (currentIndex < text.length) {
          currentIndex++;
          return text.slice(0, currentIndex);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            if (currentTextIndex < textArray.length - 1) {
              setCurrentTextIndex(currentTextIndex + 1);
            } else {
              setCurrentTextIndex(0);
            }
          }, delayBetweenTexts);
          setShowCursor(false); // Hide cursor when the text appears
          return prevText;
        }
      });
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentTextIndex, textArray, delayBetweenTexts]);

  return (
    <div className="text-[32px] md:text-[40px] font-medium leading-[1.2]">
      <span>{currentText}</span>
      {showCursor && (
        <span className="block h-6 w-6 rounded-full bg-theme-color-light dark:bg-theme-color-dark " />
      )}
    </div>
  );
};

export default TypingText;
