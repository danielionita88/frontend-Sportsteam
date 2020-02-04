import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import history from '../history'
import {logout} from '../actions/index'


class Navbar extends React.Component{

    handleLogout=()=>{
        this.props.logout()
        localStorage.removeItem('token')
        history.push('/')
    }

    render(){
        return <div>
            {this.props.user.id ? null: <Link to='/login'>Login</Link>}
            {this.props.user.id ? null: <Link to='/signup'>SignUp</Link>}
            {this.props.user.id ? <Link onClick={this.handleLogout} to=''>LogOut</Link> : null}
            <Link to='/'>Home</Link>
        </div>
    }
}
 
const mapStateToProps = state=>{
    return{
        user: state.user
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        logout: ()=>dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)