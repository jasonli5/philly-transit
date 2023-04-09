export const Header = () => {
  return (
    <header>
      <a href="#" className="logo">
        <img src="src/assets/images/logo.png" alt="" />
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
