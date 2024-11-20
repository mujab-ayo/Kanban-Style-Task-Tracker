import React, { useContext } from "react";
import { Button } from "@mui/material";

import { addTaskContext } from "../App";

const DeleteTask = ({ task, i }) => {
  const { taskList, setTaskList } = useContext(addTaskContext);

  

  const handleDelete = () => {
    const newTaskList = taskList.filter((_, index) => index !== i);
    setTaskList(newTaskList); 
  };
  return (
    <div>
      <Button variant="contained" color="error" size="medium" onClick={() => handleDelete()}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteTask;
