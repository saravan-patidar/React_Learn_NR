import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import foodLogo from "../../imges/food-logo.jpg";

const Header = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
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
        {/* <button
          className="login"
          onClick={() => {
            login === "Login" ? setLogin("Logout") : setLogin("Login");
            <Link to="/login"></Link>;
          }}
        >
          {login}
        </button> */}
        {login ? (
          <button
            className="login"
            onClick={() => {
              setLogin(false);
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="login"
            onClick={() => {
              setLogin(true);
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </ul>
    </div>
  );
};

export default Header;
