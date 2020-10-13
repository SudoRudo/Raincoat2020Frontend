import React from 'react';

export default function ItemCard(props){

    return (
        <div style={{margin: "5px", padding: "5px", width:"150px", height:"215px", display: "inline-block", border:"2px solid grey", borderRadius: "10px"}} >
            <img src={`http://localhost:3000${props.item.image.url}`} 
                style={{
                    height:"150px",  
                    display: "block", 
                    marginLeft: "auto", 
                    marginRight: "auto"}}/><br/>
            <h3 style={{textAlign: "center", textShadow: "2px 2px #fff" }} >{props.item.name}</h3> 
        </div>
    )
}