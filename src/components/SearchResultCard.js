import React from 'react';

export default function SearchResultCard(props) {
    return (
      <>
        <div>
        <h1>{props.weather.location.name}:</h1>
        <h3>Temperature: {props.weather.current.temp_f}</h3>
        <h3>Condition: {props.weather.current.condition.text}</h3>

        <button onClick={props.addToCities(props.weather.location.name)}>Add to my list</button>
        </div>
      </>
    );
  }