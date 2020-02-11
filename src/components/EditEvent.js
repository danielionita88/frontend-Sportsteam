import React from 'react'
import {connect} from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import {updateEvent} from '../actions/events'


class EditEvent extends React.Component{

    constructor(props){
        super(props)
        const hours = props.event.time.split(':')[0]
        const minutes = props.event.time.split(':')[1]
        const date = new Date(props.event.date)
        date.setHours(hours)
        date.setMinutes(minutes)
        this.state={
            name: props.event.name,
            location: props.event.location,
            date: date,
            time: props.event.time,
            details: props.event.details,
            user_id: props.event.user_id
        }
    }

    handleInputChange=e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
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

    handleSubmit=e=>{
        e.preventDefault()
        this.props.updateEvent(this.state, this.props.event.id)
    }

    render(){
        return <div>
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
                <Button type='submit'>Save</Button>
            </Form>
        </div>
    }
}

const mapStateToProps=state=>{
    return {
        event: state.events.clickedEvent
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        updateEvent: (event, eventId)=>dispatch(updateEvent(event, eventId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent)