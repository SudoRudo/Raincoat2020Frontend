import React from "react";

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

function WeatherCardNoUser({ weather}) {
  return (
    <>
      <div>
        <h1>Hello, this is the current weather in {weather.location.name}:</h1>
        <h3>Temperature: {weather.current.temp_f}</h3>
        <h3>
          {clothes(
            weather.current.temp_f,
            weather.current.condition.text.toLowerCase()
          )}
        </h3>
      </div>
    </>
  );
}

export default WeatherCardNoUser;
