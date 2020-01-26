import React from "react";
import PropTypes from "prop-types";
import { PageHeader } from "../../components";
import "./styles.css";

const Page = props => {
    return (
        <div className="page">
            <PageHeader
                title={props.name}
                instructions={props.instructions}
            />
            <div className="page-content">
                {props.children}
            </div>
        </div>
    );
};

Page.propTypes = {
    name: PropTypes.func.isRequired,
    instructions: PropTypes.string.isRequired
};

export default Page;