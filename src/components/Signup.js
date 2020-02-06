import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/index'
import { Button, Form } from 'semantic-ui-react'



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
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>First Name</label>
                    <input 
                        type='text' 
                        onChange={this.handleChange} 
                        name='first_name' 
                        value={this.state.first_name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input 
                        type='text' 
                        onChange={this.handleChange} 
                        name='last_name' 
                        value={this.state.last_name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input 
                        type='text' 
                        onChange={this.handleChange} 
                        name='email' 
                        value={this.state.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input 
                        type='password' 
                        onChange={this.handleChange} 
                        name='password' 
                        value={this.state.password}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input 
                    type='password' 
                    name='password_confirmation' 
                    onChange={this.handleChange} 
                    value={this.state.password_confirmation}
                />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        createUser: data=>dispatch(createUser(data))
    }
}

export default connect(null, mapDispatchToProps)(Signup);