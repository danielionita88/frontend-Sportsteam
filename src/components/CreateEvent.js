import React from 'react'
import WithAuth from './WithAuth'
import {connect} from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form } from 'semantic-ui-react'
import {newEvent} from '../actions/events'


class CreateEvent extends React.Component{
    state={
        name:'',
        location:'',
        date: new Date(),
        time:'',
        details: '',
        user_id: this.props.user.id
    }

    handleDateChange=date=>{
        let hour=date.getHours()
        let minutes=()=>{
            if(date.getMinutes()=== 0) {
                return '00'
            }
            else return date.getMinutes()
        }
        this.setState({
            date: date,
            time: `${hour}:${minutes()}`
        })
    }

    handleInputChange=e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault()
        this.props.newEvent(this.state)
    }

    render(){
        return <div className='create-event'>
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input 
                        onChange={this.handleInputChange} 
                        type='text' 
                        name='name' 
                        value={this.state.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Location</label>
                    <input 
                        onChange={this.handleInputChange} 
                        type='text' 
                        name='location' 
                        value={this.state.location}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Select Date and Time:</label>
                    <DatePicker 
                        selected={this.state.date} 
                        onChange={this.handleDateChange}
                        minDate={new Date()}
                        showTimeSelect
                    />
                </Form.Field>
                <Form.Field>
                    <label>Other Details:</label>
                    <textarea 
                        onChange={this.handleInputChange} 
                        rows='10'
                        columns='30'
                        name='details' 
                        value={this.state.details}
                    />
                </Form.Field>
                <Button type='submit'>Create</Button>
            </Form>
        </div>
    }
}

const mapStateToProps=state=>{
    return{
        user: state.user.currentUser
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        newEvent: data => dispatch(newEvent(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(CreateEvent))