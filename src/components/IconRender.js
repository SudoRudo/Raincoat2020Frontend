import React from 'react';
import {WiRaindrop,
    WiDaySunny,
    WiSnowflakeCold,
    WiCloudy,
    WiThermometerExterior,
    WiHumidity} from "weather-icons-react";



export default function IconRender(props){
    return (<> 
    {/* { console.log("icon render " ,props.weather)} */}
        {props.weather.current.condition.text.toLowerCase().includes("clear")?
   <WiDaySunny size={props.size} color={props.color} /> : null }
   
   {props.weather.current.condition.text.toLowerCase().includes( "sunny" )?
   <WiDaySunny size={props.size} color={props.color} /> : null }
   
  {props.weather.current.condition.text.toLowerCase().includes("rain")?
     <WiRaindrop size={props.size} color={props.color} /> : null}
  
  {props.weather.current.condition.text.toLowerCase().includes("snow")?
     <WiSnowflakeCold size={props.size} color={props.color} /> : null }
  
  {props.weather.current.condition.text.toLowerCase().includes("cloud")?
     <WiCloudy size={props.size} color={props.color} />: null } 

    {props.weather.current.condition.text.toLowerCase().includes("overcast")?
     <WiCloudy size={props.size} color={props.color} />: null } 
     </>)
    
}