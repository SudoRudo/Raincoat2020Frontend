import React from "react";
import "./App.css";
import Login from './components/Login'
import {Route, Switch} from "react-router-dom"
// import Navbar from "./unused/Navbar"
import CurrentWeather from "./containers/CurrentWeather";
import { withRouter } from 'react-router-dom';
import Signup from './components/Signup'
import {backend} from './helpers/API'
import UserSettings from "./containers/UserSettings";
import SideNav from "./components/SideNav";
import Wardrobe from "./containers/WardrobeScreen";
import Welcome from "./containers/Welcome";
import OutfitContainer from "./containers/OutfitContainer";

class App extends React.Component {
  constructor(props){
    super (props);
    this.state ={
      user: null,
      city: false,
      weather: null,
    }
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if (token) {
      fetch(`${backend}/profile`, {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(response => response.json())
      .then(data => this.setState({user: data.user}))
    }
    



    if(this.props.user){ 
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=4fc4cf2d6da744f8a7343015200310&q=${this.props.user.default_city}`
      )
        .then((response) => response.json())
        .then((weather) => this.setState({ weather, city: true }))
        .catch((error) => console.log(error));
    } else {
      fetch(
        `http://api.weatherapi.com/v1/current.json?key=4fc4cf2d6da744f8a7343015200310&q=NYC`
      )
        .then((response) => response.json())
        .then((weather) => this.setState({ weather, city: true }))
        .catch((error) => console.log(error));
    }
  }
  

  signupHandler = (userObj) => {
    fetch(`${backend}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(r => r.json())
    .then(data => this.setState({user: data.user}, this.props.history.push('/home')))
  }
  
  loginHandler=(userinfo)=>{
    console.log(userinfo)
    fetch(`${backend}/login`, {
      method: 'POST',
      headers: {
        accepts: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user: userinfo})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.jwt)
      localStorage.setItem("token", data.jwt)
      this.setState({user: data.user}, this.props.history.push('/home'))
    })
  }

  removeUserState = () => {
    this.setState({
      user: null
    }, () => {
      localStorage.removeItem("token")
    })
  }

  // addToOutfit=(e)=>{
  //   e.target.

  // }



  render(){
    return (
    <> <div style={{margin:"50px"}}> 
      <div style={{ display:"inline-block"}}>
        {/* <Navbar user={this.state.user} logout={this.removeUserState}/> */}
        
        <Switch>
          {/* <Route path="/test" render={()=> <OutfitContainer /> } /> */}
          <Route path="/home" render={()=> <CurrentWeather weather={this.state.weather} city={this.state.city} user={this.state.user} />} />
          <Route path="/login" render={()=> <Login submitHandler={this.loginHandler} />} /> 
          <Route path="/signup" render={()=><Signup submitHandler={this.signupHandler}/>} />
          <Route path="/add-item" render={() => <Wardrobe user={this.state.user} /> } />
          <Route path="/user-settings" render={() => <UserSettings user={this.state.user}/>} />
          <Route path="/" render={()=> <Welcome weather={this.state.weather} city={this.state.city} user={this.state.user} /> } />
          
        </Switch>
      </div>
      <div style={{ display:"inline-block", position: "absolute"}}>
      <SideNav user={this.state.user} logout={this.removeUserState} />
    </div>
    </div>
      </>
    );
  }
}

export default withRouter(App);
