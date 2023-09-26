import { useNavigate, useParams } from "react-router-dom";
import "../Styles/TaskDisplayer.css";
import { TodoContext } from "../Contexts/ToDoContext";
import { useState, useEffect, useRef, useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskDisplayer() {
  const nav = useNavigate();
  const textAreaRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {
    if (edit && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [edit]);

  const { todos, updateTodo, deleteTodo } = useContext(TodoContext);

  const { taskid } = useParams();
  const { title, task, dateCreated, checked, hidden } = todos.find(({ id }) => {
    return id == taskid;
  });
  const [newTitle, setNewTitle] = useState(title);
  const [newTask, setNewTask] = useState(task);

  const handleDeleteClick = () => {
    setOpenDeleteModal(true);
  };

  const handleEditClick = () => {
    updateTodo(taskid, newTitle, newTask);
    setEdit(!edit);
  };

  return (
    <div className="displayer-container">
      {openDeleteModal ? (
        <DeleteModal
          id={taskid}
          title={title}
          setOpenDeleteModal={setOpenDeleteModal}
          deleteTodo={deleteTodo}
        />
      ) : (
        ""
      )}

      <div className="header">
        <h1>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="title-value"
            readOnly={edit ? false : true}
          />
        </h1>

        <div className="date">
          <strong>{dateCreated}</strong>
          <span>{checked ? "Checked" : ""}</span>
          <span>{hidden ? "Hidden" : ""}</span>
        </div>
      </div>
      <div className="text-info">
        <textarea
          ref={textAreaRef}
          readOnly={edit ? false : true}
          className="task-area"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <div className="task-diplayed-operations">
        <div className="edit-cancel-task">
          <button
            onClick={() => {
              handleEditClick();
            }}
            className="task-operation-button"
          >
            {edit ? "Save" : "Edit"}
          </button>
          <button onClick={() => nav(-1)} className="task-operation-button">
            Done
          </button>
        </div>
        <button
          onClick={handleDeleteClick}
          className="task-operation-button task-delete-button"
        >
          <DeleteIcon /> Delete
        </button>
      </div>
    </div>
  );
}

import Button from "@mui/material/Button";

function DeleteModal({ id, title, setOpenDeleteModal, deleteTodo }) {
  const nav = useNavigate();
  return (
    <div className="deleteModalContainer">
      <div className="delete-modal-content">
        <h2>Are you sure you want to delete "{title}"</h2>
        <div className="modal-operations">
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              deleteTodo(id);
              setOpenDeleteModal(false);
              nav("/");
            }}
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              setOpenDeleteModal(false);
            }}
            variant="outlined"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
