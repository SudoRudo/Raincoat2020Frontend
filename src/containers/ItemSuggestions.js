import React from 'react';
import ItemCard from '../components/ItemCard';


class Suggestions extends React.Component{
    state = {
        // items: []
    }

    filterItems(items){
        if (items.length>0){
            let userItems = []
        
            items.forEach(item => {
                if (item.user_id === this.props.user.id){
                    for (let i = 0; i < item.tags.length; i++){
                        if (this.props.weather.current.condition.text.includes(item.tags[i].name.toLowerCase())){
                            userItems.push(item)
                        }
                        if (this.props.weather.current.temp_f < 40 && item.tags[i].name === "Freezing (Under 40F)" ){userItems.push(item)}
                        else if (this.props.weather.current.temp_f >= 40 && this.props.weather.current.temp_f < 50 && item.tags[i].name === "Cold (40F - 49F)"){userItems.push(item)}
                        else if (this.props.weather.current.temp_f >= 50 && this.props.weather.current.temp_f < 60 && item.tags[i].name === "Chilly (50F - 59F)"){userItems.push(item)}
                        else if (this.props.weather.current.temp_f >= 60  && this.props.weather.current.temp_f < 68 && item.tags[i].name === "Cool (60F - 67F)"){userItems.push(item)}
                        else if (this.props.weather.current.temp_f >= 68  && this.props.weather.current.temp_f < 76 && item.tags[i].name === "Warm (68F - 75F)"){userItems.push(item)}
                        else if (this.props.weather.current.temp_f >= 76 && this.props.weather.current.temp_f < 86 && item.tags[i].name === "Hot (76F - 85F)"){userItems.push(item)}
                        else if (this.props.weather.current.temp_f >= 86 && item.tags[i].name === "Arizona (86F and Over)"){userItems.push(item)}
                    }
                }
            })
            // console.log("userItems: ", userItems)
            // console.log("this user: ", this.props.user.id)
            let uniqueArray=[]
            
            for(let i=0; i<userItems.length; i++){
                if(!uniqueArray.includes(userItems[i])){
                    uniqueArray.push(userItems[i])
                }
            }
        
            this.props.setItems(uniqueArray)
            console.log("userItems: ", userItems)
            console.log("uniqueArray: ", uniqueArray)
        }
    }

    componentDidMount(){
        const token = localStorage.getItem("token")
        fetch('http://localhost:3000/api/v1/items', {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`},
        })
        .then(response => response.json())
        .then(items => this.filterItems(items))
    }

    render(){
        return(
        <> {this.props.items.length > 0? <span style={ { margin: 10  }}>
            {/* {console.log("Items: ", this.props.items)} */}
        
        
        <h2>We suggest these items from your collection:</h2>
        {/* <h4>(click on an item to add it to a new outfit)</h4> */}
        <div className="itemSuggestions" >
        {this.props.items.map(item => <ItemCard item={item} key={item.id} addItemToFit={this.props.addItemToFit} /> )}
        </div>    
        </span>: null} </>
        )
    }
}

export default Suggestions

// if (item.tags[i].name === "Freezing (Under 40F)" &&  this.props.weather.current.temp_f < 40){userItems.push(item)}
// else if (item.tags[i].name === "Cold (40F - 49F)"  && this.props.weather.current < 50){userItems.push(item)}
// else if (item.tags[i].name === "Chilly (50F - 59F)"  && this.props.weather.current < 60){userItems.push(item)}
// else if (item.tags[i].name === "Cool (60F - 67F)"   && this.props.weather.current < 68){userItems.push(item)}
// else if (item.tags[i].name === "Warm (68F - 75F)"   && this.props.weather.current < 76){userItems.push(item)}
// else if (item.tags[i].name === "Hot (76F - 85F)"  && this.props.weather.current < 86){userItems.push(item)}
// else if (item.tags[i].name === "Arizona (86F and Over)" &&  this.props.weather.current.temp_f > 86){userItems.push(item)}