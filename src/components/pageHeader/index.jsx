import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const PageHeader = props => {
    return (
        <div className="page-header">
            <div className="app-title">Copa de filmes</div>
            <div className="page-title" >{props.title}</div>
            <div className="separator" />
            <div className="page-instructions">{props.instructions}</div>
        </div>
    );
};

PageHeader.propTypes = {
    title: PropTypes.string,
    instructions: PropTypes.string
};

export default PageHeader;