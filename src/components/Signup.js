import React from 'react'


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


    render(){
        return <div>
            <form>
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
            </form>
        </div>
    }
}

export default Signup;