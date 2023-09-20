import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GridViewIcon from "@mui/icons-material/GridView";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect, useState, useRef } from "react";

export default function Header({ title, viewAsGallary, setViewAsGallary }) {
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMoreMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  // const handleViewAsGallary = () => {
  //   setViewAsGallary(!viewAsGallary);
  // };

  return (
    <div className="header-container">
      <h1>{title}</h1>
      <div className="more-menu" ref={menuRef}>
        <MoreHorizIcon
          className="moreBtn"
          onClick={() => {
            setShowMoreMenu(!showMoreMenu);
          }}
          style={{ opacity: showMoreMenu ? "0.7" : "1" }}
        />
        <div
          className="more-Info"
          style={{
            scale: showMoreMenu ? "1" : "0",
          }}
        >
          <ul>
            <li>
              <GridViewIcon />
              {/* {viewAsGallary ? "View as List" : "View as galary"} */}
              View as galary (Comming soon...)
            </li>
            <li>
              <CheckCircleOutlineIcon />
              Select (CommingSoon)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
