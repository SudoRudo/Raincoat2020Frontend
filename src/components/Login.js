import React from 'react';

class Login extends React.Component{
    state= {
        username:"",
        password:"",
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
            <form onSubmit={this.submitHandler}>
                <input type="text"  name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler}/> <br/><br/>
                <input type="password"  name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}/> <br/><br/>
               
                <input type="submit" value="Log In" />
            </form>
        )
    }

}

export default Login