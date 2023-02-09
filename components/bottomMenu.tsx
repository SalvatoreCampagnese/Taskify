"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaChartPie, FaThLarge, FaUserAstronaut } from "react-icons/fa";

export default function BottomMenu({ defaultTab }: { defaultTab?: string }) {
  let [currentTab, setCurrentTab] = useState(defaultTab || "dashboard");
  const router = useRouter();
  const changeCurrentTab = (currTab: string) => {
    setCurrentTab(currTab);
    router.replace(currTab);
  };
  return (
    <div className="fixed left-0 bottom-0 w-full flex justify-center items-center">
      <div className="h-[56px] w-full bg-primary-white-50 backdrop-blur-sm shadow-top-shadow rounded-tr-xl rounded-tl-xl flex flex-row justify-between items-center px-2">
        <div
          className={`${
            currentTab === "dashboard"
              ? "gap-4 bg-primary-blue text-white rounded-md w-2/4"
              : "w-1/4 text-primary-blue"
          } flex justify-center items-center px-4 py-2`}
          onClick={() => changeCurrentTab("dashboard")}
        >
          <FaThLarge></FaThLarge>
          {currentTab === "dashboard" ? <p>Dashboard</p> : <></>}
        </div>
        <div
          className={`${
            currentTab === "stats"
              ? "gap-4 bg-primary-blue text-white rounded-md w-2/4"
              : "w-1/4 text-primary-blue"
          } flex justify-center items-center px-4 py-2`}
          onClick={() => changeCurrentTab("stats")}
        >
          <FaChartPie></FaChartPie>
          {currentTab === "stats" ? <p>Statistics</p> : <></>}
        </div>
        <div
          className={`${
            currentTab === "userProfile"
              ? "gap-4 bg-primary-blue text-white rounded-md w-2/4"
              : "w-1/4 text-primary-blue"
          } flex justify-center items-center px-4 py-2`}
          onClick={() => changeCurrentTab("userProfile")}
        >
          <FaUserAstronaut></FaUserAstronaut>
          {currentTab === "userProfile" ? <p>User Profile</p> : <></>}
        </div>
      </div>
    </div>
  );
}
