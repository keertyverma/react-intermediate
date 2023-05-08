import { useReducer } from "react";
import "./App.css";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskContext from "./state-management/context/taskContext";
import taskReducer from "./state-management/reducers/taskReducer";
import TaskProvider from "./state-management/TaskProvider";

function App() {
  // 3. Wrap component tree with context provider and share data
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
