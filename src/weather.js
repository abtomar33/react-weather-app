import React from'react';
import { WiDayRain,WiCloudy,WiDaySunny,WiDaySnow,WiDayStormShowers } from "weather-icons-react";


let  weathericon=<WiCloudy size={24} color='#000' />
const weather=(props)=>{

    if(props.weathertype.includes("rain")){
          weathericon=<WiDayRain size={24} color='#000' />
    }
    if(props.weathertype.includes("sunny")){
        weathericon=<WiDaySunny size={24} color='#000' />
     }
     if(props.weathertype.includes("cloud")){
        weathericon=<WiCloudy size={24} color='#000' />
     }
     if(props.weathertype.includes("snow")){
        weathericon=<WiDaySnow size={24} color='#000' />
     }
     if(props.weathertype.includes("storm")){
        weathericon=<WiDayStormShowers size={24} color='#000' />
     }
    return (
        <div className="weather-box">
            <div className="date">Date & Time: {props.date}</div>
            <div className="weather">Weather: {props.weathertype} {weathericon} </div>
            <div className="temp">Temp: {props.temp}</div>
            <div className="humidity">Humidity:{props.humidity}</div>
            <div className="windSpeed">Speed: {props.speed}</div>
            <div className="lowTemp">Min-Temp: {props.mintemp}</div>
            <div className="highTemp">Max-Temp: {props.maxtemp}</div>
      </div>
    );
}
export default weather;