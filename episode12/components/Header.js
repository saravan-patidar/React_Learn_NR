import { Link, useNavigate } from "react-router-dom";
import foodLogo from "../../imges/food-logo.jpg";
import useOnlineStatus from "../../episode11/utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const { loginUser } = useContext(UserContext);
  return (
    <div className="flex p-1 px-20 h-20 z-10 bg-[#7c8ce8] justify-between items-center .header">
      <div className="h-logo">
        <img src={foodLogo} className="logo hover:mix-blend-color-burn" />
      </div>
      <ul className="flex items-center gap-3 text-white">
        <p className="font-bold">
          Online Status: {!onlineStatus ? "🔴" : "🟢"}
        </p>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md duration-700 transition-all ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md duration-700 transition-all ease-in-out">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md duration-700 transition-all ease-in-out">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md duration-700 transition-all ease-in-out">
          <Link>Cart</Link>
        </li>
        <li>{loginUser}</li>
        {login ? (
          <button
            className="p-1 bg-red-500 rounded-md hover:bg-red-400"
            onClick={() => {
              setLogin(false);
              navigate("/login");
            }}
          >
            Login
          </button>
        ) : (
          <button
            className="p-1 bg-red-500 rounded-md hover:bg-red-400"
            onClick={() => {
              setLogin(true);
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};
export default Header;
