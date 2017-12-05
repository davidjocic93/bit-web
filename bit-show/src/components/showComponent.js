import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const ShowComponent = (props) => {

    const { name, imageUrl, id } = props.show;

    return (
        <div className="showContainer col-12 col-md-6 col-lg-4" style={{ border: "1px solid black" }}>
            <Link to={`/${id}`}>
                <div >
                    <img src={imageUrl} alt="" className="col-12" style={{width: "90%", height: "80%", padding: "10%"}} />
                    <p>{name}</p>
                </div>
            </Link>
        </div>
    );

};

ShowComponent.propTypes = {
    show: PropTypes.object
};

export default ShowComponent;
