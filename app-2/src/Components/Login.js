import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super();

        this.state ={
            username: '',
            password: ''
        }
    }

    updatePassword(val){
        this.setState({password: val})
    }

    updateUsername(val){
        this.setState({username: val})
    }

    handleClick(user, pass){
        alert(`Username: ${user} Password: ${pass}`)
    }

    render(){ 
        return(
            <div>
                <input placeholder="Username" onChange={(e) => this.updateUsername(e.target.value)}></input>
                <input placeholder="Password" onChange={(e) => this.updatePassword(e.target.value)}></input>
                <button onClick={ () => {this.handleClick(this.state.username, this.state.password)}}>Login</button>
            </div>
            
        )
    }
}

export default Login;