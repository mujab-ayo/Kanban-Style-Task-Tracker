import React, { useEffect, useState } from "react";
import TaskStartTime from "./TaskStartTime";
import TaskResetTime from "./TaskResetTime";

const TaskStopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const handleWatch = () => {
    const milliSec = String(Math.floor((time % 1000) / 10)).padStart(2, "0");
    const sec = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const min = String(Math.floor(time / 60000)).padStart(2, "0");
    const hrs = String(Math.floor(time / 60000 / 60000)).padStart(2, "0");

    return (
      <span className="font-semibold text-lg mr-auto">
        {hrs} : {min} : {sec} :{" "}
        <span className="text-sm font-medium">{milliSec}</span>
      </span>
    );

    
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="flex justify-center items-center mb-2">
      {handleWatch()}
      <div className="ml-auto flex gap-7">
        <TaskStartTime isRunning={isRunning} setIsRunning={setIsRunning} />
        <TaskResetTime setTime={ setTime} />
      </div>
    </div>
  );
};

export default TaskStopwatch;
