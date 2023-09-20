import "../Styles/AllTasks.css";
import Task from "../Components/Task";
import { useEffect, useState, useContext } from "react";
import { TodoContext } from "../Contexts/ToDoContext";

export default function AllTasks({ viewAsGallary }) {
  const [allTasks, setAllTasks] = useState([]);
  const [pinnedTasks, setPinnedTasks] = useState([]);
  const { todos, deleteTodo, pinTodo } = useContext(TodoContext);
  useEffect(() => {
    setAllTasks([...todos.filter((task) => task.pinned !== true)]);
    setPinnedTasks([...todos.filter((task) => task.pinned === true)]);
  }, [todos]);

  return (
    <div className="displayTasks">
      {pinnedTasks.length ? (
        <div className="pinned-container">
          <h2>Pinned</h2>
          <div className="tasks">
            {pinnedTasks.map(
              ({ id, title, dateCreated, folder, pinned }, ind) => {
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
              }
            )}
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="else-tasks-conatiner">
        <div className="tasks">
          {allTasks.map(({ id, title, dateCreated, folder, pinned }, ind) => {
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
