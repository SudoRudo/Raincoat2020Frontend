import React from 'react'

class Imagetest extends React.Component{

    state = {
        url: null
    }

    componentDidMount(){
        const token = localStorage.getItem("token")
        fetch('http://localhost:3000/api/v1/items/4', {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`},
          })
          .then(response => response.json())
          .then(data => 
            this.setState({
              url: `http://localhost:3000${data.image.url}`
            }))

         
    }

    render(){
        return(
            
                <> {this.state.url? 
                <> {console.log(this.state.image)} image: <img src={this.state.url} /> </> : <>loading</>}
                </>
        )}
}

export default Imagetest