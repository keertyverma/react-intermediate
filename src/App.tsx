import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TaskContext from "./state-management/context/taskContext";
import taskReducer from "./state-management/reducers/taskReducer";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/context/authContext";

function App() {
  //1. lift step up in closed parent
  const [tasks, taskDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  // 3. Wrap component tree with context provider and share data
  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TaskContext.Provider value={{ tasks, dispatch: taskDispatch }}>
        <NavBar />
        <HomePage />
      </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
