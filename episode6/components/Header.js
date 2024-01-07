import { useState } from "react";
import foodLogo from "../../imges/food-logo.jpg";

const Header = () => {
  const [login, setLogin] = useState("Login");
  return (
    <div className="header">
      <div className="h-logo">
        <img src={foodLogo} alt="logo" className="logo" />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us</li>
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
