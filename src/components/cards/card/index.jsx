import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Card = props =>
    <div
        className={`card ${props.hasHover ? 'card-hover' : ''}`}
        style={{ backgroundColor: props.color || 'white' }}>
        {props.children}
    </div>;

Card.propTypes = {
    color: PropTypes.string,
    hasHover: PropTypes.bool
};

export default Card;