import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component{
    render(){
        return <div>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>SignUp</Link>
            <Link to='/home'>Home</Link>
        </div>
    }
}

export default Navbar