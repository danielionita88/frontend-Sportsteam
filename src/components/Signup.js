import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/index'


class Signup extends React.Component{

    state={
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }

    handleChange=e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
     
    handleSubmit=e=>{
        e.preventDefault()
        this.props.createUser(this.state)
    }

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type='text' onChange={this.handleChange} name='first_name' value={this.state.first_name}/>
                <label>Last Name</label>
                <input type='text' onChange={this.handleChange} name='last_name' value={this.state.last_name}/>
                <label>Email</label>
                <input type='text' onChange={this.handleChange} name='email' value={this.state.email}/>
                <label>Password</label>
                <input type='password' onChange={this.handleChange} name='password' value={this.state.password}/>
                <label>Confirm Password</label>
                <input type='password' name='password_confirmation' onChange={this.handleChange} value={this.state.password_confirmation}/>
                <input type='submit'/>
            </form>
        </div>
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        createUser: data=>dispatch(createUser(data))
    }
}

export default connect(null, mapDispatchToProps)(Signup);