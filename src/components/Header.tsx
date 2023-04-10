import SubwayIcon from "@mui/icons-material/Subway";
import MenuIcon from "@mui/icons-material/Menu";
import "../styling/Header.css";
import React from "react";

interface HeaderProps {
  fixed?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ fixed }) => {
  const [open, setOpen] = React.useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  return (
    <header
      className={open ? "active-menu" : ""}
      style={{ position: !fixed ? "fixed" : "relative" }}
    >
      <a href="/" className="logo">
        <SubwayIcon style={{ fontSize: "48px", color: "#3262ff" }} />
        <span>philly transit</span>
      </a>
      <nav>
        <a
          href="javascript:void(0);"
          className="menu-button"
          onClick={toggleMenu}
        >
          <MenuIcon style={{ fontSize: "48px", color: "#000000" }} />
        </a>
        <ul className="nav_links">
          <li>
            <a href="#timeline" onClick={toggleMenu}>
              Timelines
            </a>
          </li>
          <li>
            <a href="#" onClick={toggleMenu}>
              About Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
