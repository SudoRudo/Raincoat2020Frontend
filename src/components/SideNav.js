import React from 'react';
import {NavLink} from 'react-router-dom'

class SideNav extends React.Component {
    
    state={
        open: true
    }

    openNav=()=>{
        if(this.state.open){
        document.getElementById("mySidenav").style.width = "250px"
        // document.getElementById("outfitBox").style.width = "0px"
    }else{
        document.getElementById("mySidenav").style.width = "0"}

        this.setState({open: !this.state.open})
        
    }
      
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    render(){
        return(
            <>
           
            <div id="mySidenav" className="sidenav">
                 <a href="javascript:void(0)" className="closebtn" onClick={ this.closeNav}>&times;</a>
            <ul >
            <NavLink className="navlink" to='/home'>
                <li>Home</li>
            </NavLink> 
  {this.props.user?  
            <>        
            <NavLink className="navlink" to='/add-item'>
                <li>Wardrobe</li>
            </NavLink>
            <NavLink className="navlink" to='/user-settings'>
                <li>Settings</li>
            </NavLink>
            <NavLink className="navlink" to='/home'>
            <li onClick={this.props.logout}>SignOut</li>
            </NavLink>
            </>
            :
            <>
            <NavLink className="navlink" to='/login'>
                <li>Log In</li>
            </NavLink>
            <NavLink className="navlink" to='/signup'>
                <li>Sign Up</li>
            </NavLink>
            </>
            }
        </ul>
            </div>

            <div style={{fontSize:"30px", cursor:"pointer"}} className="sandwich" onClick={this.openNav}>&#9776;</div>


            </>
        )
    }


}

export default SideNav