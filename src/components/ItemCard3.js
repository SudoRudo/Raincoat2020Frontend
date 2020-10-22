import React from 'react';

export default function ItemCard3(props){

    return (
        <div style={{display: "inline-block"}}>
        <div style={{margin: "5px", padding: "5px", width:"150px", height:"172px",  backgroundColor:"rgba(0,128,128, .4)", borderRadius: "5px"}} >
            <img src={`http://localhost:3000${props.item.image.url}`} 
                style={{
                    height:"150px",  
                    display: "block", 
                    marginLeft: "auto", 
                    marginRight: "auto"}}/><br/>
            
        </div>
        <h3 style={{textAlign: "center", textShadow: "2px 2px #fff" }} >{props.item.name}</h3> 
        </div>
    )
}