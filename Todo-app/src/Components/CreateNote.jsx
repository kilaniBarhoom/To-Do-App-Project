import { useNavigate, useParams } from "react-router-dom";
import "../Styles/CreateNote.css";
import { TodoContext } from "../Contexts/ToDoContext";
import { useState, useEffect, useRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskDisplayer() {
  const nav = useNavigate();
  const date = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const handleAddToTask = () => {
    if (title) {
      addTodo({
        id: uuidv4(),
        title: title,
        task: task,
        dateCreated: date,
        dateEdited: date,
        folder: "None",
        pinned: false,
        checked: false,
        hidden: false,
      });
    }
    nav("/");
  };
  return (
    <div className="displayer-container">
      <div className="header">
        <h1>
          <input
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-value"
          />
        </h1>
        <div>
          <strong>{date}</strong>
        </div>
      </div>
      <div className="text-info">
        <textarea
          placeholder="Task"
          className="task-area"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="edit-cancel-create-task">
        <button
          className="task-edit-create-button"
          onClick={() => handleAddToTask()}
        >
          Add
        </button>
        <button className="task-edit-create-button" onClick={() => nav(-1)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
