import { Product.jsx } from "./Product";


React.createElement(
  "div",
  { className: "ui items" },
  "Hello, friend! I am a basic React component."
);

React.createElement(
  "div",
  { className: "ui items" },
  React.createElement("p", null, "Hello, friend! I am a basic React component.")
);
