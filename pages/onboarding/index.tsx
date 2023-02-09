"use client";
import React, { useEffect, useState } from "react";
// Cards
import CardOne from "../../components/cardOne";
import CardIntro from "../../components/cardIntro";
import CardTwo from "../../components/cardTwo";
import CardThree from "../../components/cardThree";
export default function Onboarding() {
  let [currentStep, setCurrentStep] = useState(0);
  const goNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <>
      <div className="h-full bg-primary-green">
        {currentStep == 0 && (
          <CardIntro
            goNextStep={() => {
              goNextStep();
            }}
          ></CardIntro>
        )}
        {currentStep == 1 && (
          <CardOne
            goNextStep={() => {
              goNextStep();
            }}
          ></CardOne>
        )}
        {currentStep == 2 && (
          <CardTwo
            goNextStep={() => {
              goNextStep();
            }}
          ></CardTwo>
        )}
        {currentStep == 3 && <CardThree></CardThree>}
        <div className="buttons">
          {currentStep == 0 && <button className="button-intro">a</button>}
          {currentStep !== 0 ? (
            <>
              <button
                className={
                  currentStep == 1 ? "button-step active" : "button-step"
                }
              >
                &nbsp;
              </button>
              <button
                className={
                  currentStep == 2 ? "button-step active" : "button-step"
                }
              >
                &nbsp;
              </button>
              <button
                className={
                  currentStep == 3 ? "button-step active" : "button-step"
                }
              >
                &nbsp;
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
