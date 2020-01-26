import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Button = props => {
    return (
        <button
            className="button"
            title={props.title}
            onClick={() => props.onClick()}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

export default Button;