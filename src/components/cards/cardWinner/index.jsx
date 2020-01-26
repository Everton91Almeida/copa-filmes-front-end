import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Card } from "../..";

const CardWinner = props => {
    return (
        <Card>
            <div className="content">
                <div className="header">{props.filme.titulo}</div>
            </div>
        </Card >
    );
};

CardWinner.propTypes = {
    filme: PropTypes.object.isRequired
};

export default CardWinner;