import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/js/fontawesome.js";
import "../src/bootstrap-theme.scss";
import "./index.scss";
import TFTAssistant from "./components/TFTAssistant/TFTAssistant";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <TFTAssistant />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
