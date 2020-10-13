import React from "react";
import WeatherCard from "../components/WeatherCard";
import CityForm from "../components/CityForm";
import { Redirect } from "react-router-dom";
import Suggestions from "./ItemSuggestions";
import WeatherCardNoUser from "../components/WeatherCardNoUser";

class CurrentWeather extends React.Component {
  state = {
    city: false,
    weather: null,
  };

  // fetchWeather(cityName) {
  //   fetch(
  //     `http://api.weatherapi.com/v1/current.json?key=4fc4cf2d6da744f8a7343015200310&q=${cityName}`
  //   )
  //     .then((response) => response.json())
  //     .then((weather) => this.setState({ weather, city: true }))
  //     .catch((error) => console.log(error));
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchWeather(e.target.city.value);
  };

  componentDidMount(){   
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
  

  render() {
    console.log("current user: ", this.props.user)
    return (
      <>
        {" "}
        {this.state.weather? 
          <>{this.props.user ? (
            <>
                <WeatherCard user={this.props.user} weather={this.state.weather} />
                <Suggestions user={this.props.user} weather={this.state.weather}/>
                </>
              
          ) : (
            <WeatherCardNoUser weather={this.state.weather} />
          )
          
        }</> : null }
        
        {" "}
      </>
    );
  }
}

export default CurrentWeather;
