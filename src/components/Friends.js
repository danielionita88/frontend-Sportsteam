import React from 'react'
import {Form, Input, Button, Divider, Card, Image, Grid, Segment, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {searchFriends, hideFriends, requestFriendship, acceptFriend} from '../actions/network'

class Friends extends React.Component{

    state={
        searchTerm: ''
    }

    handleChange=e=>{
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault()
        if(this.state.searchTerm === '') { alert('Empty Field !')}
        else {this.props.searchFriends(this.state.searchTerm.toLowerCase())}
        this.setState({
            searchTerm: ''
        })
    }

    handleAddFriend=receiverId=>{
        this.props.requestFriendship(this.props.user.id, receiverId)
    }

    renderResults=()=>{
        const results = this.props.searchResults.filter(user => user.id !== this.props.user.id)
        return results.map(user => <Grid.Column key={user.id}>
                <Card id='search-card'>
                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{user.first_name + ' ' + user.last_name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Button onClick={()=>this.handleAddFriend(user.id)}><Icon name='add user'/>Add</Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }

    handleX=()=>{
        this.props.hideFriends()
    }

    handleAcceptFriend=friendId=>{
        this.props.acceptFriend(this.props.user.id, friendId)
    }

    renderRequests=()=>{
        return this.props.friendRequests.map(user=><Grid.Column key={user.id}>
            <Card id='search-card'>
                <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{user.first_name + ' ' + user.last_name}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={()=>this.handleAcceptFriend(user.id)}>Accept</Button>
                </Card.Content>
            </Card>
        </Grid.Column> )
    }

    render(){
        return <Segment>
            <Button onClick={this.handleX} size='mini'>X</Button>
            <Divider hidden/>
            <Form onSubmit={this.handleSubmit}>
                <Form.Input>
                    <Input icon='search' onChange={this.handleChange} placeholder='Search Friends...' value={this.state.searchTerm} />
                    <Button type='submit'>Search</Button>
                </Form.Input>
            </Form>
            <Divider hidden/>
            <Grid columns={3}>
                {this.props.friendRequests.length > 0 ? this.renderRequests(): null}
            </Grid>
            <Divider/>
            <Grid columns={3} >
                {this.props.searchResults.length > 0 ? this.renderResults() : null}
            </Grid>
        </Segment>
    }
}

const mapStateToProps=state=>{
    return{
        searchResults: state.network.searchResults,
        user: state.user.currentUser,
        friendRequests: state.network.friendRequests
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        searchFriends: name => dispatch(searchFriends(name)),
        hideFriends: ()=>dispatch(hideFriends()),
        requestFriendship: (requestorId, receiverId)=>dispatch(requestFriendship(requestorId,receiverId)),
        acceptFriend: (userId,friendId)=> dispatch(acceptFriend(userId,friendId))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)