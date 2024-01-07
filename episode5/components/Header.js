import foodLogo from "../../imges/food-logo.jpg";

const Header = () => {
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
      </ul>
    </div>
  );
};

export default Header;
