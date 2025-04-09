import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Removed import './index.css' since we're using SCSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
