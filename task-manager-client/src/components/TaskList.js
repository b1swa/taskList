import React from "react";

import TaskCard from "./TaskCard";
import Stack from "react-bootstrap/Stack";

const TaskList = ({ handleShow, tasks }) => {
  return (
    <Stack gap={3}>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} handleShow={handleShow} />
      ))}
    </Stack>
  );
};

export default TaskList;
