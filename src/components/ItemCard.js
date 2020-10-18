import React from 'react';

export default function ItemCard(props){

    return (
        <div onClick={() => props.addItemToFit(props.item)} style={{display: "inline-block"}}>
        <div style={{margin: "5px", padding: "5px", width:"100px", height:"115px",  backgroundColor:"teal", borderRadius: "5px"}} >
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