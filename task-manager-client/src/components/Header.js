import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateCurrentTask } from "../actions/currentTaskActions";

const Header = ({ handleShow }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateCurrentTask(null));
    handleShow();
  };
  return (
    <div className="d-flex justify-content-between">
      <h1 className="text-center fw-bold display-1 text-primary">Task List</h1>

      <div className="p-3 align-content-center">
        <Button variant="primary" onClick={handleClick}>
          New
        </Button>
      </div>
    </div>
  );
};

export default Header;
