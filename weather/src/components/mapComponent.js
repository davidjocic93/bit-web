import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import PropTypes from 'prop-types';

const MyMapComponent = withScriptjs(withGoogleMap((props) => {

    const longitude = props.lon;
    const latitude = props.lat;

    return (

        <GoogleMap
            defaultZoom={8}
            center={{ lat: latitude, lng: longitude }}
        >
            {props.isMarkerShown && <Marker position={{ lat: latitude, lng: longitude }} />}
        </GoogleMap>
    );
}));

MyMapComponent.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number
}

export default MyMapComponent;