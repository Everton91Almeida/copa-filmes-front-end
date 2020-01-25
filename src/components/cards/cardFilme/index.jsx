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
        <a className="selectable-area" href="#0" onClick={() => clickHandle()}>
            <Card color={selected ? '#ddd' : '#fff'}>
                <div className="content">
                    <div className="header">{props.filme.titulo}</div>
                    <div className="content">{props.filme.ano}</div>
                </div>
            </Card>
        </a>
    );
};

CardFilme.propTypes = {
    filme: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    onUnselect: PropTypes.func.isRequired
};

export default CardFilme;