import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Footer = () => {
  const { loginUser } = useContext(UserContext);
  return (
    <div className="footer text-center">
      <p>
        Created By: <span className="f-name">Shravan {loginUser}</span>
        ,&copy;2023 <span className="web_name">Foodaten!</span>
      </p>
    </div>
  );
};

export default Footer;

// // class based components used <UserContext.consumer>
//     (data)=>{
//       <h1>{data}</h1>
//     }
//     <UserContext.Consumer/>
