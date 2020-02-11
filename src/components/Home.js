import React from 'react'
import WithAuth from './WithAuth'
import {connect} from 'react-redux'
import { Card, Icon, Image, Grid, Button, List,Segment} from 'semantic-ui-react'
import {getUsersEvents, setClickedEvent} from '../actions/events'
import ShowEvent from './ShowEvent'
import EditEvent from './EditEvent'


class Home extends React.Component{

    componentDidUpdate(prevProps, prevState){
        if(prevProps.user !== this.props.user){
            this.props.getUsersEvents(this.props.user.id)
        }
    }

    handleCreateBtn=()=>{
        this.props.history.push('/create-event')
    }

    clickedEvent=event=>{
        this.props.setClickedEvent(event)
    }

    renderEvents = ()=>{
       return this.props.events.map(event => 
            <List.Item id='events' 
                onClick={()=>this.clickedEvent(event)} 
                key={event.id} 
            >
                <Icon name='calendar alternate'/> {event.name} - {event.date}
            </List.Item>
        )
    }

    render(){
        return <Grid>
            <Grid.Column style={{margin: '30px'}} width={4}>
                <Card >
                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.user.first_name +' '+this.props.user.last_name}</Card.Header>
                        <Card.Description>
                        {this.props.user.first_name} 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <span className='friends-btn' >
                        <Icon name='user' />
                        22 Friends
                        </span>
                    </Card.Content>
                </Card> 
                <Button onClick={this.handleCreateBtn}>Create New Event</Button>
            </Grid.Column>
            <Grid.Column width={7}>
                {this.props.editEvent ? <EditEvent/> : null}
                
            </Grid.Column>
            <Grid.Column width={4}>
                <p>Created Events</p>
                <List>
                    <Segment>
                        {this.renderEvents()}
                    </Segment>
                </List>
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
        editEvent: state.events.editEvent
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getUsersEvents: userId =>dispatch(getUsersEvents(userId)),
        setClickedEvent: event => dispatch(setClickedEvent(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(Home))