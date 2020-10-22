import React from 'react';
import UploadForm from "../components/AddItemForm";
import WardrobeContainer from './WardrobeContainer';
import {backend} from '../helpers/API'

class Wardrobe extends React.Component{

    state={
        items: null
    }
    
    
    handleDelete=(item)=>{
        if(window.confirm(`Are you sure you want to delete ${item.name}`)){
            const token = localStorage.getItem("token")
            fetch(`${backend}/items/${item.id}`, {
                method: 'DELETE',
                headers: {Authorization: `Bearer ${token}`},
            }).then(() => this.fetchItems())
        }
        
    }

    componentDidMount(){
        this.fetchItems()
    }

    fetchItems(){
        const userItems = [] 

        const token = localStorage.getItem("token")
        fetch('http://localhost:3000/api/v1/items', {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`},
        })
        .then(response => response.json())
        .then(items => this.setState({ items: items}))
    }

    addItemToState=(item)=>{
        const itemArray = this.state.items
        itemArray.push(item)
        this.setState({
            items: itemArray
        })
    }




    render(){
        return(
            <>
            <UploadForm user={this.props.user} addItemToState={this.addItemToState}/>
            <WardrobeContainer user={this.props.user} items={this.state.items} handleDelete={this.handleDelete}  />
            </>
        )
    }
}

export default Wardrobe