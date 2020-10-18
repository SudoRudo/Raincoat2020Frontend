import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Navbar(props){
    return(<div style={{ padding:"10px",   backgroundColor:"black"}}>
        <ul style={{ margin:"auto", width:"80%" }} >
            <NavLink className="navlink" to='/home'>
                <li>Home</li>
            </NavLink> {" "}
  {props.user?  
            <>        
            <NavLink className="navlink" to='/add-item'>
                <li>Wardrobe</li>
            </NavLink>{" "}
            <NavLink className="navlink" to='/user-settings'>
                <li>settings</li>
            </NavLink>{" "}
            <NavLink className="navlink" to='/home'>
            <li onClick={props.logout}>SignOut</li>
            </NavLink>{" "}
            </>
            :
            <>
            <NavLink className="navlink" to='/login'>
                <li>Log In</li>
            </NavLink>{" "}
            <NavLink className="navlink" to='/signup'>
                <li>Sign Up</li>
            </NavLink>{" "}
            </>
            }
        </ul>
        </div>

    )
}