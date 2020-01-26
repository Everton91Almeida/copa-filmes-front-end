import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const CardWinner = props =>
    <div className="card-winner">
        <div className="position">{props.posicao}°</div>
        <div className="title">{props.titulo}</div>
    </div>;

CardWinner.propTypes = {
    posicao: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired
};

export default CardWinner;