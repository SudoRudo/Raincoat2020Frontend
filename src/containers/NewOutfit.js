import React from 'react';
import ItemCard from '../components/ItemCard2';
import {backend} from '../helpers/API';

class OutfitBox extends React.Component{

    state={
        outfitName: "",
        newOutfit: null
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createNewOutfit=(e)=>{
        e.preventDefault()
        console.log(e.target[0].value, this.props.items)

        fetch(`${backend}/outfits`,{
            method: 'POST',
            headers: {
              accepts: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: e.target[0].value, condition: this.props.weather.current.condition.text, user_id: this.props.user.id})
        })
        .then(response => response.json())
        .then(outfit => {
            this.props.items.forEach(item =>{
                fetch(`${backend}/item_outfits`,{
                    method: 'POST',
                    headers: {
                      accepts: "application/json",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({item_id: item.id, outfit_id: outfit.id})
                })
                .then(response => response.json())
                
            })
            this.setState({
                newOutfit: outfit
            })
        })
        

    }

    // renderNewOutfit(outfit){
    //     document.getElementById("outfitBox").innerHTML=`
    //         <h3>${outfit.name}</h3>
    //         ${outfit.items.forEach(item => <ItemCard item={item} key={item.id}/> )}
    //     `
    // }

    closeBox(){
        document.getElementById("outfitBox").style.width = "0px"
    }


    render(){
        return(

            <>
            {!this.state.newOutfit?
            <div id="outfitBox" className="outfitBox">
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeBox}>&times;</a>
                <h3 >NEW OUTFIT</h3>
            {this.props.items.map(item => <ItemCard item={item} key={item.id}/> )}

            <form className="createOutfitForm" onSubmit={this.createNewOutfit}>
                <input type="text" value={this.state.outfitName} name="outfitName" placeholder="Outfit Name" onChange={this.handleChange}/><br/><br/>
                <input type="submit" value="Create Outfit" />
            </form>
            </div>

            :

            <div id="outfitBox" className="outfitBox">
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeBox}>&times;</a>
            <h3 >{this.state.newOutfit.name}</h3>
            <h4>Your outfit for {this.state.newOutfit.condition} weather</h4>
            {this.props.items.map(item => <ItemCard item={item} key={item.id}/> )}
            </div> 
            }
            </>


        )
    }
}

export default OutfitBox