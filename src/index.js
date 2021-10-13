import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

ReactDOM.render(
  <React.StrictMode>
    <MarkdownPreviewer />
  </React.StrictMode>,
  document.getElementById("root")
);
