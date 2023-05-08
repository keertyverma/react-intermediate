import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskContext from "./state-management/context/taskContext";
import taskReducer from "./state-management/reducers/taskReducer";

function App() {
  //1. lift step up in closed parent
  const [tasks, taskDispatch] = useReducer(taskReducer, []);

  // 3. Wrap component tree with context provider and share data
  return (
    <AuthProvider>
      <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthProvider>
  );
}

export default App;
