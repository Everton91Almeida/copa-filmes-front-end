import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Card } from "../../";

const CardFilme = props => {
    const [selected, setSelected] = useState(false);

    const clickHandle = () => {
        if (selected) props.onUnselect();
        else props.onSelect();
        setSelected(!selected);
    }

    return (
        <Card color={selected ? '#ddd' : '#fff'}>
            <a className="selectable-area" href="#0" onClick={() => clickHandle()}>
                <div className="content">
                    <div className="header">{props.filme.titulo}</div>
                    <div>{props.filme.ano}</div>
                </div>
            </a>
        </Card >
    );
};

CardFilme.propTypes = {
    filme: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    onUnselect: PropTypes.func.isRequired
};

export default CardFilme;