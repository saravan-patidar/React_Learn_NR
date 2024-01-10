// Learn Class based Components

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";

const App = () => {
  const [count, setCount] = useState();
  console.log(useState());
  return <Home />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
