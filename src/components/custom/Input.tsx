"use client";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsEye, BsEyeSlash } from "react-icons/bs";
interface InputProps {
  label?: string;
  disabled?: boolean;
  type: string;
  value: string;
  setValue?: (value: string) => void;
  readOnly?: boolean;
  error?: string | null;
  onClick?: () => void;
}

const Input: FC<InputProps> = ({
  label,
  disabled,
  type,
  value,
  setValue,
  readOnly,
  error,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hover, setHover] = useState(false);
  const enter = () => {
    if (!readOnly) {
      setIsOpen(true);
    }
  };
  const leave = () => {
    setIsOpen(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue && !readOnly) {
      setValue(e.target.value);
    }
  };
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative">
      <div className="w-full h-[52px] group focus: relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          onFocus={enter}
          onBlur={leave}
          className={twMerge(
            "h-full  w-full px-4  border text-[16px] font-medium border-[#c2c8d0] focus:border-focus-color-green group-focus:text-[#2d333a] text-[#2d333a] rounded bg-transparent focus:bg-transparent",
            type === "password" && "pr-[45px]",
            readOnly && "focus:border-[#c2c8d0] cursor-default"
          )}
          required
          readOnly={readOnly}
        />
        <label
          htmlFor={type}
          className={twMerge(
            `absolute  px-1 w-max duration-200  text-${
              isOpen ? "focus-color-green " : "[#2d333a] "
            }`,
            isOpen || value
              ? "-top-2 bg-white text-[15px] left-3 "
              : "top-1/2 transform -translate-y-1/2 left-4 "
          )}
        >
          {label}
        </label>
        {readOnly && (
          <button
            onClick={onClick}
            className="absolute right-0 top-1/2 transform z-10 -translate-y-1/2 px-4 py-1 text-focus-color-green"
          >
            Edit
          </button>
        )}
        {type === "password" && (
          <div
            className="absolute right-0 z-20 top-1/2 transform -translate-y-1/2  "
            onClick={handlePassword}
          >
            <div
              className="w-[44px] h-[52px] flex justify-center items-center hover:bg-gray-300/60 text-gray-500 hover:text-gray-800"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {type === "password" && showPassword ? (
                <BsEyeSlash className="text-[20px]" />
              ) : (
                <BsEye className="text-[20px]" />
              )}
            </div>
            {hover && (
              <div
                className={twMerge(
                  "absolute -right-3 duration-500 ease-in-out -top-[48px] h-[48px] w-[70px] px-2 rounded flex justify-center items-center bg-black text-[#fff] text-xs",
                  hover ? "opacity-100" : "opacity-0"
                )}
              >
                {type === "password" && showPassword
                  ? "Hide password"
                  : "Show password"}
                <div className="absolute left-1/2 -bottom-[6px] transform -translate-x-1/2 rotate-45 bg-black h-3 w-3" />
              </div>
            )}
          </div>
        )}
      </div>
      {error && (
        <p className="absolute top-[54px] text-[14px] list-disc w-full">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
