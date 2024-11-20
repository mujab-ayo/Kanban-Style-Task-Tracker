import React, { useState, useContext } from "react";
import { IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { addTaskContext } from "../App";

const EditTask = ({ index, task }) => {
  const [editTask, setEditTask] = useState(false);
  const [projectName, setProjectName] = useState(task.projectName);
  const [description, setDescription] = useState(task.description);

  const { taskList, setTaskList } = useContext(addTaskContext);

  const handleEdit = (e) => {
    e.preventDefault();

    taskList.splice(index, 1);

    setTaskList([...taskList, { projectName, description }]);

    setEditTask(false);
  };

  return (
    <>
      <Button
        variant="contained"
        size="small"
        sx={{ background: "#adb5bd", fontWeight: "bold" }}
        onClick={() => setEditTask(true)}
      >
        Edit
      </Button>
      {editTask && (
        <form
          className="overflow-x-hidden overflow-y-auto fixed inset-0 flex justify-center items-center  box-border z-10"
          onSubmit={(e) => handleEdit(e)}
        >
          <div className="w-4/6 max-w-md p-8 bg-white shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold mb-6">Edit Task</h3>
              <IconButton aria-label="" onClick={() => setEditTask(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <label htmlFor="projectName" className="font-medium text-base">
              PROJECT NAME
            </label>
            <input
              type="text"
              className="border border-gray-200 w-full p-2 bg-gray-200 text-gray-600 outline-none focus:bg-transparent mb-10"
              placeholder="Enter project"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />

            <label htmlFor="taskDescription" className="font-medium text-base">
              TASK DESCRIPTION
            </label>
            <textarea
              type="text"
              id="taskDescription"
              className="border border-gray-200 w-full p-2 bg-gray-200 text-gray-600 outline-none focus:bg-transparent h-40"
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              size="medium"
              variant="contained"
              className=" mt-4 mr-auto uppercase"
              type="submit"
            >
              Update task
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default EditTask;
