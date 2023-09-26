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
  const decodedEmail = param.email
    ? decodeURIComponent(decodeURIComponent(param.email as string))
    : "";

  const handleEditClick = () => {
    router.push(`/auth/login?email=${encodeURIComponent(decodedEmail)}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password) {
      router.push(`/auth/onboarding`);
    } else {
      return null;
    }
  };
  return (
    <div className="w-full relative flex flex-col items-center justify-center supports-[min-height:100dvh]:min-h-[100dvh] bg-white text-[#2d333a]">
      <div className="w-full absolute top-[32px] left-0 flex justify-center items-baseline">
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
      <div className="  max-w-[400px] my-[10%] max-xphone:pt-20 max-md:my-[15%] tablet:mt-[20%] xl:mt-[16.5%] px-8 sm:px-10 w-full mx-auto text-center ">
        <h1 className="text-[32px] leading-[1.2em] font-bold mb-4">
          Enter your password
        </h1>
        <form
          action=""
          className="w-full mt-6 flex flex-col flex-1 gap-y-[14px]"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            value={decodedEmail}
            readOnly={true}
            onClick={handleEditClick}
          />
          <Input
            type="password"
            label="Password"
            value={password}
            setValue={setPassword}
          />
          <a
            href=""
            className="text-focus-color-green text-start text-[14px] font-medium"
          >
            Forgot password?
          </a>
          <button
            className=" w-full mt-2  bg-focus-color-green hover:bg-[#10a36be7] flex rounded justify-center items-center h-[52px] font-medium text-white"
            type="submit"
          >
            Continue
          </button>
        </form>
        <p className="w-full mt-4 text-[14px]">
          Don't have an account?
          <span
            className="text-focus-color-green cursor-pointer pl-2"
            onClick={() => router.push("/auth/signup")}
          >
            Sign up
          </span>
        </p>
        <Link
          href="/home"
          className="flex items-center w-max justify-end duration-200 hover:text-gray-600 gap-1 mt-4"
        >
          Skip <FaArrowRightLong />
        </Link>
      </div>
      <div className="w-full flex items-center justify-center max-lg:absolute bottom-0 left-0">
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
