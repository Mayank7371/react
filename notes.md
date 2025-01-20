npm init -y
npm i parcel
npm i react react-dom
npm install
npx parcel index.html
"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html"
},

<!-- in main.js -->

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "heading" }, "namaste react"); // created an object for us
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading); // renders the object

<!-- if there is something written inside root in index.html it will be replaced by heading -->
<!-- JSX is a javascript syntax for creating react elements -->
<!-- JSX is not part of React, it is a separate syntax -->
<!-- JSX makes it easier to create React elements -->
<!-- in JSX we merge html with javascript -->

// JSX - HTML like syntax
const jsxheading = <h1 id = "heading">hi there</h1>;
console.log(jsxheading);
console.log(heading);
they both are the same thing

<!-- can js engine understand jsx? no -->
<!-- js engine understands ES versions -->
<!-- parcel is doing the job behind the scenes -->
<!-- this jsx code is transpiled to javascript engine-->
<!-- transpiled means converted to the code that browsers can understand -->
<!-- now babel is a normal js package it ensures the transpilation -->
<!-- parcel installed babel for us-->
<!-- babel is a transpiler (JSX->javascript) -->
