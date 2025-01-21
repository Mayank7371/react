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
React:

A core library for building UI components.
Handles the creation of components and state management.
Focuses on the logic of rendering UI.
ReactDOM:

Provides methods to interact with the DOM.
Used for rendering React components to the DOM (ReactDOM.render).
Offers utilities for DOM-specific operations like findDOMNode or createPortal.

Virtual DOM:

A lightweight JavaScript representation of the Real DOM.
Changes are made here first, and only the differences (diffs) are updated in the Real DOM.
Faster as it minimizes direct DOM manipulation.
Real DOM:

The actual structure of HTML elements rendered in the browser.
Changes trigger re-renders of the entire affected section.
Slower for updates due to full reflows/repaints.
