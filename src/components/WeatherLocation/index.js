import React, { Component } from 'react';
import transforWeather from "./../../services/transforWeather";
import { api_weather } from "./../../constants/api_url";
import Location from "./Location";
import WeatherData from "./WeatherData";
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from "./../../constants/weathers";




const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m-s"
}


class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Buenos aires",
            country: "Argentina",
            data: data
        };
    }

    

    handleUpdateClick = () => {  

        fetch(api_weather).then( resolve => {
            //console.log(resolve);
            //debugger;
            return resolve.json();
        }).then( data => {
            const newWeather = transforWeather(data);
            console.log(newWeather);
            //debugger;
            //actualizamos datos al presionas desde el api
            this.setState(
                {
                    data: newWeather
                }
            )
            //console.log(data);
            //debugger;
        });
        //console.log("Actualizado");
        
    };

    
    render(){
        const { city, country, data } = this.state;
        return(
            <div>
                <Location city={city} country={country}  />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
   
};

export default WeatherLocation;