import React from 'react';
import OutfitCard from '../components/OutfitCard';
import {backend} from '../helpers/API'

class OutfitContainer extends React.Component{
    state = {
        outfits:[]
    }

    componentDidMount=()=>{
        fetch(`${backend}/outfits`)
        .then(response => response.json())
        .then(outfits => this.setState({outfits}))
    }

    deleteOutfit=(outfit)=>{
        if(window.confirm(`Are you sure you want to delete ${outfit.name}`)){
            const token = localStorage.getItem("token")
            fetch(`${backend}/outfits/${outfit.id}`, {
                method: 'DELETE',
                headers: {Authorization: `Bearer ${token}`},
            })
        }
    }

    render(){
        return(
            <div className="outfit-container">
                <h2>Your Outfits</h2>
                {this.state.outfits.map(outfit => <OutfitCard outfit={outfit} deleteOutfit={this.deleteOutfit}/> )}
            </div>
        )
    }
}

export default OutfitContainer