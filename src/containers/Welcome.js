import React from 'react';
import IconRender from '../components/IconRender';
import CurrentWeather from "../containers/CurrentWeather";


export default function Welcome(props){
    

    return(
        <>
            {props.weather? 
        <div className="welcomeScreen">
            <div className="welcomeIcon">
                <IconRender weather={props.weather} size={500} color={"#000"}/> 
            </div>


            <div className="welcomeWeather">
                <CurrentWeather weather={props.weather} city={props.city} user={props.user} />
            </div>
        </div>



            :null}
        </>
    )
}