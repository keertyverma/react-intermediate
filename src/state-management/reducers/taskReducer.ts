export interface Task {
  id: number;
  title: string;
}

interface ADDTASK {
  type: "ADD";
  task: Task;
}

interface DELETETASK {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = ADDTASK | DELETETASK;

const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
    default:
      return tasks;
  }
};

export default taskReducer;
