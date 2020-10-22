import React from 'react';

class Signup extends React.Component{
    state= {
        username:"",
        password:"",
        default_city:""
    }

    changeHandler = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render(){
        return ( 
            <div className="signUp">
            <form onSubmit={this.submitHandler}>
                <input type="text"  name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler}/> <br/><br/>
                <input type="password"  name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/> <br/><br/>
                <label>
                  
                  <select value={this.state.default_city} name="default_city" onChange={this.changeHandler}>
                  <option value="">Default City</option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                    <option value="Paris">Paris</option>
                    <option value="Tokyo">Tokyo</option>
                  </select>
                </label>{" "}
                <input type="submit" value="Sign Up" />
            </form>
            </div>
        )
    }

}

export default Signup