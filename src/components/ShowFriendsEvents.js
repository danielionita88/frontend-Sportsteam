import React from 'react'
import {connect} from 'react-redux'
import {getFriends} from '../actions/network'
import{joinEvent} from '../actions/events'
import {Segment, Button} from 'semantic-ui-react'

class ShowFriendsEvents extends React.Component{

    joinEvent=(eventId)=>{
        this.props.joinEvent(eventId,this.props.user.id)
    }

    renderFriendsEvents=()=>{
        let events = this.props.friendsEvents.reverse()
        return events.map(event => {
        let user = this.props.friends.find(user => user.id === event.user_id)
        return<Segment key={event.id}>
            <h3>{user.first_name} {user.last_name} created this event:</h3>
            <h4>{event.name}</h4>
            <p>Location: {event.location}</p>
            <p>Date/Hour: {event.date} at {event.time}</p>
            <p>Details: {event.details}</p>
            <Button onClick={()=>this.joinEvent(event.id)}>Join</Button> 
            <Button> Comment </Button>
        </Segment>})
    }

    render(){
        return <div>
            {this.renderFriendsEvents()}
            </div>
    }
}
const mapStateToProps=state=>{
    return {
        user: state.user.currentUser,
        friends: state.network.friends,
        friendsEvents: state.events.friendsEvents
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        getFriends: userId => dispatch(getFriends(userId)),
        joinEvent: (eventId,userId) => dispatch(joinEvent(eventId,userId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowFriendsEvents)