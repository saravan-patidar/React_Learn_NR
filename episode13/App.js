import React from "react";
import ReactDOM from "react-dom/client";
import { sum } from "./Sum";
const App = () => {
  const value = sum(5, 6);
  return <div>{value}</div>;
};
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
