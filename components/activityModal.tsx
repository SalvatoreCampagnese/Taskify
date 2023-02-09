import React, { useState } from "react";
import {
  FaArrowRight,
  FaBiking,
  FaBook,
  FaDumbbell,
  FaRunning,
  FaSwimmer,
  FaTimes,
  FaWalking,
} from "react-icons/fa";
import {
  BsFillMoonFill,
  BsFillSunFill,
  BsFillSunriseFill,
  BsFillSunsetFill,
} from "react-icons/bs";

export default function ActivityModal({ closeModal }: { closeModal: any }) {
  let [currentCategory, setCurrentCategory] = useState("Walking");
  let [currentTime, setCurrentTime] = useState("Morning");
  const categories = [
    {
      name: "Walking",
      icon: <FaWalking></FaWalking>,
    },
    {
      name: "Running",
      icon: <FaRunning></FaRunning>,
    },
    {
      name: "Gym",
      icon: <FaDumbbell></FaDumbbell>,
    },
    {
      name: "Swimming",
      icon: <FaSwimmer></FaSwimmer>,
    },
    {
      name: "Bike",
      icon: <FaBiking></FaBiking>,
    },
  ];

  const timeOfDay = [
    {
      name: "Morning",
      icon: <BsFillSunriseFill></BsFillSunriseFill>,
    },
    {
      name: "Afternoon",
      icon: <BsFillSunFill></BsFillSunFill>,
    },
    {
      name: "Evening",
      icon: <BsFillSunsetFill></BsFillSunsetFill>,
    },
    {
      name: "Night",
      icon: <BsFillMoonFill></BsFillMoonFill>,
    },
  ];
  return (
    <div className="fixed overflow-scroll w-full px-8 py-6 h-full bg-primary-white z-10 left-0 flex flex-col">
      <div className="flex justify-end items-end w-full">
        <div
          className="w-[40px] h-[40px] rounded-md bg-light-gray text-dark-gray flex items-center justify-center"
          onClick={() => closeModal(false)}
        >
          <FaTimes></FaTimes>
        </div>
      </div>
      <div className="text-3xl font-bold text-primary-blue pt-4 pb-8">
        Add Activity
      </div>
      {/* Category one */}
      <div className="flex flex-col w-full border-b pb-6">
        <p className="text-xl font-bold text-primary-blue pb-2">
          Activity name
        </p>
        <input
          className="h-[48px] rounded-md border border-primary-blue bg-light-gray px-4 text-primary-blue placeholder-primary-blue font-medium outline-primary-blue"
          placeholder="Insert activity name..."
          type="text"
        ></input>
      </div>
      {/* Icon category */}
      <div className="flex flex-col w-full border-b py-4">
        <p className="text-xl font-bold text-primary-blue pb-2">
          Chose the type of activity
        </p>
        <div className="flex flex-row gap-4 max-w-full overflow-x-scroll">
          {categories.map((category) => {
            return (
              <div
                key={category.name}
                className="flex flex-col items-center"
                onClick={() => setCurrentCategory(category.name)}
              >
                <div
                  className={`rounded-full w-[64px] h-[64px] p-2 bg-light-gray flex justify-center items-center text-2xl text-primary-blue ${
                    currentCategory === category.name
                      ? "border border-2 border-primary-blue"
                      : ""
                  }`}
                >
                  {category.icon}
                </div>
                <p
                  className={`text-primary-blue ${
                    currentCategory === category.name
                      ? `font-bold`
                      : "font-medium"
                  }`}
                >
                  {category.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col w-full border-b py-4">
        <p className="text-xl font-bold text-primary-blue pb-2">Time of day</p>
        <div className="flex flex-row gap-6">
          {timeOfDay.map((time) => {
            return (
              <div
                key={time.name}
                className="flex flex-col items-center"
                onClick={() => setCurrentTime(time.name)}
              >
                <div
                  className={`rounded-md w-[64px] h-[64px] p-2 bg-light-gray flex justify-center items-center text-2xl text-primary-blue ${
                    currentTime === time.name
                      ? "border border-primary-blue"
                      : ""
                  }`}
                >
                  {time.icon}
                </div>
                <p
                  className={`text-primary-blue ${
                    currentCategory === time.name ? `font-bold` : "font-medium"
                  }`}
                >
                  {time.name}
                </p>
              </div>
            );
          })}
        </div>
        <button className="py-2 w-2/4 mt-4 font-bold text-primary-blue underline text-left">
          Add custom time
        </button>
      </div>
      {/* Details */}
      <div className="flex flex-col w-full border-b pb-6">
        <p className="text-xl font-bold text-primary-blue pb-2 pt-6">
          Activity Duration{" "}
          <span className="text-primary-dark opacity-50 text-sm">
            (hours/minutes)
          </span>
        </p>
        <select
          className="h-[48px] rounded-md border border-primary-blue bg-light-gray px-4 text-primary-blue placeholder-primary-blue font-medium outline-primary-blue"
          placeholder="Insert your task name..."
        >
          <option value="30-minutes">Less than 30 minutes</option>
        </select>
      </div>
      {/* Icon category */}
      <button className="mt-6 min-h-[56px] bg-primary-green text-primary-dark rounded-md drop-shadow-md flex flex-row justify-between items-center">
        <div className="flex justify-start px-8 font-bold">Add activity</div>
        <div className="flex justify-end px-8">
          <FaArrowRight></FaArrowRight>
        </div>
      </button>
    </div>
  );
}
