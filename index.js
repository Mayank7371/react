import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "lawda",
  },
  "ma ka bhosda"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "lawda",
  },
  "behen ka bhosda"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2] // passing in children
);
// console.log(heading); -> it is a javascript object
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside a root
root.render(container);
// what is the difference between async and defer
