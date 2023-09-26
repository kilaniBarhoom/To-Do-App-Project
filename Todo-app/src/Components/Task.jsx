import "../Styles/Task.css";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Details } from "../Contexts/Taskdetails";

export default function Task({
  id,
  title,
  dateCreated,
  folder,
  pinned,
  checked,
  hidden,
  deleteTodo,
  pinTodo,
  checkTodo,
  hideTodo,
}) {
  const navigate = useNavigate();

  function handleTaskOperation(tr) {
    const innerText = tr.innerText;
    if (innerText) {
      const lowerText = innerText.toLowerCase();
      if (
        lowerText === "unpin" ||
        lowerText === "pin" ||
        lowerText === "unhide" ||
        lowerText === "hide" ||
        lowerText === "check" ||
        lowerText === "uncheck" ||
        lowerText === "options" ||
        lowerText === "duplicate" ||
        lowerText === "delete" ||
        lowerText === ""
      ) {
      } else {
        navigate(`/task/${id}`);
      }
    }
  }
  return (
    <div
      className={`task-container ${checked ? "checked-task-container" : ""}`}
      onClick={(e) => {
        handleTaskOperation(e.target);
      }}
    >
      <div className="task-info">
        <h1>{title}</h1>
        <p>{dateCreated}</p>
        <p className="folder">
          <FolderIcon />
          {folder}
        </p>
      </div>
      <CustomizedMenus
        id={id}
        pinned={pinned}
        checked={checked}
        hidden={hidden}
        deleteTodo={deleteTodo}
        pinTodo={pinTodo}
        checkTodo={checkTodo}
        hideTodo={hideTodo}
      />
    </div>
  );
}

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PushPinIcon from "@mui/icons-material/PushPin";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function CustomizedMenus({
  id,
  pinned,
  checked,
  hidden,
  deleteTodo,
  pinTodo,
  checkTodo,
  hideTodo,
  setOpenDeleteModal,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePin = () => {
    pinTodo(id);
    setAnchorEl(null);
  };
  const handleCheck = () => {
    checkTodo(id);
    setAnchorEl(null);
  };
  const handleEdit = () => {
    setAnchorEl(null);
    navigate(`/task/${id}`);
  };

  return (
    <div>
      <Button
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        // variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<MenuIcon style={{ fontSize: "2rem" }} />}
        style={{
          color: "#fff",
          margin: "0",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      ></Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handlePin}
          disableRipple
          style={{ justifyContent: "space-between" }}
        >
          {pinned ? "Unpin" : "Pin"}
          <PushPinIcon style={{ margin: "0" }} />
        </MenuItem>

        <MenuItem
          onClick={handleEdit}
          disableRipple
          style={{ justifyContent: "space-between" }}
        >
          Edit
          <EditIcon style={{ margin: "0" }} />
        </MenuItem>
        <MenuItem
          onClick={handleCheck}
          disableRipple
          style={{ justifyContent: "space-between" }}
        >
          {checked ? "UnCheck" : "Check"}
          <CheckBoxIcon style={{ margin: "0" }} />
        </MenuItem>

        <MenuItem
          onClick={() => {
            hideTodo(id);
            handleClose();
          }}
          disableRipple
          style={{ justifyContent: "space-between" }}
        >
          {hidden ? "Unhide" : "Hide"}
          <VisibilityOffIcon style={{ margin: "0" }} />
        </MenuItem>

        {
          //Add to folder accordion
        }

        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            deleteTodo(id);
            handleClose();
          }}
          disableRipple
          style={{ justifyContent: "space-between", color: "red" }}
        >
          Delete
          <DeleteIcon style={{ margin: "0", color: "red" }} />
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
