import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from ".";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className=" w-full absolute z-10">
      <div className="max-width flex justify-between items-center py-4">
        <Link href="" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className=" object-contain"
          />
        </Link>
        <Button
          title=""
          className=" bg-primary-blue font-semibold text-[16px] text-white "
          type="button"
        />
      </div>
    </nav>
  );
};

export default Navbar;
