import "./App.css";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TaskProvider } from "./state-management/tasks";

function App() {
  // 3. Wrap component tree with context provider and share data
  return (
    <TaskProvider>
      <NavBar />
      <HomePage />
    </TaskProvider>
  );
}

export default App;
