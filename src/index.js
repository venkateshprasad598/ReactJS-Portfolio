import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UseProvider } from "./components/context/Context";

ReactDOM.render(
  <React.StrictMode>
    <UseProvider>
      <App />
    </UseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
