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
   <WiDaySunny size={50} color='#000' /> : null }
   
   {props.weather.current.condition.text.toLowerCase().includes( "sunny" )?
   <WiDaySunny size={50} color='#000' /> : null }
   
  {props.weather.current.condition.text.toLowerCase().includes("rain")?
     <WiRaindrop size={50} color='#000' /> : null}
  
  {props.weather.current.condition.text.toLowerCase().includes("snow")?
     <WiSnowflakeCold size={50} color='#000' /> : null }
  
  {props.weather.current.condition.text.toLowerCase().includes("cloud")?
     <WiCloudy size={50} color='#000' />: null } 

    {props.weather.current.condition.text.toLowerCase().includes("overcast")?
     <WiCloudy size={50} color='#000' />: null } 
     </>)
    
}