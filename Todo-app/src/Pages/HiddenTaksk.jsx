import "../Styles/AllTasks.css";
import Header from "../Components/Header";
import Task from "../Components/Task";
import { useEffect, useState, useContext } from "react";
import { TodoContext } from "../Contexts/ToDoContext";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import { Link } from "react-router-dom";

export default function AllTasks() {
  const [hiddenTasks, setHiddenTasks] = useState([]);
  const [taskSearch, setTaskSearch] = useState("");
  const [viewAsGallary, setViewAsGallary] = useState(false);

  const { todos, deleteTodo, pinTodo, checkTodo, hideTodo } =
    useContext(TodoContext);

  useEffect(() => {
    setHiddenTasks([...todos.filter((task) => task.hidden === true)]);
  }, [todos]);

  return (
    <div className="displayTasks">
      <Header
        title="Pinned Tasks"
        setViewAsGallary={setViewAsGallary}
        viewAsGallary={viewAsGallary}
      />
      <div className="search-create-container">
        <div className="search-container">
          <label htmlFor="taskSearch">
            <SearchIcon />
          </label>

          <input
            placeholder="Search"
            type="search"
            name="searchForTask"
            id="taskSearch"
            value={taskSearch}
            onChange={(e) => {
              setTaskSearch(e.target.value);
            }}
          />
        </div>
        <Link className="create-container" to="/createnote">
          <CreateIcon />
          <span>Create</span>
        </Link>
      </div>
      {hiddenTasks.length ? (
        <div className="pinned-container">
          <div className={`tasks ${viewAsGallary ? "gallary-tasks" : ""}`}>
            {hiddenTasks
              .filter((task) => {
                return taskSearch
                  ? task.title.toLowerCase().includes(taskSearch.toLowerCase())
                  : task;
              })
              .map(
                ({ id, title, dateCreated, folder, pinned, checked }, ind) => {
                  return (
                    <Task
                      key={ind}
                      id={id}
                      isPinned={true}
                      title={title}
                      dateCreated={dateCreated}
                      folder={folder}
                      pinned={pinned}
                      checked={checked}
                      hidden={true}
                      deleteTodo={deleteTodo}
                      pinTodo={pinTodo}
                      checkTodo={checkTodo}
                      hideTodo={hideTodo}
                    />
                  );
                }
              )}
          </div>
        </div>
      ) : (
        <h2>No Tasks Hidden...</h2>
      )}
    </div>
  );
}
