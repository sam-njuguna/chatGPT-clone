import React, { useState, useEffect } from "react";
import { BsDot } from "react-icons/bs"; // Import the circle icon from react-icons

interface TypingAnimationProps {
  text: string;
  typingSpeed: number;
}

const TypingText: React.FC<TypingAnimationProps> = ({ text, typingSpeed }) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [showCursor, setShowCursor] = useState<boolean>(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        setShowCursor(currentIndex < text.length); // Hide cursor when text is fully shown
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [text, typingSpeed]);

  return (
    <span className="text-[32px] md:text-[40px] font-medium leading-[1.2]">
      {displayText}
      {showCursor && (
        <BsDot className="inline-block ml-2 text-[32px] md:text-[40px]" />
      )}
    </span>
  );
};

export default TypingText;
