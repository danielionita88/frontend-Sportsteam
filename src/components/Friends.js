import React from 'react'
import {Form, Input, Button, Divider, Card, Image, Grid, Segment, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {searchFriends, hideFriends, addFriend} from '../actions/network'

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
        this.props.addFriend(this.props.user.id, receiverId)
    }

    renderResults=()=>{
        return this.props.searchResults.map(user => <Grid.Column key={user.id}>
                <Card id='search-card'>
                    <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{user.first_name + ' ' + user.last_name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        <Button onClick={()=>this.handleAddFriend(user.id)}><Icon name='add user'/></Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }

    handleX=()=>{
        this.props.hideFriends()
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
        user: state.user.currentUser
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        searchFriends: name => dispatch(searchFriends(name)),
        hideFriends: ()=>dispatch(hideFriends()),
        addFriend: (requestorId, receiverId)=>dispatch(addFriend(requestorId,receiverId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)