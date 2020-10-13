import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Navbar(props){
    return(<div style={{margin: "auto", width:"50%"}}>
        <ul>
            <NavLink to='/home'>
                <li>Home</li>
            </NavLink>
  {props.user?  
            <>        
            <NavLink to='/add-item'>
                <li>Add To Wardrobe</li>
            </NavLink>
 
            <NavLink to='/home'>
            <li onClick={props.logout}>SignOut</li>
            </NavLink>
            </>:
            <>
            <NavLink to='/login'>
                <li>Log In</li>
            </NavLink>
            <NavLink to='/signup'>
                <li>Sign Up</li>
            </NavLink></>}
        </ul>
        </div>

    )
}