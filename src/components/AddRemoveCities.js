import React from 'react';
import {backend} from '../helpers/API'

const selectedCities =[]

class AddRemoveCities extends React.Component{
    state={cities:[]}

    componentDidMount(){
        fetch(`${backend}/cities`)
        .then(response => response.json())
        .then(cities => this.setState({
            cities
        }))
    }

    handleSubmit(e){
    e.preventDefault()
    console.log(selectedCities)
    // selectedCities.forEach(cityid=>{
    // fetch(`${backend}/user_cities`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify({user_city: { city_id: cityid, user_id: this.props.user.id}})})})
    }
    

    

    handleChange(e){
        if (selectedCities.includes(e.target.value)){
            const index= selectedCities.indexOf(e.target.value);
            if (index > -1){
                selectedCities.splice(index, 1);
            }
        }else{
            selectedCities.push(e.target.value)
        }
    }

    render(){
    return(<>
        <form onSubmit={this.handleSubmit}>
          
          <h2>Add Cities:</h2>

            {this.state.cities.map (city => ( <>
            <input
            onChange={this.handleChange}
            name={city.name}
            id={city.name}
            type="checkbox" 
            value={city.id}/>
            <label for={city.name}> {city.name}</label>
            <br/></>))}

            <input type="submit" value="Submit"/>
        </form>
    </>)}
}

export default AddRemoveCities