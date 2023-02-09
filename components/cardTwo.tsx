import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import logoSrc from "../images/logo.png";
export default function CardTwo({ goNextStep }: { goNextStep: any }) {
  return (
    <>
      <div className="h-screen w-screen bg-primary-green flex items-center justify-center flex-col">
        <div className="w-100 h-[100px] mt-20">
          <Image className="object-cover" alt="logo" src={logoSrc} />
        </div>
        <div className="w-screen text-4xl font-bold text-center mt-10">
          Keep calm and stay in control
        </div>
        <div className="w-screen text-md font-medium text-center mt-6">
          You can check your health with just one look.
        </div>

        <button
          onClick={() => {
            goNextStep();
          }}
          className="mt-40 w-[88px] h-[88px] bg-secondary-green text-white rounded-md drop-shadow-md flex flex-row justify-center items-center"
        >
          <FaArrowRight></FaArrowRight>
        </button>
        <div className="flex flex-row items-center justify-center gap-2 w-screen px-10 mt-20">
          <div className="w-1/4 h-[10px] bg-white rounded-xl">&nbsp;</div>
          <div className="w-1/4 h-[10px] bg-secondary-green rounded-xl">
            &nbsp;
          </div>
          <div className="w-1/4 h-[10px] bg-white rounded-xl">&nbsp;</div>
        </div>
      </div>
    </>
  );
}
