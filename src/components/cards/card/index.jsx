import React from "react";
import "./styles.css";

const Card = props =>
    <div className="card" style={{ backgroundColor: props.color || 'white' }}>
        {props.children}
    </div>;

export default Card;