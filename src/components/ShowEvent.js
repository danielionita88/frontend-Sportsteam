import React from 'react'
import {connect} from 'react-redux'
import {Segment, Button} from 'semantic-ui-react'
import {deleteEvent, editEvent} from '../actions/events'


class ShowEvent extends React.Component{

    handleDelete=id=>{
        this.props.deleteEvent(id)
    }

    handleEdit=()=>{
        this.props.editEvent()
    }

    render(){
        return <Segment>
            <h3>{this.props.event.name}</h3>
            <p>Location: {this.props.event.location}</p>
            <p>{this.props.event.date} / {this.props.event.time}</p>
            <p>Details: {this.props.event.details}</p>
            <Button onClick ={this.handleEdit} size='small'>Edit</Button>
            <Button onClick={()=>this.handleDelete(this.props.event.id)} size='small'>Delete</Button>
        </Segment>
    }
}


const mapStateToProps=state=>{
    return{
        event: state.events.clickedEvent
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        deleteEvent: id => dispatch(deleteEvent(id)),
        editEvent: () => dispatch(editEvent())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent)