import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

//----------------------------------------------------------------------------------------          ||
//                                                                                                  ||
// Create Header element like navbar using createElement                                            ||
/*                                                                                                  ||
 *                                                                                                  ||  
<div class="header">                                                                                ||
<h1>Title</h1>                                                                                   \\ || //
<ul>                                                                                              \\||// 
<li>Home</li>                                                                                      \\//
<li>About Us</li>                                                                                   
</ul>
 * 
 * 
 */

// Assignment Solution

// const e = React.createElement;

// const heading = e("div", { class: "header" }, [
//   e("h1", { class: "title" }, "Title h1"),
//   e("ul", { class: "list" }, [
//     e("li", { key: "li-1" }, "Home"),
//     e("li", { key: "li-2" }, "About us"),
//   ]),
// ]);

//----------------------------------------------------------------------------------------                  ||
//                                                                                                          ||
//----------------------------------------------------------------------------------------                  ||
///                                                                                                     \\  ||  //
// create header element using JSX                                                                       \\ || //
//-----------------                                                                                       \\||//
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)                      \\//

const heading = (
  <h1 id="h1" key="h1">
    This is jsx
  </h1>
);

// React Component
// Functional component - new way of writing component
// Class component - old way of writing component
//
// Title component is functional component

const Title = () => {
  return (
    <div>
      {heading}
      <h1>Title Component</h1>
    </div>
  );
};

// Header component is functional component

const HeaderComponent = function () {
  return (
    <div>
      <Title />
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}

      <h1>Namaste React Functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

// create root using createRoot
//
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
// root.render(heading);
root.render(<HeaderComponent />);
