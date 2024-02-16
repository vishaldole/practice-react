// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from Javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);

// const heading = React.createElement("h1", { id: "heading", xyz: "abc"}, "Hello World from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// /**
//  *
//  * <div id="parent">
//  *      <div id="child">
//  *          <h1>This is h1 tag</h1>
//  *      </div>
//  * </div>
//  *
//  */

// const Parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { }, "This is h1 tag")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Parent);

// /**
//  *
//  * <div id="parent">
//  *      <div id="child">
//  *          <h1>This is h1 tag</h1>
//  *          <h2>This is h2 tag</h2>
//  *
//  *      </div>
//  * </div>
//  *
//  */

// const Parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is h1 tag"),
//     React.createElement("h2", {}, "This is h2 tag"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Parent);

/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>This is h1 tag</h1>
 *          <h2>This is h2 tag</h2>
 *
 *      </div>
 *      <div id="child2">
 *          <h1>This is h1 tag</h1>
 *          <h2>This is h2 tag</h2>
 *
 *      </div>
 * </div>
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
