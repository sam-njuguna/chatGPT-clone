"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
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
  icon?: string | StaticImport;
}

const Button: FC<ButtonProps> = ({
  text,
  href,
  className,
  type,
  disable,
  icon,
  onClick,
}) => {
  const router = useRouter();
  const handleRouting = () => {
    router.push(`${href}`, { scroll: false });
    onClick?.();
  };
  return (
    <button
      type={type}
      className={twMerge("h-[48px] w-full", className)}
      onClick={handleRouting}
      disabled={disable}
    >
      {icon && (
        <span className="h-[20px] w-[20px]">
          <Image
            src={icon}
            alt={icon as string}
            width={20}
            height={20}
            className="object-contain"
          />
        </span>
      )}
      {text}
    </button>
  );
};

export default Button;
