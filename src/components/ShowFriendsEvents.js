import React from 'react'
import {connect} from 'react-redux'
import {getFriends} from '../actions/network'
import {Segment} from 'semantic-ui-react'

class ShowFriendsEvents extends React.Component{

    renderFriendsEvents=()=>{
        let events = this.props.friends.map(friend =>friend.events).flat()
        console.log(events)
        return events.map(event => <Segment key={event.id}>
            
            <h4>{event.name}</h4>
            <p>Location: {event.location}</p>
            <p>Date/Hour: {event.date} at {event.time}</p>
            <p>Details: {event.details}</p>
        </Segment>)
    }

    render(){
        return <div>
            {this.renderFriendsEvents()}
            </div>
    }
}
const mapStateToProps=state=>{
    return {
        friends: state.network.friends
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        getFriends: userId => dispatch(getFriends(userId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowFriendsEvents)