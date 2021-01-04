import React from "react";
import WeatherCard from "../components/WeatherCard";
import { Redirect } from "react-router-dom";
import Suggestions from "./ItemSuggestions";
import WeatherCardNoUser from "../components/WeatherCardNoUser";
import OutfitBox from "./NewOutfit";

class CurrentWeather extends React.Component {
  state = {
    // city: false,
    // weather: null,
    items: [],
    outfitBoxOpen: false,
    outfitItems: []
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
    // if(this.props.user){ 
    //   fetch(
    //     `http://api.weatherapi.com/v1/current.json?key=4fc4cf2d6da744f8a7343015200310&q=${this.props.user.default_city}`
    //   )
    //     .then((response) => response.json())
    //     .then((weather) => this.setState({ weather, city: true }))
    //     .catch((error) => console.log(error));
    // } else {
    //   fetch(
    //     `http://api.weatherapi.com/v1/current.json?key=4fc4cf2d6da744f8a7343015200310&q=NYC`
    //   )
    //     .then((response) => response.json())
    //     .then((weather) => this.setState({ weather, city: true }))
    //     .catch((error) => console.log(error));
    // }
  }

  setItems=(items)=>{
    this.setState(
      {items}
    )
  }

  addItemToFit=(item)=>{
    const outfitArray = this.state.outfitItems
    outfitArray.push(item)
    this.setState({outfitItems: outfitArray})
    document.getElementById("outfitBox").style.width = "250px"
    document.getElementById("mySidenav").style.width = "0"
    console.log(this.state.outfitItems)
  }
  

  render() {
    // console.log("current user: ", this.props.user)
    return (
      <>
        {" "}
        {this.props.weather? 
          <div style={{display: "inline-block"}}><WeatherCard user={this.props.user} weather={this.props.weather} />
            {this.props.user ? (<>
                
                <Suggestions user={this.props.user} weather={this.props.weather} setItems={this.setItems} items={this.state.items} addItemToFit={this.addItemToFit} />
                </>
              
          ) : (
            null
          )
          
        }</div> : null }
        
        {" "}

        <div style={{display: "inline-block"}}> <OutfitBox items={this.state.outfitItems} user={this.props.user} weather={this.props.weather}/> </div> 
      </>
    );
  }
}

export default CurrentWeather;
