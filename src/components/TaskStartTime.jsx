import React, { useEffect, useState } from 'react'
import { Button } from "@mui/material";


const TaskStartTime = ({ isRunning, setIsRunning }) => {
  const [startBtn, setStartBtn] = useState("");


  useEffect(() => {

    {isRunning ? setStartBtn('Stop') : setStartBtn('Start')}
  }, [isRunning])

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        sx={{
          color: "gray",
          borderColor: "gray",
          fontWeight: "bold",
        }}
        onClick={() => setIsRunning(!isRunning)}
      >
        {startBtn}
      </Button>
    </div>
  );
};

export default TaskStartTime
