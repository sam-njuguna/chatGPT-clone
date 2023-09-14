"use client";
import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  label: string;
  disabled?: boolean;
  type: string;
  value: string;
  setValue: (value: string) => void;
  readOnly?: boolean;
}

const Input: FC<InputProps> = ({
  label,
  disabled,
  type,
  value,
  setValue,
  readOnly,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const enter = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    if (Boolean(value)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [value]);

  return (
    <div className="w-full h-[52px] group focus:text-[#10a23c] relative">
      <input
        type={type}
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={enter}
        className=" h-full w-full px-4 border text-[16px] border-zinc-400/60 focus:border-[#10a23c] group-focus:text-[#2d333a] text-[#2d333a] rounded bg-transparent focus:bg-transparent"
        required
        readOnly={readOnly}
      />
      <label
        htmlFor={type}
        className={twMerge(
          "absolute  px-1 w-max duration-200",
          isOpen
            ? "-top-2 bg-white text-[15px]  left-3 "
            : "top-1/2 transform -translate-y-1/2 left-4"
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
