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
            {this.props.user.id ? 
                <div>
                    <Link onClick={this.handleLogout} to=''>LogOut</Link>
                    <Link to='/'>Home</Link>
                </div>
            : 
                <div>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>SignUp</Link>
                    <Link to='/'>Home</Link>
                </div>
            }
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