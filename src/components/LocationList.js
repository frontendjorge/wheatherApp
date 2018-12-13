import React from "react";
import WeatherLocation from "./WeatherLocation";

const LocationList = () => (
    <div>
        <WeatherLocation city="Buenos Aires" country="Argentina"/>
        <WeatherLocation city="Bogota" country="Colombia"/>
        <WeatherLocation city="Miami" country="Estados Unidos"/>
    </div>
);

export default LocationList;