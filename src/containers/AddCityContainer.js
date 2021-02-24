import React from 'react';
import CityForm from '../components/CityForm';
import SearchResultCard from '../components/SearchResultCard';
import {backend} from '../helpers/API'

class AddCityContainer extends React.Component{
    state={
        searchResult: null,
        showSearchForm: false
    }

    showSearchForm =() =>{
        this.setState({
            showSearchForm: !this.state.showSearchForm
        })
    }

    cityFormAction=(e)=>{
        e.preventDefault()

        fetch(
          `http://api.weatherapi.com/v1/current.json?key=4fc4cf2d6da744f8a7343015200310&q=${e.target.city.value}`
        )
        .then((response) => response.json())
        .then((weather) => this.setState({ searchResult: weather }))
        .catch((error) => console.log(error));

        // console.log(e.target.city.value)
    }
    
    addToCities=(cityname)=>{
        fetch(`${backend}/user_cities`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({user_city:{user_id: this.props.user.id, name: cityname }})
          })
          .catch((error) => console.log(error))
    }

    render(){

        return(<>

        <div style={{display: "inline-block"}}>{this.state.showSearchForm?
        <button className='btn' 
        onClick={this.showSearchForm}>
            X Close Form 
        </button> : <button className='btn' 
        onClick={this.showSearchForm}>
            Add a New City
        </button>}</div>
            {"  "}
        <div style={{display: "inline-block"}}>{this.state.showSearchForm? <CityForm handleSubmit={this.cityFormAction} /> : null }</div>
        
        {this.state.searchResult? <SearchResultCard weather={this.state.searchResult} addToCities={this.addToCities}/> : null  }
        <br/></>)
    }



    
}

export default AddCityContainer