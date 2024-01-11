import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import foodLogo from "../../imges/food-logo.jpg";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const online = useOnlineStatus();

  return (
    <div className="header">
      <div className="h-logo">
        <Link to="/">
          <img src={foodLogo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-items">
        <p>Online Status: {!online ? "🔴" : "🟢"}</p>
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
