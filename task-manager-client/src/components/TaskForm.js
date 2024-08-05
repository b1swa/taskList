import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask, updateTask } from "../actions/taskActions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import TaskStatus from "../utils/constants";
const TaskForm = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const currentTask = useSelector((state) => state.currentTask);
  const [title, setTitle] = useState(currentTask ? currentTask.title : "");
  const [description, setDescription] = useState(
    currentTask ? currentTask.description : "",
  );
  const [status, setStatus] = useState(
    currentTask ? TaskStatus[currentTask.status] : TaskStatus.TO_DO,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, status };

    if (currentTask) {
      dispatch(updateTask(currentTask._id, task));
    } else {
      dispatch(createTask(task));
    }
    handleClose();

    setTitle("");
    setDescription("");
    setStatus(TaskStatus.TO_DO);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" data-bs-theme="dark">
      <Modal.Header closeButton="true">
        <Modal.Title>Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              isInvalid={title ? false : true}
            />
            <Form.Control.Feedback type="invalid">
              Title is mandatory
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dropdown">
            <Form.Select
              onChange={(e) => setStatus(e.target.value)}
              defaultValue={status}
            >
              <option value={TaskStatus.TO_DO}>To Do</option>
              <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
              <option value={TaskStatus.COMPLETED}>Completed</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" disabled={title ? false : true}>
            {currentTask ? "Update" : "Add"} Task
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskForm;
