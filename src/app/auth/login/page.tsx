"use client";
import { Button, Input } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const encodedEmail = encodeURIComponent(encodeURIComponent(email));
    if (email) {
      router.push(`/auth/login/password/${encodedEmail}?`);
    } else {
      return null;
    }
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-center supports-[min-height:100dvh]:min-h-[100dvh] bg-white text-[#2d333a]">
      <div className="w-full absolute top-[30px]  lg:top-[40px]  left-0 flex justify-center items-baseline">
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
      <div className=" max-w-[400px] my-[10%] max-md:my-[15%] tablet:mt-[20%] xl:mt-[13%] px-8 sm:px-10 w-full mx-auto text-center ">
        <h1 className="text-[32px] font-bold mb-4">Welcome back</h1>
        <form
          action=""
          className="w-full mt-6 flex flex-col flex-1 gap-y-6"
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            label="Email address"
            value={email}
            setValue={setEmail}
          />

          <button
            className=" w-full  bg-focus-color-green hover:bg-[#10a36be7] flex rounded justify-center items-center h-[52px] font-medium text-white"
            type="submit"
          >
            Continue
          </button>
        </form>
        <p className=" w-full mt-6">
          Don't have an account?
          <span
            className="text-focus-color-green cursor-pointer pl-2"
            onClick={() => router.push("/auth/signup")}
          >
            Sign up
          </span>
        </p>
        <div className="relative my-6">
          <hr />
          <p className="absolute h-[40px] text-[14px] bg-white rounded-full w-[40px] flex justify-center items-center  transform top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            OR
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <Button
            className=" w-full  bg-transparent hover:bg-[#f1f1f181] flex rounded justify-start items-center text-start h-[52px] font-medium text-[#2d333a] border border-[#c2c8d0]  px-4 gap-x-3"
            text="Continue with Google"
            type="button"
            icon="/google.png"
          />
          <Button
            className=" w-full  bg-transparent hover:bg-[#f1f1f181] flex rounded justify-start items-center text-start h-[52px] font-medium text-[#2d333a] border border-[#c2c8d0]  px-4 gap-x-3"
            text="Continue with Microsoft Account"
            type="button"
            icon="/microsoft.png"
          />
          <Button
            className=" w-full  bg-transparent hover:bg-[#f1f1f181] flex rounded justify-start items-center text-start h-[52px] font-medium text-[#2d333a] border border-[#c2c8d0]  px-4 gap-x-3"
            text="Continue with Apple"
            type="button"
            icon="/apple-logo.png"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center max-tablet:absolute bottom-0 left-0">
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
}
