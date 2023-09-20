import Header from "./Header";
import AllTasks from "../Pages/AllTasks";
// import PinnedTasks from "../Pages/PinnedTasks";
// import SideNav from "./SideNav";
import "../Styles/TaskTypeDisplay.css";
import TaskDisplayer from "./TaskDisplayer";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import CreateNote from "./CreateNote";
import { TodoProvider } from "../Contexts/ToDoContext";

export default function TaskTypeDisplay() {
  // const [deletedTasks, setDeletedTasks] = useState([]);
  // const [hiddenTasks, setHiddenTasks] = useState([]);
  // const [taskSearch, setTaskSearch] = useState("");
  const [viewAsGallary, setViewAsGallary] = useState(false);
  // useEffect(() => {
  //   console.log(viewAsGallary);
  // }, [viewAsGallary]);
  return (
    <TodoProvider>
      <div className="all-tasks-container">
        <Header
          title="All Tasks"
          setViewAsGallary={setViewAsGallary}
          viewAsGallary={viewAsGallary}
        />
        <div className="search-create-container">
          <div className="search-container">
            {/* <label htmlFor="taskSearch">
              <SearchIcon />
              <span>SEARCH COMING SOON... </span>
            </label> */}
            <span>Search comming soon....</span>

            {/* <input
              placeholder="Search"
              type="search"
              name="searchForTask"
              id="taskSearch"
              value={taskSearch}
              onChange={(e) => {
                setTaskSearch(e.target.value);
              }}
            /> */}
          </div>
          <Link className="create-container" to="/createnote">
            <CreateIcon />
            <span>Create</span>
          </Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={<AllTasks viewAsGallary={viewAsGallary} />}
          />
          <Route path="/task/:taskid" element={<TaskDisplayer />} />
          <Route path="/createnote" element={<CreateNote />} />
        </Routes>
      </div>
    </TodoProvider>
  );
}
