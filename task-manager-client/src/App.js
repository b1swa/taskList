import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";
import Board from "./components/Board";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Header handleShow={() => setShowModal(true)} />
      {showModal ? (
        <TaskForm show={showModal} handleClose={() => setShowModal(false)} />
      ) : (
        <></>
      )}
      <Board handleShow={() => setShowModal(true)} />
    </div>
  );
};

export default App;
