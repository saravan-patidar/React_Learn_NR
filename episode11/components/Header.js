import { Link, useNavigate } from "react-router-dom";
import foodLogo from "../../imges/food-logo.jpg";
import useOnlineStatus from "../../episode11/utils/useOnlineStatus";
import { useState } from "react";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  return (
    <div className="flex p-1 px-20 bg-[#7c84d3] justify-between items-center shadow-2xl shadow-indigo-500/40">
      <div className="h-logo">
        <img src={foodLogo} className="logo hover:mix-blend-color-burn" />
      </div>
      <ul className="flex items-center gap-3 text-white">
        <p className="font-bold">
          Online Status: {!onlineStatus ? "🔴" : "🟢"}
        </p>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md">
          <Link>Cart</Link>
        </li>
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
