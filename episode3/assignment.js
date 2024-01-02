import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.jpg";
import userIcon from "./user-icon.avif";
import searchIcon from "./search-icon.webp";

/**  Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
 *
 * const e=React.createElement;
 *
 * const header = e('div',{id:"title", key:"title"},[
 * e("h1",{id:"h1",key:"h1"},"Heading 1"),
 * e("h2",{id:"h2",key:"h2"},"Heading 2"),
 * e("h3",{id:"h3",key:"h3"},"Heading 3")]);
 *
 */

// Q:2-> Create the same element using JSX

// const header = (
//   <div className="header">
//     <h1 id="h1" key="h1">This is a Jsx heading</h1>
//     <h2 id="h2" key="h2">This is a Jsx heading</h2>
//     <h3 id="h3" key="h3">This is a Jsx heading</h3>
//   </div>
// );

// Q:3-->Q: Create a functional component of the same with JSX

// const Header = () => {
//   return (
//     <div id="title" key="title">
//       <h1 key="h1">This is functional Componenet</h1>
//       <h2 key="h2">This is functional Componenet</h2>
//       <h3 key="h3">This is functional Componenet</h3>
//     </div>
//   );
// };

// Composition of Component (Add a component inside another)
// const AnotherComponent = function(){
//     return <h2> This is Another Component</h2>
// }

// Q:-->Pass attribute into the tag in JSX
// const Header = () => {
//   return (
//     <div id="title" key="title">
//       <h1 key="h1" style={{color:"red"}}>This is functional Componenet</h1>
//       <h2 key="h2" style={{backgroundColor:"gray",color:"white"}}>This is functional Componenet</h2>
//         <AnotherComponent/>
//       <h3 key="h3" style={{backgroundColor:"lightcoral"}}>This is functional Componenet</h3>
//     </div>
//   );
// };

// `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

/**
 * <div class=header>
 *    <nav>
 *        <logo>
 *        <search>
 *        <user-icon>
 *    <nav>
 * </div>
 *
 *
//  */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="logo" id="logo" />
      </div>
      <div className="search">
        <input type="text" id="search" placeholder="Search"></input>
        <button className="btn">
          <img src={searchIcon} alt="search-icon" id="s-logo" />
        </button>
      </div>
      <div className="user">
        <img src={userIcon} alt="user-icon" id="user_icon" />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
