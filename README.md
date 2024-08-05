# Task Manager Application

## Overview

This is a simple task management application where users can create, view, update, and delete tasks. The application is built using Fastify for the backend, MongoDB for the database, Node.js for the server, React for the frontend, and Redux for state management.

## Technologies Used

- **Frontend:** React, Redux, Redux Thunk
- **Backend:** Fastify, Node.js, MongoDB, Mongoose
- **Other:** Axios (for HTTP requests)

## Features

- Display a list of tasks
- Create new tasks
- Update existing tasks
- Delete tasks
- State management using Redux

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB (Ensure MongoDB is running locally or provide a remote connection string)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/task-manager.git
    cd task-manager
    ```

2. Navigate to the backend directory and install dependencies:
    ```bash
    cd task-manager
    npm install
    ```

3. Create a .env file
    ```bash
    touch .env
    ```

    Add your MONGO_DB_URI to .env file

4. Start the Fastify server:
    ```bash
    npm start
    ```
    The server will start on `http://localhost:8000`.

### Frontend Setup

1. Open a new terminal, navigate to the frontend directory and install dependencies:
    ```bash
    cd task-manager-client
    npm install
    ```

2. Start the React development server:
    ```bash
    npm start
    ```
    The frontend will start on `http://localhost:3000`.

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- You will see a board style list of tasks.
- You can add a new task using the form.
- Click on a task to edit it.
- Click the delete button to remove a task.

## Project Structure

```plaintext
taskList/
│
├── server.js                   # Fastify server setup and route definitions
├── models/                     # Mongoose models
│
├── task-manager-client/        # React frontend
│   ├── src/
│   │   ├── actions/            # Redux actions
│   │   ├── components/         # React components
│   │   ├── reducers/           # Redux reducers
│   │   ├── store.js            # Redux store setup
│   │   └── App.js              # Main App component
│   └── public/
│   └── package.json            # Frontend dependencies
│
├── package.json                # Backend dependencies
└── README.md                   # Project documentation
