"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  text: string;
  href?: string;
  className: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disable?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  href,
  className,
  type,
  disable,
  onClick,
}) => {
  const router = useRouter();
  const handleRouting = () => {
    router.push(`${href}`, { scroll: false });
  };
  return (
    <button
      type={type}
      className={twMerge("h-[48px] w-full", className)}
      onClick={handleRouting}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
