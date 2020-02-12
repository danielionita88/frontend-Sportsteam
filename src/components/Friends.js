import React from 'react'
import {Form, Input, Button, Divider, Card, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {searchFriends} from '../actions/users'

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

    renderResults=()=>{
        return this.props.searchResults.map(user => <Card key={user.id} id='search-card'>
            <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>{user.first_name + ' ' + user.last_name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button>Add Friend</Button>
            </Card.Content>
        </Card>)
    }

    render(){
        return <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Input>
                    <Input icon='search' onChange={this.handleChange} placeholder='Search Friends...' value={this.state.searchTerm} />
                    <Button type='submit'>Search</Button>
                </Form.Input>
            </Form>
            <Divider/>
            {this.props.searchResults.length > 0 ? this.renderResults() : null}
        </div>
    }
}

const mapStateToProps=state=>{
    return{
        searchResults: state.user.searchResults
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        searchFriends: name => dispatch(searchFriends(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Friends)