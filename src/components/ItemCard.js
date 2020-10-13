import React from 'react';

export default function ItemCard(props){

    return (
        <div style={{margin: "auto", width:"150px", display: "inline-block", overflow: "hidden"}} >
            <img src={`http://localhost:3000${props.item.image.url}`} 
                style={{
                    height:"150px", 
                    width: "150px", 
                    display: "block", 
                    marginLeft: "auto", 
                    marginRight: "auto"}}/><br/>
            <h3 style={{textAlign: "center"}} >{props.item.name}</h3> 
        </div>
    )
}