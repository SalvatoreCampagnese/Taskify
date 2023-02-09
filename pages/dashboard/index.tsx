"use client";
import Header from "../../components/header";
import React, { useEffect, useState } from "react";
import { FaAccessibleIcon, FaPlusCircle } from "react-icons/fa";
import BottomMenu from "@/components/bottomMenu";
import ModalSelectTypeTask from "@/components/modalSelectTypeTask";
import TaskModal from "@/components/taskModal";
import ActivityModal from "@/components/activityModal";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import congratsImg from "../../images/congrats.png";
import taskUtility from "../../utilities/tasksUtility";
import { debug } from "console";
export default function Dashboard() {
  let [isAddingNewTask, setIsAddingNewTask] = useState(false);
  let [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  let [isNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false);
  interface TaskData {
    name: string;
    description: string;
    done: boolean;
    icon: any;
  }
  let [tasks, setTasks] = useState<TaskData[]>([]);

  const refreshTasks = () => {
    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
  };

  useEffect(() => {
    refreshTasks();
  }, []);
  const handleChangeStatus = (task: any) => {
    taskUtility.changeStatusTask(task);
    refreshTasks();
  };

  return (
    <div className="bg-primary-white bg-[url('../images/background.png')] bg-cover bg-center bg-no-repeat px-6 max-w-full w-screen h-screen overflow-x-hidden">
      <div
        onClick={() => {
          taskUtility.deleteAllTasks();
          refreshTasks();
        }}
      >
        deleteall
      </div>
      {isAddingNewTask ? (
        <ModalSelectTypeTask
          closeModal={setIsAddingNewTask}
          openTaskModal={setIsNewTaskModalOpen}
          openActivityModal={setIsNewActivityModalOpen}
        ></ModalSelectTypeTask>
      ) : (
        <></>
      )}
      {isNewTaskModalOpen ? (
        <TaskModal
          closeModal={setIsNewTaskModalOpen}
          refreshTasks={refreshTasks}
        />
      ) : (
        <></>
      )}
      {isNewActivityModalOpen ? (
        <ActivityModal closeModal={setIsNewActivityModalOpen}></ActivityModal>
      ) : (
        <></>
      )}
      <Header></Header>
      <div className="px-2 pb-24">
        <p className="mt-6 text-4xl font-bold text-primary-blue">
          Hello Sampa!
        </p>
        {/* COMPONENT LIVELLI - DA ESTRARRE */}
        <div className="mt-4 w-full flex flex-col">
          <div className="w-full flex flex-row justify-between">
            <p className="font-bold text-primary-blue">LEVEL 2</p>
            <p className="text-sm font-bold opacity-50">200XP LEFT</p>
          </div>
          <div className="w-full h-[15px] rounded-xl bg-white drop-shadow-sm">
            <div className="w-3/4 h-[15px] rounded-xl bg-primary-green">
              &nbsp;
            </div>
          </div>
        </div>
        {/* COMPONENT TITLE TODAYS TASKS*/}
        <div className="mt-10 w-full flex flex-row justify-between items-center">
          <p className="text-2xl font-bold text-primary-blue">
            TODAY&lsquo;S TASKS
          </p>
          <button
            className="text-secondary-green flex flex-row gap-2 item-center justify-center border rounded-md px-4 py-2 bg-primary-green border-secondary-green"
            onClick={() => setIsAddingNewTask(true)}
          >
            <FaPlusCircle className="self-center"></FaPlusCircle>
            <p>Add task</p>
          </button>
        </div>

        {/* COMPONENT TASK - DA ESTRARRE */}
        {!tasks.filter((i) => !i.done).length && tasks.length ? (
          <div className="flex justify-center items-center mt-8">
            <Image src={congratsImg} alt="congrats" className="w-2/4" />
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col gap-4 mt-6">
          {tasks
            .filter((i) => !i.done)
            .map((task, index) => {
              return (
                <div
                  key={task.name}
                  className="w-full bg-white rounded-md h-[78px] drop-shadow-sm flex flex-row"
                >
                  <div className="w-1/5 px-2 flex items-center justify-center text-primary-blue opacity-70 text-3xl">
                    {task.icon}
                  </div>
                  <div className="w-4/5 p-2 flex justify-center flex-col">
                    <p className="text-xl font-bold text-primary-blue">
                      {task.name}
                    </p>
                    <p className="text-md opacity-70">{task.description}</p>
                  </div>
                  <div className="w-1/5 flex items-center justify-center">
                    <div className="flex items-center mr-4 mb-2">
                      <input
                        type="checkbox"
                        id="A3-yes"
                        name="A3-confirmation"
                        checked={task.done}
                        className="opacity-0 absolute h-8 w-8"
                        onChange={() => {
                          handleChangeStatus(task);
                        }}
                      />
                      <div className="bg-white border-2 rounded-md border-primary-green w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary-green">
                        <svg
                          className="fill-current hidden w-3 h-3 text-secondary-green pointer-events-none"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fillRule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#058c42"
                              fillRule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Done */}
        {tasks.filter((i) => i.done).length ? (
          <p className="text-xl font-bold text-primary-blue mt-6">DONE</p>
        ) : (
          <></>
        )}
        <div className="flex flex-col gap-4 mt-6">
          {tasks
            .filter((i) => i.done)
            .map((task, index) => {
              return (
                <div
                  key={task.name}
                  className="w-full bg-white rounded-md h-[78px] drop-shadow-sm flex flex-row"
                >
                  <div className="w-1/5 px-2 flex items-center justify-center text-primary-blue opacity-70 text-3xl">
                    {task.icon}
                  </div>
                  <div className="w-4/5 p-2 flex justify-center flex-col">
                    <p className="text-xl font-bold text-primary-blue">
                      {task.name}
                    </p>
                    <p className="text-md opacity-70">{task.description}</p>
                  </div>
                  <div className="w-1/5 flex items-center justify-center">
                    <div className="flex items-center mr-4 mb-2">
                      <input
                        type="checkbox"
                        id="A3-yes"
                        name="A3-confirmation"
                        checked={task.done}
                        className="opacity-0 absolute h-8 w-8"
                        onChange={() => {
                          handleChangeStatus(task);
                        }}
                      />
                      <div className="bg-white border-2 rounded-md border-primary-green w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary-green">
                        <svg
                          className="fill-current hidden w-3 h-3 text-secondary-green pointer-events-none"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fillRule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#058c42"
                              fillRule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <BottomMenu></BottomMenu>
    </div>
  );
}
