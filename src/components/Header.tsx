import SubwayIcon from "@mui/icons-material/Subway";

export const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <SubwayIcon style={{ fontSize: "48px", color: "#3262ff" }} />
        <span>philly transit</span>
      </a>
      <nav>
        <ul className="nav_links">
          <li>
            <a href="#">Timelines</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
