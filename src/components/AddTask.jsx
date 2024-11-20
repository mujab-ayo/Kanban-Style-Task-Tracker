import React, { useContext, useReducer, useState } from "react";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { addTaskContext } from "../App";

const initialState = {
  projectName: "",
  description: "",
  // id: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT TASK":
      return {
        ...state,
        [action.field]: action.value,
        // id:new Date().getTime().toString(),
      };
    case "SUBMIT TASK":
      return initialState;
    default:
      return;
  }
};

const AddTask = () => {
  const { setAddTask, taskList, setTaskList } = useContext(addTaskContext);

  const [errorMessage, setErrorMessage] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    setErrorMessage(" ");
    dispatch({
      type: "INPUT TASK",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.projectName === "") {
      setErrorMessage("input project name");
      return;
    }

    if (state.description === "") {
      setErrorMessage("input project description");
      return;
    }

    setTaskList([...taskList, { ...state }]);
    dispatch({ type: "SUBMIT TASK" });
    setAddTask(false);
  };

  return (
    <div
      className="overflow-x-hidden overflow-y-auto fixed inset-0 flex justify-center items-center  box-border z-10"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <form className="w-4/6 max-w-md p-8 bg-white shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold mb-6">Add Task</h3>
          <IconButton aria-label="" onClick={() => setAddTask(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="mb-4">
          <label htmlFor="projectName" className="font-medium text-base">
            PROJECT NAME
          </label>
          <input
            type="text"
            className="border border-gray-200 w-full p-2 bg-gray-200 text-gray-600 outline-none focus:bg-transparent "
            placeholder="Enter project"
            name="projectName"
            value={state.projectName}
            onChange={(e) => handleInput(e)}
          />
          <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="taskDescription" className="font-medium text-base">
            TASK DESCRIPTION
          </label>
          <textarea
            type="text"
            id="taskDescription"
            className="border border-gray-200  w-full p-2 bg-gray-200 text-gray-600 outline-none focus:bg-transparent h-40"
            placeholder="Task description"
            value={state.description}
            name="description"
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
        </div>

        <Button
          size="medium"
          variant="contained"
          className=" mt-10 mr-auto"
          type="submit"
        >
          Add task
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
