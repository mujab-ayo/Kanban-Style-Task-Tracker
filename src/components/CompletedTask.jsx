import React, { useState } from 'react'
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";
import TaskStopwatch from "./TaskStopwatch";


const CompletedTask = () => {
  const [completed, setCompleted] = useState([])
 

  return (
    <div className="w-4/5 max-w-2xl p-10 ">
      <h2 className="p-2 rounded-sm mb-6  w-full font-semibold text-lg bg-gray-300">
        Completed Task
      </h2>
      {completed.map((task, i) => {
        return (
          <div className="bg-white rounded-md p-4 mb-4" key={i} >
            <div className="flex justify-center items-center">
              <h3 className="mr-auto text-xl font-bold mb-4">
                {task.projectName}
              </h3>
              <EditTask index={i} task={task} />
            </div>
            <p className="text-lg font-medium mb-6 mt-2">{task.description}</p>

            <TaskStopwatch />
            <DeleteTask task={task} i={i} />
          </div>
        );
      })}
    </div>
  );
}

export default CompletedTask
