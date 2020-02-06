import React from 'react'
import WithAuth from './WithAuth'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, Icon, Image,Grid } from 'semantic-ui-react'
import {getUsersEvents} from '../actions/events'


class Home extends React.Component{

    componentDidMount(){
        this.props.getUsersEvents(this.props.user.id)
    }

    render(){
        return <Grid>
            <Grid.Column width={5}>
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
                    <Link to="/create-event">Create New Event</Link>
                </Card> 
            </Grid.Column>
            <Grid.Column>

            </Grid.Column>
        </Grid>
    }
}

const mapStateToProps=state=>{
    return{
        user: state.user,
        events: state.events
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getUsersEvents: userId =>dispatch(getUsersEvents(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(Home))