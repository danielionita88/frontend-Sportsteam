import React from 'react'
import {connect} from 'react-redux'
import {Segment, Button} from 'semantic-ui-react'


class ShowEvent extends React.Component{
    render(){
        return <Segment>
            <h3>{this.props.event.name}</h3>
            <p>Location: {this.props.event.location}</p>
            <p>{this.props.event.date} / {this.props.event.time}</p>
            <p>Details: {this.props.event.details}</p>
            <Button size='small'>Edit</Button>
            <Button size='small'>Delete</Button>
        </Segment>
    }
}


const mapStateToProps=state=>{
    return{
        event: state.events.clickedEvent
    }
}

export default connect(mapStateToProps)(ShowEvent)