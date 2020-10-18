import React from 'react';


export default function CityCard(props){

    return (
        <div style={{ display: "inline-block", margin: "10px"}}>
            <h3>{props.weatherObject.location.name}</h3>
            Current temp: {props.weatherObject.current.temp_f} <br/>
            <button>Default</button>{"   "} <button>Remove</button>
        </div>
    )

}