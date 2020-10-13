import React from 'react';
import ItemCard from '../components/ItemCard'

class ClothesContainer extends React.Component{

    state = {
        items:[]
    }

    componentDidMount(){
        const token = localStorage.getItem("token")
        fetch('http://localhost:3000/api/v1/items', {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`},
          })
          .then(response => response.json())
          .then(data => 
            this.setState({
              items: data
        }))     
    }


    render(){
        return(
            <>
                {this.state.items.map(item => <ItemCard key={item.id} item={item} />)}
            </>
        )
    }


}

export default ClothesContainer