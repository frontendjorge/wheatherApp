import React, { Component } from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from "prop-types";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";
import transforWeather from "./../../services/transforWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";
/*import {
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
}*/


class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const { city, country } = props;
        this.state = {
            city,
            country,
            /*data: data*/
            data: null
        };

        console.log("CONSTRUCTOR");
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate");
        //this.handleUpdateClick();
    }

    /*componentWillMount(){
        console.log("UNSAFE componentWillMount");
    }

    componentWillUpdate(nextProps, nextState){
        console.log("UNSAFE componentWillUpdate");
    }*/

    

    handleUpdateClick = () => {  

        const api_weather =  getUrlWeatherByCity(this.state.city);

        fetch(api_weather).then( resolve => {
            //console.log(resolve);
            //debugger;
            return resolve.json();
        }).then( data => {
            const newWeather = transforWeather(data);
            console.log(data);
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
        console.log("render");
        const { city, country, data } = this.state;
        return(
            <div>
                <Location city={city} country={country}  />
                
                {data  ? <WeatherData data={data} /> :
                <CircularProgress size={50} />
                }
            </div>
        )
    }
   
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;