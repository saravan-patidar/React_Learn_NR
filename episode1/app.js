import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ]),
// ]);

const jsxElem = <h1>Hello ,this is jsx.. </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxElem);