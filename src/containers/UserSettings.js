import React from 'react';
import {backend} from '../helpers/API'
import CityCard from '../components/CityCard'
import AddCityContainer from './AddCityContainer';

const weatherArray =[]

class UserSettings extends React.Component{
    state = {
       userCities: [],
       weatherArray: false
    }

    async componentDidMount(){
        await fetch(`${backend}/user_cities`)
        .then(response => response.json())
        .then(data => this.filterUserCities(data))

        
        this.state.userCities.forEach(city => {
            fetch(`http://api.weatherapi.com/v1/current.json?key=4fc4cf2d6da744f8a7343015200310&q=${city.name}`)
            .then((response) => response.json())
            .then(obj => {
                weatherArray.push(<CityCard weatherObject={obj}/>)
                
            })
            .catch((error) => console.log(error));
        })
        this.setState({ weatherArray: !this.state.weatherArray})
        console.log(weatherArray)
    }

    filterUserCities(array){
        const cities = []
        array.forEach(obj => {
            if(obj.user.id === this.props.user.id){
                cities.push(obj)
            }
        })
        this.setState({
            userCities: cities
        })

    }
    


    render(){

        return(
        <div className="settings">
        {console.log(this.state.userCities)}
            <div style={{margin:"15px"}}><AddCityContainer user={this.props.user}/></div>
            
            { this.state.weatherArray?
            weatherArray : null}

            {/* <CityCard weatherObject={this.state.weatherArray[0]}/> */}
            </div>)
    }



    
}

export default UserSettings