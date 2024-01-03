import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * -Header
 *      -logo
 *      -nav-items
 * -body
 *      -search
 *      -restaurent Conatiner
 *          -retsroCard
 *              -img
 *              -name
 *              -delvery time , couisins , rating
 * -footer
 *      -links
 *      -address
 *      -contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="h-logo">
        <img
          src="https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-food-logo-designs-with-spoon-and-fork-png-image_879863.jpg"
          alt="logo"
          className="logo"
        />
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

const RestaurentCard = () => {
  return (
    <div className="res-card">
      <div className="res-img-box">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
          alt="res-img"
          className="res-img"
        />
      </div>
      <div className="res-desc">
        <h3>Pizza Huts</h3>
        <h4>4.1 Stars</h4>
        <h4>29 mins</h4>
        <h4>Pizzas, South Tukoganj</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
