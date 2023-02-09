import React from "react";
import logoSrc from "../images/logo.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
export default function CardIntro({ goNextStep }: { goNextStep: any }) {
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
          className="mt-72 w-9/12 h-[56px] bg-secondary-green text-white rounded-md drop-shadow-md flex flex-row justify-center items-center grid grid-cols-2 gap-4"
        >
          <div className="flex justify-start px-8">Let&lsquo;s start!</div>
          <div className="flex justify-end px-8">
            <FaArrowRight></FaArrowRight>
          </div>
        </button>
      </div>
    </>
  );
}
