import React from 'react';

export default function OutfitCard(props){
    return(
        <div style={{display:"inline-block" }}>
            <h3>"{props.outfit.name}"</h3>
            for {props.outfit.condition} weather
            {props.outfit.items.map(item =>  <h3>{item.name}</h3>)}<br/>
            <button onClick={() => props.deleteOutfit(props.outfit)}>Delete Fit</button>
        </div>
    )
}