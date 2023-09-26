"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface pageProps {}

const Email: FC<pageProps> = () => {
  const param = useParams();
  const decodedEmail = param.email
    ? decodeURIComponent(decodeURIComponent(param.email as string))
    : "";

  return (
    <div className="w-full relative flex flex-col pt-[174px]  supports-[min-height:100dvh]:min-h-[100dvh] bg-white text-[#2d333a]">
      <div className="w-full absolute top-[32px]  left-0 flex justify-center items-baseline">
        <div className="h-8 w-8">
          <Image
            src="/openai.png"
            alt="icon"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      </div>
      <div className="  max-w-[400px]  px-8 sm:px-10 w-full mx-auto text-center ">
        <h1 className="text-[32px] leading-[1.2em] font-bold mb-4">
          Verify your email
        </h1>
        <p className="text-[16px] font-medium">
          We sent an email to <br /> <span> {decodedEmail} </span> <br />
          Click the link inside to get started.
        </p>
        <div className="w-full mt-6 flex flex-col flex-1 gap-y-[14px]">
          <button
            className=" w-full mt-2  bg-[#ececf1] duration-200 hover:bg-[#e0e0e6] flex rounded justify-center items-center gap-x-2 h-[52px] font-medium text-[#353740]"
            type="submit"
          >
            <div className="h-4 w-4">
              <Image
                src="/gmail.png"
                alt=""
                width={16}
                height={16}
                className="object-contain"
              />
            </div>
            Open Gmail
          </button>
          <a href="" className="text-focus-color-green text-center text-[14px]">
            Resend email
          </a>
          <Link
            href="/home"
            className="flex items-center w-max justify-end duration-200 hover:text-gray-600 gap-1 mt-4"
          >
            Skip <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Email;
