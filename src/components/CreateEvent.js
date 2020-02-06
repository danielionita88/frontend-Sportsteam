import React from 'react'
import WithAuth from './WithAuth'
import {connect} from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateEvent extends React.Component{
    state={
        name:'',
        location:'',
        date: new Date(),
        time:'',
        details: ''
    }

    handleDateChange=date=>{
        // let day=date.getDate()
        // let month=date.getMonth()+1
        // let year=date.getFullYear()
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

    render(){
        return <div>
            <form>
                <p>Name</p>
                <input 
                    onChange={this.handleInputChange} 
                    type='text' 
                    name='name' 
                    value={this.state.name}
                />
                <p>Location</p>
                <input 
                    onChange={this.handleInputChange} 
                    type='text' 
                    name='location' 
                    value={this.state.location}
                />
                <p>Select Date and Time:</p>
                <DatePicker 
                    selected={this.state.date} 
                    onChange={this.handleDateChange}
                    minDate={new Date()}
                    showTimeSelect
                />
                
                <p>Other Details:</p>
                <textarea 
                    onChange={this.handleInputChange} 
                    rows='10'
                    columns='30'
                    name='details' 
                    value={this.state.details}
                />
            </form>
        </div>
    }
}

const mapStateToProps=state=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(WithAuth(CreateEvent))