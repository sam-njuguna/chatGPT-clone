import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="w-full text-black-100 mt-5 border-t border-gray-100">
      <div className="max-width pt-16 pb-8 flex justify-between gap-20 ">
        <div className=" w-full max-mobile:w-full max-sm:w-[80%] max-lg:w-1/2 flex flex-col gap-6 ">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className=" text-[16px] leading-[1em]  text-gray-700">
            Carhub 2023 <br /> All rights reserved &copy;
          </p>
        </div>
        <div className="w-full">
          <div className="flex-1 w-full flex-wrap flex md:justify-end  gap-10">
            {footerLinks.map((link) => (
              <div
                className="flex flex-col gap-6 text-[16px] leading-[1em]  min-w-[170px]"
                key={link.title}
              >
                <h3 className="font-outfit font-bold">{link.title}</h3>
                {link.links.map((link) => (
                  <Link
                    href={link.url}
                    className=" text-gray-500"
                    key={link.url}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-width flex justify-between flex-wrap items-center mt-10 mb-4">
        <p>@2023 CarHub. All rights reserved</p>
        <div className="flex flex-1 items-center justify-end gap-10">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
