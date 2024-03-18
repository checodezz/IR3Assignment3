import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-light py-3">
      <div className="container">
        <h1 className="display-1">TwinstaBook</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/profile' className="nav-link">Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
