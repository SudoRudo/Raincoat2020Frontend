import React from "react";
import IconRender from "./IconRender";
import {WiDegrees} from "weather-icons-react";


function clothes(temperature, condition) {
  if (temperature < 75.0 && temperature > 45.0) {
    if (condition.includes("clear")) {
      return "Conditions are clear, but you may want to dress a little more cozy.";
    }
    else if (condition.includes("rain")) {
      return "It's cold and wet, put on your raincoat."
    }
  }
}

function WeatherCard(props) {
  return (
    <>
      <div className="weathercard">
        <h1>{props.weather.location.localtime.split(" ")[1]}</h1>
        <h2>Hello {props.user? (props.user.username.charAt(0).toUpperCase() + props.user.username.slice(1)) : null}, this is the current weather in {props.weather.location.name}:</h2>
        <h1>Temperature: {props.weather.current.temp_f} ° </h1>
        <h2> <IconRender size={50} weather={props.weather} color={"#000"}/> {props.weather.current.condition.text}</h2>
        <h3>
          {clothes( props.weather.current.temp_f,
            props.weather.current.condition.text.toLowerCase())}
        </h3>
      </div>
    </>
  );
}

export default WeatherCard;
