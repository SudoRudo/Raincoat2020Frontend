import React from 'react';

export default function ItemCard(props){

    return (
        <div style={{display: "inline-block"}}>
        <div style={{margin: "5px", padding: "5px", width:"100px", height:"115px",  border:"2px solid grey", borderRadius: "10px"}} >
            <img src={`http://localhost:3000${props.item.image.url}`} 
                style={{
                    height:"100px",  
                    display: "block", 
                    marginLeft: "auto", 
                    marginRight: "auto"}}/><br/>
            
        </div>
        <h3 style={{textAlign: "center", textShadow: "2px 2px #fff" }} >{props.item.name}</h3> 
        </div>
    )
}