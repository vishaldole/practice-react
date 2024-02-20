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

// import React from "react";
// import ReactDOM from "react-dom/client";

// const Parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is h1 tag"),
//     React.createElement("h2", {}, "This is h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "This is h1 tag"),
//     React.createElement("h2", {}, "This is h2 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Parent);

// EPISODE 3 : LAYING THE FOUNDATION

// React.createElement ==> Object ==> HTMLElement(render)

// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");  // creates an Object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);

// // console.log(root);

// root.render(heading);

// JSX - is not HTML in Javascript, it is HTML or XML like syntax.

// const jsxHeading = (
//   <h1 className="head" tabIndex="1">
//     Namaste React using JSX
//   </h1>
// );

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// React Components
import { title } from "process";
import React from "react";
import ReactDOM from "react-dom/client";

// 2 types of components
// class components - old way
// functional components - new way

// React Element
const elem = <span>React Element</span>;



// React Functional Component

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React from JSX
  </h1>
);

// component conposition
// const HeadingComponent = () => (
//   <div className="container">
//     <Title />
//     <h1 id="heading">Namaste React from Functional Component</h1>
//   </div>
// );

// javascript inside jsx
// javascript can be written inside jsx by defining {} and writing javascript in it.
// number is javascript variable
const number = 10000;
const HeadingComponent1 = () => (
  <div className="container">
    <h1>{number}</h1>
    <h1 id="heading">Namaste React from Functional Component</h1>
  </div>
);

// react element inside JSX
const HeadingComponent2 = () => (
  <div className="container">
    {heading}
    <h1 id="heading">Namaste React from Functional Component</h1>
  </div>
);

// react element inside react element
const heading = (
    <h1>
      {elem}
      Namaste React from JSX
      {/* <HeadingComponent1/> */}
    </h1>
  );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);
