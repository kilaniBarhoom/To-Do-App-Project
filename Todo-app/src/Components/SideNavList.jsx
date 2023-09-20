import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import FolderIcon from "@mui/icons-material/Folder";
import PushPinIcon from "@mui/icons-material/PushPin";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import LockIcon from "@mui/icons-material/Lock";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("All");

  // const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,

        height: "90%",
      }}
      component="nav"
    >
      <ListItemButton
        style={{
          backgroundColor:
            activeSection === "All" ? "rgba(0, 0, 0, 0.3)" : "#fff",
        }}
        onClick={() => {
          setActiveSection("All");
        }}
      >
        <ListItemIcon>
          <DensitySmallIcon />
        </ListItemIcon>
        <ListItemText primary="All Notes" />
      </ListItemButton>
      <ListItemButton
        style={{
          backgroundColor:
            activeSection === "Pinned" ? "rgba(0, 0, 0, 0.3)" : "#fff",
        }}
        onClick={() => {
          setActiveSection("Pinned");
        }}
      >
        <ListItemIcon>
          <PushPinIcon />
        </ListItemIcon>
        <ListItemText primary="Pinned" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CheckBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Checked" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary="Folders" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AddIcon
                style={{
                  fontWeight: "800",
                  fontSize: "25px",
                  border: "2px solid rgba(0, 0, 0, 0.4)",
                  color: "rgba(0, 0, 0, 0.4)",
                  borderRadius: "50%",
                  margin: "auto",
                  verticalAlign: "middle",
                }}
              />
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton
        style={{
          backgroundColor:
            activeSection === "recDel" ? "rgba(0, 0, 0, 0.3)" : "#fff",
        }}
        onClick={() => {
          setActiveSection("recDel");
        }}
      >
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Recently Deleted" />
      </ListItemButton>

      <ListItemButton
        id="hidden-container"
        style={{
          backgroundColor:
            activeSection === "hidden" ? "rgba(0, 0, 0, 0.3)" : "#fff",
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
        onClick={() => {
          const s = "hidden";
          setActiveSection(s);
        }}
      >
        <ListItemIcon>
          <LockIcon />
        </ListItemIcon>
        <ListItemText primary="Hidden" />
      </ListItemButton>
    </List>
  );
}
