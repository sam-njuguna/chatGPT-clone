"use client";
import { Input } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface pageProps {}

const Email: FC<pageProps> = () => {
  const param = useParams();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const email = param.email
    ? decodeURIComponent(decodeURIComponent(param.email as string))
    : "";

  const handleEditClick = () => {
    router.push(`/auth/signup?email=${encodeURIComponent(email)}`);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password) {
      router.push(`/auth/onboarding/${encodeURIComponent(email)}`);
    } else {
      return null;
    }
  };
  return (
    <div className="w-full relative flex flex-col items-center justify-center supports-[min-height:100dvh]:min-h-[100dvh] bg-white text-[#2d333a]">
      <div className="w-full absolute top-[32px]    left-0 flex justify-center items-baseline">
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
      <div className="  max-w-[400px] my-[10%] max-xphone:pt-20 max-md:my-[15%] tablet:mt-[20%] xl:mt-[15.5%]  px-8 sm:px-10 w-full mx-auto text-center ">
        <h1 className="text-[32px] leading-[1.2em] font-bold ">
          Create your account
        </h1>
        <p className="text-center text-[14px] mt-[10px]">
          Note that phone verification may be required for signup. Your number
          will only be used to verify your identity for security purposes.
        </p>
        <form
          action=""
          className="w-full mt-6 flex flex-col flex-1 gap-y-[14px]"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            value={email}
            readOnly={true}
            onClick={handleEditClick}
          />
          <Input
            type="password"
            label="Password"
            value={password}
            setValue={setPassword}
          />
          <button
            className=" w-full mt-2  bg-focus-color-green hover:bg-[#10a36be7] flex rounded justify-center items-center h-[52px] font-medium text-white"
            type="submit"
          >
            Continue
          </button>
        </form>
        <p className="w-full mt-4 text-[14px]">
          Already have an account?
          <span
            className="text-focus-color-green cursor-pointer pl-2"
            onClick={() => router.push("/auth/signup")}
          >
            Log in
          </span>
        </p>
        <div className="flex items-center relative z-20 justify-end">
          <Link
            href="/home"
            className="flex items-center w-max justify-end duration-200 bg-gray-100  hover:bg-gray-200 rounded-sm p-1 gap-1 mt-4"
          >
            Skip <FaArrowRightLong />
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-center max-lg:absolute bottom-0 max-md:mt-8 left-0">
        <div className="py-3 text-[14px]">
          <a href="" className="text-focus-color-green font-medium mx-3">
            Terms of use
          </a>
          <span className="text-gray-600">|</span>
          <a href="" className="text-focus-color-green font-medium mx-3">
            Privacy policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Email;
