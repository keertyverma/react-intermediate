import { Dispatch } from "react";

import React from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TaskContexType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

// 2. create context
const context = React.createContext<TaskContexType>({} as TaskContexType);

export default context;
