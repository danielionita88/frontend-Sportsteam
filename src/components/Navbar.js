import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../actions/users'
import { Menu } from 'semantic-ui-react'



class Navbar extends React.Component{

    handleLogout=()=>{
        this.props.logout()
    }

    render(){
        return <div>
            {this.props.user.id ? 
                <Menu>
                    <Menu.Item color='red' onClick={this.handleLogout}>
                        Logout
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                </Menu>
            : 
                <Menu>
                    <Menu.Item>
                        <Link to='/login'>Login</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/signup'>SignUp</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                </Menu>
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