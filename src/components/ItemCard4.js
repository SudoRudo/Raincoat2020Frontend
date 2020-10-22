import React from 'react';

export default function ItemCard4(props){

    return (
        <>
        <div style={{display: "inline-block"}}>
        <div style={{margin: "5px", padding: "5px", width:"100px", height:"135px",  backgroundColor:"rgba(0,128,128, .8)", borderRadius: "5px"}} >
            <img src={`http://localhost:3000${props.item.image.url}`} 
                style={{
                    height:"100px",  
                    display: "block", 
                    marginLeft: "auto", 
                    marginRight: "auto"}}/>
            
        
        <a style={{textAlign: "center", textShadow: "1px 1px grey" }} >{props.item.name}</a><br/>
        <button onClick={() => props.handleDelete(props.item)}>remove</button>
        </div></div>
        
        </>
    )
}