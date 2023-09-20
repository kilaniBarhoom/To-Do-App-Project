import { useEffect, useState } from "react";
import "../Styles/Aside.css";
import SideNavList from "./SideNavList";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// List import mui

export default function SideNav() {
  const [showSideNav, setShowSideNav] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.inn);

  const setSize = () => {
    const wd = window.innerWidth;
    setWindowWidth(wd);
  };
  useEffect(() => {
    const wd = window.innerWidth;
    setWindowWidth(wd);
    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, [windowWidth]);
  return (
    <>
      <aside
        className={`aside-container`}
        style={{
          animationName: showSideNav ? "show" : "hide",
          position: showSideNav && windowWidth > 900 ? "relative" : "absolute",
          left: windowWidth < 900 ? "-25ch" : "0",
        }}
      >
        <ArrowBackIcon
          className="close-aside"
          onClick={() => setShowSideNav(false)}
        />
        <h1 className="aside-header">Notes </h1>
        <strong>(Comming Soon)</strong>
        <SideNavList />
      </aside>

      {!showSideNav ? (
        <ArrowForwardIcon
          className="menuIconShow"
          onClick={() => {
            setShowSideNav(true);
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
}
