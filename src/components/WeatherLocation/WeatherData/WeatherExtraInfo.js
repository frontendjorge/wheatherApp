import React from 'react';
import PropTypes from "prop-types";

const WeatherExtraInfo = ({ humidity, wind}) => (
    <div>
        <h3>Informaciòn extra</h3>
        <span>{humidity + "% humedad "}</span>
        <span>{wind + " Viento"}</span>
    </div>
)


WeatherExtraInfo.propTypes  = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;