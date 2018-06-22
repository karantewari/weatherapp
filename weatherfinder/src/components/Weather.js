import React from 'react';

let Weather = (props) => {
        return(
            <div>
            {props.country && <p>Country : {props.country}</p>}
            {props.city && <p>City : {props.city}</p>}
            {props.temprature && <p>Temprature : {props.temprature}</p>}
            {props.pressure && <p>Pressure : {props.pressure}</p>}
            {props.speed && <p>Wind Speed : {props.speed}</p>}
            {props.description && <p>Temprature Description : {props.description}</p>}
            {props.minTemp && <p>Temprature Min : {props.minTemp}</p>}
            {props.maxTemp && <p>Temprature Max: {props.maxTemp}</p>}
            {props.error && <p>Error : {props.error}</p>}
            </div>
        );
}

export default Weather;