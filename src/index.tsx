import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import App from "./App";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
