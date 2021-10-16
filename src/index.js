import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

ReactDOM.render(
  <React.StrictMode>
    <MarkdownPreviewer />
  </React.StrictMode>,
  document.getElementById("root")
);
