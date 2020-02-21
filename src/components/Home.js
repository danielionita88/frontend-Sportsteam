import React from 'react'
import WithAuth from './WithAuth'
import {connect} from 'react-redux'
import { Card, Icon, Image, Grid, Button, List,Segment} from 'semantic-ui-react'
import {getUsersEvents, setClickedEvent} from '../actions/events'
import {getFriendRequests} from '../actions/network'
import ShowEvent from './ShowEvent'
import EditEvent from './EditEvent'


class Home extends React.Component{

    componentDidUpdate(prevProps){
        if(prevProps.user !== this.props.user){
            this.props.getUsersEvents(this.props.user.id)
            this.props.getFriendRequests(this.props.user.id)
        }
    }

    handleCreate=()=>{
        this.props.history.push('/create-event')
    }

    clickedEvent=event=>{
        this.props.setClickedEvent(event)
    }

    renderEvents = ()=>{
       let events = this.props.events.sort((a,b)=> a.date > b.date ? 1 : -1)
       return events.map(event => 
            <List.Item id='events' 
                onClick={()=>this.clickedEvent(event)} 
                key={event.id} 
            >
                <Icon name='calendar alternate'/> {event.name} - {event.date}
            </List.Item>
        )
    }

    handleFriends=()=>{
        this.props.history.push('/friends')
    }

    render(){
        return <Grid>
            <Grid.Column style={{margin: '30px'}} width={4}>
                <Card >
                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.user.first_name +' '+this.props.user.last_name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <span onClick={this.handleFriends} className='friends-btn' >
                        <span>{this.props.friendRequests.length > 0 ? <Icon name='plus'/>:null}</span>
                        <Icon name='user' /> Friends
                        </span>
                    </Card.Content>
                    <Card.Content extra>
                        <span style={{cursor: 'pointer'}} onClick={this.handleCreate}><Icon name='calendar alternate'/> Create New Event</span>
                    </Card.Content>
                </Card> 
            </Grid.Column>
            <Grid.Column width={7}>
                {this.props.editEvent ? <EditEvent/> : null}
                
            </Grid.Column>
            <Grid.Column width={4}>
               {this.props.events.length > 0 ? 
               <div>
                <p>Created Events</p>
                    <List>
                        <Segment>
                            {this.renderEvents()}
                        </Segment>
                    </List>
                </div>
                :
                null}
                {this.props.showEvent ? <ShowEvent/> : null}
            </Grid.Column>
        </Grid>
    }
}

const mapStateToProps=state=>{
    return{
        user: state.user.currentUser,
        events: state.events.usersEvents,
        showEvent: state.events.showEvent,
        editEvent: state.events.editEvent,
        friends: state.network.friends,
        friendRequests: state.network.friendRequests
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getUsersEvents: userId =>dispatch(getUsersEvents(userId)),
        setClickedEvent: event => dispatch(setClickedEvent(event)),
        getFriendRequests: userId=>dispatch(getFriendRequests(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(Home))