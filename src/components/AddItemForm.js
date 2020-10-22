import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'
import {backend} from '../helpers/API'
import ItemCard3 from './ItemCard3'





class UploadForm extends React.Component{ 
  
    state = {
        tags:[],
        newItem: null
    }

    componentDidMount(){
        fetch(`${backend}/tags`)
        .then(response => response.json())
        .then(data => this.setState({ tags: data }))
    }
    

    handleChange = (e) => {
        this.setState({
          [e.target.name]: [e.target.value],
        });
        console.log(this.state[e.target.name])
    };

    handleSubmit = (e) =>{
        e.preventDefault()
        const ItemFormData = new FormData(e.target)
        ItemFormData.append('user_id', this.props.user.id);
        const tagId = [e.target[3].value, e.target[4].value, e.target[5].value ]

        console.log(tagId)

        const token = localStorage.getItem("token")
        fetch(`${backend}/items`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json"
            },
            body: ItemFormData
        }).then(response => response.json())
        .then(item => {
          this.createItemTag(item.id, tagId)
          this.setState({
            newItem: item
          })
          this.props.addItemToState(item)
        })
        
       
    }

    createItemTag = (itemId, tagId) =>{
        tagId.forEach(tag=>{

        fetch(`${backend}/item_tags`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({item_tag: { item_id: itemId, tag_id: tag}})
        })})
    }

    // firstSixTags(){
    //     if(this.state.tags){
    //         for(let i=0; i<6; i++){
    //             return <option value={this.state.tags[i].id}>{this.state.tags[i].name}</option>
    //         }
    //     }
    // }
  
  
    render(){  
        return(  
          <div className="addItem">
            {!this.state.newItem?
            
            <form onSubmit={this.handleSubmit}>
              <h2>Add New Item</h2>
                <label htmlFor="image" >
                    <FontAwesomeIcon icon={faImage} color='#3B5998' size='5x' /><br/>
                    <input type="file" name="image" accept="image/*"/>
                </label><br/><br/>
                <label htmlFor="name">
                    <input type="text" name="name" placeholder="Name"  />
                </label><br/>
                <label htmlFor="category">
                  <select  name="category" >
                    <option value="">Category</option>
                    <option value="Hat">Hat</option>
                    <option value="Top">Top</option>
                    <option value="Pants">Pants</option>
                    <option value="Shoes">Shoes</option>
                  </select>
                </label><br/>
                <label htmlFor="Tag1">
                  <select  name="Tag1" >
                  <option value="">Tag 1</option>
                    {this.state.tags.map(tag => <option value={tag.id}>{tag.name}</option> )}
                    
                  </select>
                </label><br/>
                <label htmlFor="Tag2">
                  <select  name="Tag2" >
                  <option value="">Tag 2</option>
                    {this.state.tags.map(tag => <option value={tag.id}>{tag.name}</option> )}
                  </select>
                </label><br/>
                <label htmlFor="Tag3">
                  <select  name="Tag3" >
                  <option value="">Tag 3</option>
                    {this.state.tags.map(tag => <option value={tag.id}>{tag.name}</option> )}
                  </select>
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>

              :
              <div className="newItem">
            <ItemCard3 item={this.state.newItem} key={this.state.newItem.id} /><br/>
            <a href="javascript:void(0)" onClick={() => this.setState({newItem: null})} className="addAnother">ADD ANOTHER ITEM</a>
            </div>
            }
          </div>
        )
    }
}





export default UploadForm