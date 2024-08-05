import React, { useEffect } from "react";
import { fetchTasks } from "../actions/taskActions";
import TaskList from "./TaskList";
import Stack from "react-bootstrap/Stack";
import { useDispatch, useSelector } from "react-redux";
import TaskStatus from "../utils/constants";

const Board = ({ handleShow }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Stack direction="horizontal" gap={5}>
      {" "}
      <div>
        <div>
          <h5 className="text-center fw-bold text-white">To Do</h5>
        </div>
        <TaskList
          handleShow={handleShow}
          tasks={tasks.filter((task) => task.status === TaskStatus.TO_DO)}
        />
      </div>
      <div>
        <div>
          <h5 className="text-center fw-bold text-white">In Progress</h5>
        </div>
        <TaskList
          handleShow={handleShow}
          tasks={tasks.filter((task) => task.status === TaskStatus.IN_PROGRESS)}
        />
      </div>
      <div>
        <div>
          <h5 className="text-center fw-bold text-white">Completed</h5>
        </div>
        <TaskList
          handleShow={handleShow}
          tasks={tasks.filter((task) => task.status === TaskStatus.COMPLETED)}
        />
      </div>
    </Stack>
  );
};

export default Board;
