import React from "react";
import { FaTimes } from "react-icons/fa";

export default function ModalSelectTypeTask({
  closeModal,
  openTaskModal,
  openActivityModal,
}: {
  closeModal: any;
  openTaskModal: any;
  openActivityModal: any;
}) {
  return (
    <div className="absolute w-full px-8 h-full bg-primary-blue-60 z-10 left-0 flex justify-center items-center flex-col gap-4">
      <div className="w-full flex justify-end">
        <div
          className="w-[40px] h-[40px] rounded-md bg-white flex items-center justify-center"
          onClick={() => closeModal(false)}
        >
          <FaTimes></FaTimes>
        </div>
      </div>
      <div className="w-full rounded-xl bg-white flex flex-col items-center py-10 px-2 drop-shadow-2xl drop-shadow-secondary-green">
        <p className="text-2xl font-bold text-primary-blue mb-10">
          Choose Task Category
        </p>
        <button
          className="w-4/5 h-[56px] border border-primary-blue rounded-xl text-primary-blue font-bold text-xl mb-4"
          onClick={() => {
            openTaskModal(true);
            closeModal(false);
          }}
        >
          Task
        </button>
        <button
          className="w-4/5 h-[56px] border border-primary-blue rounded-xl text-primary-blue font-bold text-xl"
          onClick={() => {
            openActivityModal(true);
            closeModal(false);
          }}
        >
          Activity
        </button>
      </div>
    </div>
  );
}
