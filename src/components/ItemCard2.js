import React from 'react';

export default function ItemCard(props){

    return (
        <div style={{display: "inline-block"}}>
        <div style={{margin: "5px", padding: "5px", width:"50px", height:"60px",  backgroundColor:"teal", borderRadius: "5px"}} >
            <img src={`http://localhost:3000${props.item.image.url}`} 
                style={{
                    height:"50px",  
                    display: "block", 
                    marginLeft: "auto", 
                    marginRight: "auto"}}/><br/>
            
        </div>
        <a style={{textAlign: "center" }} >{props.item.name}</a> 
        </div>
    )
}