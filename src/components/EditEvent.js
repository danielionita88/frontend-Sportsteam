import React from 'react'
import {connect} from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import DatePicker from "react-datepicker";


class EditEvent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name: props.name,
            location: props.location,
            date: props.date,
            time: props.time,
            details: props.details,
            user_id: props.user_id
        }
    }

    render(){
        return <div>
            <Form >
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
    return {
        event: state.events.clickedEvent
    }
}

export default connect(mapStateToProps)(EditEvent)