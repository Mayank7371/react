import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="head">Hello GK!</h1>; // React element

const Title = () => <h2>bhai mai title hu</h2>;
const Title2 = <h2>Bhai mai title element</h2>;

console.log(heading);
console.log(<Title />);

const HeadingComponent = () => (
  <>
    <Title />
    {Title2}
    <h1>Hello Component</h1>
  </>
);

const HeadingComponent2 = () => <h1 className="some">Hello Component2</h1>;

const root = ReactDOM.createRoot(document.getElementById("heading"));
root.render(<HeadingComponent />);

// React Componenet
// everything is a component in react
// there are two types of components class based and functional
//class based old and functional is newer

// a function which is returning some react element(JSX) is functional element
