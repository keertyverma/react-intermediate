import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TaskContext from "./tasks/taskContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TaskContext);
  const counter = useCounterStore((s) => s.counter);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">Counter : {counter}</span>
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
