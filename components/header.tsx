import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa";
import logoSrc from "../images/logo.png";

export default function Header() {
  return (
    <>
      <div className="flex flex-row justify-between py-4">
        <Image alt="logo" className="w-auto h-[40px]" src={logoSrc}></Image>
        <div className="w-[40px] h-[40px] rounded-md flex justify-center items-center drop-shadow-sm bg-white text-primary-blue">
          <FaBell></FaBell>
        </div>
      </div>
    </>
  );
}
