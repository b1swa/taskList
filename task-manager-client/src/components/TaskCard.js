import React from "react";
import { deleteTask } from "../actions/taskActions";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { updateCurrentTask } from "../actions/currentTaskActions";
import Card from "react-bootstrap/Card";

const TaskCard = ({ task, handleShow }) => {
  const dispatch = useDispatch();
  const deleteCard = () => {
    dispatch(deleteTask(task._id));
  };
  const handleUpdateClick = () => {
    dispatch(updateCurrentTask(task));
    handleShow();
  };
  return (
    <Card data-bs-theme="dark">
      <Card.Body>
        <div className="container">
          <div className="row">
            <div className="col-7 text-white align-content-center text-truncate">
              {task.title}
            </div>
            <div className="col d-flex justify-content-end">
              <Button
                onClick={handleUpdateClick}
                variant="info"
                style={{ borderRadius: "75%" }}
              >
                <i className="bi bi-pencil-fill"></i>
              </Button>
              <Button
                style={{ borderRadius: "75%" }}
                onClick={deleteCard}
                variant="danger"
              >
                <i className="bi bi-trash3-fill"></i>
              </Button>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
