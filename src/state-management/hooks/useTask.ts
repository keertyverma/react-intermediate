import { useContext, useReducer } from "react";
import TaskContext from "../context/taskContext";

const useTask = () => useContext(TaskContext);

export default useTask;
