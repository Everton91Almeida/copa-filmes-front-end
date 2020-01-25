import React from "react";
import "./styles.css";

const Container = props =>
  <div id="main-container">
    <div id="container">{props.children}</div>
  </div>;

export default Container;