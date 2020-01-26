import React from "react";
import "./styles.css";

const Container = props =>
  <div id="main-container">
    {props.children}
  </div>;

export default Container;