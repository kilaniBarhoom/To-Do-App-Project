import "../Styles/AllTasks.css";
import Header from "../Components/Header";
import Task from "../Components/Task";
import { useEffect, useState, useContext } from "react";
import { TodoContext } from "../Contexts/ToDoContext";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import { Link } from "react-router-dom";

export default function AllTasks() {
  const [allTasks, setAllTasks] = useState([]);
  const [pinnedTasks, setPinnedTasks] = useState([]);
  const [taskSearch, setTaskSearch] = useState("");
  const [viewAsGallary, setViewAsGallary] = useState(false);

  const { todos, deleteTodo, pinTodo } = useContext(TodoContext);

  useEffect(() => {
    setAllTasks([...todos.filter((task) => task.pinned !== true)]);
    setPinnedTasks([...todos.filter((task) => task.pinned === true)]);
  }, [todos]);

  return (
    <div className="displayTasks">
      <Header
        title="Tasks"
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
      {pinnedTasks.length ? (
        <div className="pinned-container">
          <h2>Pinned</h2>
          <div className="tasks">
            {pinnedTasks
              .filter((task) => {
                return taskSearch
                  ? task.title.toLowerCase().includes(taskSearch.toLowerCase())
                  : task;
              })
              .map(({ id, title, dateCreated, folder, pinned }, ind) => {
                return (
                  <Task
                    key={ind}
                    id={id}
                    isPinned={true}
                    title={title}
                    dateCreated={dateCreated}
                    folder={folder}
                    pinned={pinned}
                    deleteTodo={deleteTodo}
                    pinTodo={pinTodo}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="else-tasks-conatiner">
        <div className="tasks">
          {allTasks
            .filter((task) => {
              return taskSearch
                ? task.title.toLowerCase().includes(taskSearch.toLowerCase())
                : task;
            })
            .map(({ id, title, dateCreated, folder, pinned }, ind) => {
              return (
                <Task
                  key={ind}
                  id={id}
                  isPinned={false}
                  title={title}
                  dateCreated={dateCreated}
                  folder={folder}
                  pinned={pinned}
                  deleteTodo={deleteTodo}
                  pinTodo={pinTodo}
                  viewAsGallary={viewAsGallary}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
