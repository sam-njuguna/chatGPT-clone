"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FC } from "react";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  const { theme } = useTheme();
  return (
    <div className="flex justify-center md:mb-3 h-[22px]">
      {theme === "dark" ? (
        <Image
          src="/chatGPT.png"
          alt="chatGPT"
          height={22}
          width={118}
          className="object-contain opacity-80"
        />
      ) : (
        <Image
          src="/chatGPT2.png"
          alt="chatGPT"
          height={22}
          width={118}
          className="object-contain opacity-60"
        />
      )}
    </div>
  );
};

export default Logo;
