import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import { Button, Form } from 'semantic-ui-react'

 
class Login extends React.Component{
    state={
        email: 'danielionita88@yahoo.com',
        password: '1234'
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
        return <div className='login-form'>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <input type='text' onChange={this.handleChange} name='email' value={this.state.email}/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' onChange={this.handleChange} name='password' value={this.state.password}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        login: data=> dispatch(login(data))
    }
}

export default connect(null, mapDispatchToProps)(Login)