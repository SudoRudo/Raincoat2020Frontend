import React from 'react';
import ItemCard from './ItemCard2';

class OutfitBox extends React.Component{

    state={
        outfitName: ""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return(
            <div id="outfitBox" className="outfitBox">
                <h3 >NEW OUTFIT</h3>
            {this.props.items.map(item => <ItemCard item={item} key={item.id}/> )}

            <form >
                <input type="text" value={this.state.outfitName} name="outfitName" placeholder="Outfit Name" onChange={this.handleChange}/>
                <input type="submit" value="Create Outfit" />
            </form>
            </div>
        )
    }
}

export default OutfitBox