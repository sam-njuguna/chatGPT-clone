"use client"
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface GeneralProps {
  active: boolean;
}

const General: FC<GeneralProps> = ({ active }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<string>("system");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setSelectedTheme(storedTheme || "system");
  }, []);

  useEffect(() => {
    if (selectedTheme !== "system") {
      setTheme(selectedTheme);
      localStorage.setItem("theme", selectedTheme);
    }
  }, [selectedTheme, setTheme]);

  const handleThemeChange = (selected: string) => {
    setSelectedTheme(selected);
    setIsOpen(false);
  };

  const themes = ["light", "dark", "system"];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return active ? (
    <div className="px-2 py-4 w-full flex flex-col">
      <div className="flex items-center justify-between w-full pb-3 ">
        <p>Theme</p>
        <div className="relative">
          <button
            className="flex items-center justify-center gap-2 px-4 h-9 rounded  hover:bg-[#343541]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {theme}
            {isOpen ? (
              <MdKeyboardArrowUp size={16} />
            ) : (
              <MdKeyboardArrowDown size={16} />
            )}
          </button>
          {isOpen && (
            <div className="origin-top-right absolute z-10 -right-15 mt-0 w-[220px] rounded-md shadow-lg bg-home-color-nav_bg  ring-1 ring-black ring-opacity-5">
              <div
                className="py-1 flex flex-col"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {themes.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleThemeChange(option)}
                    className={` w-full px-4 text-start py-2 text-sm text-gray-300 hover:bg-black/30  ${
                      option === selectedTheme
                        ? " text-white"
                        : " text-gray-200"
                    }`}
                    role="menuitem"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between py-3  border-t border-white/20">
        <p>Clear all chats</p>
        <button className="py-2 px-4 rounded bg-red-500">Clear</button>
      </div>
    </div>
  ) : null;
};

export default General;
