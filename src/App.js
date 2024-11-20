import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";
import AddTask from "./components/AddTask";
import CompletedTask from "./components/CompletedTask";
import Task from "./components/Task";
import React, { useState } from "react";



export const addTaskContext = React.createContext();




function App() {
  const [addTask, setAddTask] = useState(false);
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="bg-gray-100 box-border min-h-screen  ref={drag}">
      <div className="relative p-10">
        <h2 className=" text-3xl font-bold">Task Manager</h2>
        <p className="py-2">Hi there!</p>
        <p className="font-medium text-lg">
          Click{" "}
          <Button
            variant="contained"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => {
              setAddTask(true);
            }}
          >
            New
          </Button>{" "}
          to add a new task
        </p>
      </div>
      <addTaskContext.Provider
        value={{ addTask, setAddTask, taskList, setTaskList }}
      >
        {addTask && <AddTask />}
        <div className="flex flex-col md:flex-row justify-between items-start ">
          <Task />
          {/* <CompletedTask /> */}
        </div>
      </addTaskContext.Provider>
    </div>
  );
}

export default App;
