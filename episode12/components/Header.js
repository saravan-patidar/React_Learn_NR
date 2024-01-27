import { Link, useNavigate } from "react-router-dom";
import foodLogo from "../../imges/food1.png";
import shopCart from "../../imges/shopping_cart.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const items = useSelector((store) => store.cart.items);
  const userName = useSelector((store) => store.user.userName);

  return (
    <div className="flex p-1 px-20 h-20 z-10 bg-[#7c8ce8] justify-between items-center fixed right-0 left-0 top-0 sm:">
      <div className="">
        <img src={foodLogo} className="w-24 h-24 rounded-full " />
      </div>
      <p className="text-orange-500 font-bold">{userName}</p>
      <p className="font-bold bg-gray-300 p-1 rounded-xl ">
        {!onlineStatus ? "Offline: 🔴" : "Online: 🟢"}
      </p>
      <ul className="flex items-center gap-3 text-white">
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md duration-700 transition-all ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md duration-700 transition-all ease-in-out">
          <Link to="/about">About</Link>
        </li>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md duration-700 transition-all ease-in-out">
          <Link to="/help">Help</Link>
        </li>
        <li className="mx-3 text-xl font-bold hover:bg-red-400 p-1 rounded-md duration-700 transition-all ease-in-out">
          <Link to="/cart">
            <div className="relative">
              <img src={shopCart} className="w-10 " />
              <div className="absolute -right-2 -top-2 bg-black px-1 rounded-full">
                {items.length === 0 ? null : items.length}
              </div>
            </div>
          </Link>
        </li>
        {login ? (
          <button
            className="p-1 bg-red-500 rounded-md hover:bg-red-400"
            onClick={() => {
              setLogin(false);
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="p-1 bg-red-500 rounded-md hover:bg-red-400"
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
