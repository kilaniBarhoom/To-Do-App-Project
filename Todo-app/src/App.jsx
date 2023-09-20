// import SideNav from "./Components/SideNav";
import TaskTypeDisplay from "./Components/TaskTypeDisplay";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./Components/SideNav";

export default function App() {
  return (
    <div className="container">
      {/* <SideNav /> */}
      <Router>
        <SideNav />
        <TaskTypeDisplay />
      </Router>
    </div>
  );
}
