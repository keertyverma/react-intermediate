import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/taskReducer";
import React from "react";

interface TaskContexType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

// 2. create context
const context = React.createContext<TaskContexType>({} as TaskContexType);

export default context;
