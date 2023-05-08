import { useContext } from "react";
import useAuthStore from "../auth/store";
import TaskContext from "./taskContext";

const TaskList = () => {
  // 4. Access share data using useContext hook
  const { tasks, dispatch } = useContext(TaskContext);
  const { user } = useAuthStore();

  return (
    <>
      <p>User: {user}</p>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
            ...tasks,
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  taskId: task.id,
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
