import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const ShowComponent = (props) => {

    const { name, imageUrl, id } = props.show;

    return (
        <div className="col-12 col-md-5 offset-md-1 col-lg-3" style={{ padding: "0px" }}>
            <Link to={`/${id}`}>
                <div className="showContainer">
                    <img src={imageUrl} alt="" style={{ width: "100%", maxHeight: "80%" }} />
                    <p style={{ backgroundColor: "white", width: "100%", height: "20%" }}><span>{name}</span></p>
                </div>
            </Link>
        </div>
    );
};

ShowComponent.propTypes = {
    show: PropTypes.object
};

export default ShowComponent;
