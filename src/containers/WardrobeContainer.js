import React from 'react';
import ItemCard4 from '../components/ItemCard4';





function WardrobeContainer(props){
        return(
            <>
            <div className="wardrobeContainer" >
            {props.items? 
            props.items.map( item => <ItemCard4 handleDelete={props.handleDelete} item={item} />) : null }
            </div></>
        )
}

export default WardrobeContainer