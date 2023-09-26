import AllTasks from "../Pages/AllTasks";
import PinnedTasks from "../Pages/PinnedTasks";
import HiddenTasks from "../Pages/HiddenTaksk";
import Folders from "../Pages/Folders";
// import SideNav from "./SideNav";
import "../Styles/TaskTypeDisplay.css";
import TaskDisplayer from "./TaskDisplayer";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreateNote from "./CreateNote";
import { TodoProvider } from "../Contexts/ToDoContext";

export default function TaskTypeDisplay() {
  return (
    <TodoProvider>
      <div className="all-tasks-container">
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/pinned" element={<PinnedTasks />} />
          <Route path="/hidden" element={<HiddenTasks />} />
          {/* <Route path="/folders" element={<Folders />} /> */}
          {/* <Route path="/folders/:folder" element={<Folder />} /> */}
          <Route path="/task/:taskid" element={<TaskDisplayer />} />
          <Route path="/createnote" element={<CreateNote />} />
        </Routes>
      </div>
    </TodoProvider>
  );
}
