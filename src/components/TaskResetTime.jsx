import React from 'react'
import { Button } from "@mui/material";


const TaskResetTime = ({ setTime }) => {
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
        onClick={() => setTime(0)}
      >
        Reset
      </Button>
    </div>
  );
};

export default TaskResetTime
