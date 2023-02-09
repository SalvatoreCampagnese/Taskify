import BottomMenu from "@/components/bottomMenu";
import { FaAccessibleIcon, FaArrowLeft } from "react-icons/fa";
import Header from "../../components/header";

export default function Stats() {
  const weeklyStats = [
    {
      name: "Sun",
      percentage: 10,
    },
    {
      name: "Mon",
      percentage: 60,
    },
    {
      name: "Tue",
      percentage: 50,
    },
    {
      name: "Wed",
      percentage: 20,
    },
    {
      name: "Thu",
      percentage: 70,
    },
    {
      name: "Fri",
      percentage: 100,
    },
    {
      name: "Sat",
      percentage: 40,
    },
  ];

  const getHeight = (percentage: number) => {
    if (percentage < 20) return "h-2/6";
    if (percentage < 40) return "h-3/6";
    if (percentage < 60) return "h-4/6";
    if (percentage < 90) return "h-5/6";
    if (percentage == 100) return "h-full";
  };
  const getColor = (percentage: number) => {
    if (percentage < 20) return "bg-primary-red";
    if (percentage < 50) return "bg-primary-orange";
    if (percentage < 90) return "bg-chart-green";
    if (percentage == 100) return "bg-primary-green";
  };
  const getWidth = (percentage: number) => {
    if (percentage < 20) return "w-2/6";
    if (percentage < 40) return "w-3/6";
    if (percentage < 60) return "w-4/6";
    if (percentage < 90) return "w-5/6";
    if (percentage == 100) return "w-full";
  };

  const achievements = [
    {
      name: "Complete 1 Task",
      icon: <FaAccessibleIcon></FaAccessibleIcon>,
      xp: 15,
      progress: 100,
    },
    {
      name: "Complete 10 Tasks",
      icon: <FaAccessibleIcon></FaAccessibleIcon>,
      xp: 150,
      progress: 70,
    },
    {
      name: "Complete 10 Tasks",
      icon: <FaAccessibleIcon></FaAccessibleIcon>,
      xp: 150,
      progress: 70,
    },
    {
      name: "Complete 10 Tasks",
      icon: <FaAccessibleIcon></FaAccessibleIcon>,
      xp: 150,
      progress: 70,
    },
    {
      name: "Complete 10 Tasks",
      icon: <FaAccessibleIcon></FaAccessibleIcon>,
      xp: 150,
      progress: 70,
    },
    {
      name: "Complete 10 Tasks",
      icon: <FaAccessibleIcon></FaAccessibleIcon>,
      xp: 150,
      progress: 70,
    },
    {
      name: "Complete 10 Tasks",
      icon: <FaAccessibleIcon></FaAccessibleIcon>,
      xp: 150,
      progress: 70,
    },
    {
      name: "Complete 10 Tasks",
      icon: <FaAccessibleIcon></FaAccessibleIcon>,
      xp: 150,
      progress: 70,
    },
  ];
  return (
    <div className="bg-primary-white bg-[url('../images/background.png')] bg-cover bg-center bg-no-repeat px-6 max-w-full w-screen h-screen overflow-x-hidden">
      <Header></Header>
      <div className="w-full flex flex-col gap-6">
        <p className="text-primary-blue font-bold text-xl">Weekly stats</p>
        {/* Chart */}
        <div className="w-full drop-shadow-md bg-white rounded-md flex flex-row p-4">
          <div className="w-1/12 flex flex-col gap-10 opacity-50">
            <p>18</p>
            <p>12</p>
            <p>6</p>
            <p></p>
          </div>
          <div className="w-11/12 flex flex-row gap-2">
            {weeklyStats.map((day) => {
              return (
                <div key={day.name} className="w-1/6 h-full flex flex-col">
                  <div className="w-full h-5/6 rounded-full bg-light-gray flex items-end justify-center">
                    <div
                      className={`w-full ${getHeight(
                        day.percentage
                      )} rounded-full ${getColor(day.percentage)}`}
                    >
                      &nbsp;
                    </div>
                  </div>
                  <div className="w-full h-1/6 text-sm opacity-50 text-center flex items-center justify-center">
                    {day.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Achievements */}
        <div className="">
          <p className="text-xl font-bold text-primary-blue py-2">
            Achievements
          </p>
          <div className="flex flex-col gap-4">
            {achievements.map((achievement) => {
              return (
                <div
                  key={achievement.name}
                  className="w-full rounded-md drop-shadow-md flex flex-row bg-white h-[58px] px-4 gap-2"
                >
                  <div className="text-2xl flex justify-center items-center text-primary-blue">
                    {achievement.icon}
                  </div>
                  <div className="flex flex-col w-full justify-start items-start gap-1 py-2">
                    <div className="w-full flex justify-between font-bold text-primary-blue">
                      <span>{achievement.name}</span>
                      <p className="text-sm opacity-70 flex flex-col whitespace-nowrap justify-center items-center text-primary-blue">
                        {achievement.xp} XP
                      </p>
                    </div>
                    <div className="w-full h-[10px] rounded-full bg-light-gray">
                      <div
                        className={`${getWidth(
                          achievement.progress
                        )} h-[10px] rounded-full bg-primary-green`}
                      >
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <BottomMenu defaultTab="stats"></BottomMenu>
    </div>
  );
}
