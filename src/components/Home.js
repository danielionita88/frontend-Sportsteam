import React from 'react'
import WithAuth from './WithAuth'
import {connect} from 'react-redux'
import { Card, Icon, Image,Grid, Button, List} from 'semantic-ui-react'
import {getUsersEvents} from '../actions/events'


class Home extends React.Component{

    componentDidUpdate(prevProps, prevState){
        if(prevProps.user !== this.props.user){
            this.props.getUsersEvents(this.props.user.id)
        }
    }

    handleCreateBtn=()=>{
        this.props.history.push('/create-event')
    }

    renderEvents = ()=>{
       return this.props.events.map(e => <List.Item key={e.id} ><Icon name='calendar alternate'/> {e.name} - {e.date}</List.Item>)
    }

    render(){
        return <Grid>
            <Grid.Column width={4}>
                <Card>
                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.user.first_name +' '+this.props.user.last_name}</Card.Header>
                        <Card.Description>
                        {this.props.user.first_name} 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                        <Icon name='user' />
                        22 Friends
                        </a>
                    </Card.Content>
                </Card> 
                <Button onClick={this.handleCreateBtn}>Create New Event</Button>
            </Grid.Column>
            <Grid.Column width={7}>

            </Grid.Column>
            <Grid.Column width={5}>
                <p>Created Events</p>
                <List>
                    {this.renderEvents()}
                </List>

            </Grid.Column>
        </Grid>
    }
}

const mapStateToProps=state=>{
    return{
        user: state.user,
        events: state.events.usersEvents
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getUsersEvents: userId =>dispatch(getUsersEvents(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(Home))