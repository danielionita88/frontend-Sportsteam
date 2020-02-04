import React from 'react'
import WithAuth from './WithAuth'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'


class Home extends React.Component{
    render(){
        return <Card>
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
        <Link to='/create-event'>Create New Event</Link>
      </Card>
            
    }
}

const mapStateToProps=state=>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(WithAuth(Home))