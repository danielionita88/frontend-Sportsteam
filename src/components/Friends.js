import React from 'react'
import {Form, Input, Button, Divider, Card, Image, Grid, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {searchFriends, requestFriendship, acceptFriend, getFriendRequests, getFriends, removeFriend, getPendingFriends} from '../actions/network'
import WithAuth from './WithAuth'

class Friends extends React.Component{

    state={
        searchTerm: ''
    }

    componentDidUpdate(prevProps){
        if(prevProps.user !== this.props.user){
            this.props.getFriends(this.props.user.id)
            this.props.getFriendRequests(this.props.user.id)
            this.props.getPendingFriends(this.props.user.id)
        }
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

    handleRemoveFriend=friendId=>{console.log('aaaaaaaa')
        this.props.removeFriend(this.props.user.id, friendId)
    }

    renderUsers=(users)=>{
        const results = users.filter(user => user.id !== this.props.user.id)
        return results.map(user => <Grid.Column key={user.id}>
                <Card id='search-card'>
                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{user.first_name + ' ' + user.last_name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra><span>
                    {this.props.friends.some(u => u.id === user.id) ? 
                        <Button onClick={()=>this.handleRemoveFriend(user.id)}><Icon name='remove user'/>Remove</Button>
                        : this.props.pendingFriends.some(u => u.id === user.id) ?
                        <Button disabled>Request Sent</Button>
                        :
                        <Button onClick={()=>this.handleAddFriend(user.id)}><Icon name='add user'/>Add</Button>
                    }
                    </span>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }


    handleAcceptFriend=friendId=>{
        this.props.acceptFriend(this.props.user.id, friendId)
    }

    renderRequests=()=>{
        return this.props.friendRequests.map(user=><Grid.Row key={user.id}>
                <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                {user.first_name + " " + user.last_name}
                <Button  size='mini' onClick={()=>this.handleAcceptFriend(user.id)}>Accept</Button>
             
        </Grid.Row> )
    }

    render(){
        return <div className='friends-component'>
            <Grid columns={2}>
                <Grid.Column width={11}>
                    <Form style={{width: '400px'}}onSubmit={this.handleSubmit}>
                        <Form.Input>
                            <Input icon='search' onChange={this.handleChange} placeholder='Search Friends...' value={this.state.searchTerm} />
                            <Button type='submit'>Search</Button>
                        </Form.Input>
                    </Form>
                    <Divider hidden/>
                    <Divider/>
                    <Grid columns={3} >
                        {this.props.searchResults.length > 0 ? this.renderUsers(this.props.searchResults) : this.renderUsers(this.props.friends)}
                    </Grid>
                </Grid.Column>
                <Grid.Column width={3}>
                    <h3>Friend Requests</h3>
                    <Grid >
                        {this.props.friendRequests.length > 0 ? this.renderRequests(): null}
                    </Grid>
                </Grid.Column>
            </Grid>
        </div>
    }
}

const mapStateToProps=state=>{
    return{
        searchResults: state.network.searchResults,
        user: state.user.currentUser,
        friendRequests: state.network.friendRequests,
        friends: state.network.friends,
        pendingFriends: state.network.pendingFriends
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        searchFriends: name => dispatch(searchFriends(name)),
        requestFriendship: (requestorId, receiverId)=>dispatch(requestFriendship(requestorId,receiverId)),
        acceptFriend: (userId,friendId)=> dispatch(acceptFriend(userId,friendId)),
        getFriendRequests: userId=>dispatch(getFriendRequests(userId)),
        getFriends: userId=> dispatch(getFriends(userId)),
        getPendingFriends: userId=> dispatch(getPendingFriends(userId)),
        removeFriend: (userId,friendId) => dispatch(removeFriend(userId, friendId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth(Friends))