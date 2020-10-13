import React from "react";
import "./App.css";
import Login from './components/Login'
import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
import CurrentWeather from "./containers/CurrentWeather";
import Welcome from "./containers/Welcome";
import { withRouter } from 'react-router-dom';
import Signup from './components/Signup'
import UploadForm from "./components/AddItemForm";
import Imagetest from "./components/ImageFetchTest";
import ClothesContainer from "./containers/ClothesContainer";
import {backend} from './helpers/API'

class App extends React.Component {
  constructor(props){
    super (props);
    this.state ={
      user: null
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
    }else{
      this.props.history.push("/login")
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
    .then(data => this.setState({user: data.user}))
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



  render(){
    return (
      
      <div
      style={{margin: "auto", width:"50%", paddingTop: "20px"}} >
        <Navbar user={this.state.user} logout={this.removeUserState}/>
        <Switch>
          <Route path="/home" render={()=> <CurrentWeather user={this.state.user} />} />
          <Route path="/login" render={()=> <Login submitHandler={this.loginHandler} />} /> 
          <Route path="/signup" render={()=><Signup submitHandler={this.signupHandler}/>} />
          <Route path="/add-item" render={() => <UploadForm user={this.state.user}/> } />
          <Route path="/test" render={() => <ClothesContainer user={this.state.user}/> }/>
        </Switch>
      </div>
      
    );
  }
}

export default withRouter(App);
