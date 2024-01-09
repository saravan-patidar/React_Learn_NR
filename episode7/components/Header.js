import { useState } from "react";
import { Link } from "react-router-dom";
import foodLogo from "../../imges/food-logo.jpg";

const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="h-logo">
        <Link to="/">
          <img src={foodLogo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-items">
        <li>
          <Link className="navLink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/contact">
            Contact us
          </Link>
        </li>
        <li>Card</li>
        <button
          className="login"
          onClick={() => {
            login === "Login" ? setLogin("Logout") : setLogin("Login");
          }}
        >
          {login}
        </button>
      </ul>
    </div>
  );
};

export default Header;
