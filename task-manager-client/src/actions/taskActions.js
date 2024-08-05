export const fetchTasks = () => async (dispatch) => {
  const response = await fetch("http://localhost:3000/tasks");
  const data = await response.json();
  dispatch({ type: "FETCH_TASKS", payload: data });
};

export const createTask = (task) => async (dispatch) => {
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  dispatch({ type: "CREATE_TASK", payload: data });
};

export const updateTask = (id, updates) => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });
  const data = await response.json();
  dispatch({ type: "UPDATE_TASK", payload: data });
};

export const deleteTask = (id) => async (dispatch) => {
  await fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });
  dispatch({ type: "DELETE_TASK", payload: id });
};
