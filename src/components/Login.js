import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/index'
 
class Login extends React.Component{
    state={
        email: '',
        password: ''
    }

    handleChange= e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault()
        this.props.login(this.state)
    }
    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>Email</label>
                <input type='text' onChange={this.handleChange} name='email' value={this.state.email}/>
                <label>Password</label>
                <input type='password' onChange={this.handleChange} name='password' value={this.state.password}/>
                <input type='submit'/>
            </form>
        </div>
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        login: data=> dispatch(login(data))
    }
}

export default connect(null, mapDispatchToProps)(Login)