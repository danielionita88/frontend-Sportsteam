import React from 'react';
import './App.css';
import {Router, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import history from './history'
import CreateEvent from './components/CreateEvent'
import Friends from './components/Friends'


class App extends React.Component{
  
  render(){
    return (
      <Router history={history}>
        <Navbar/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path ='/login' component={Login}/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/friends' component={Friends}/>
        <Route exact path='/create-event' component={CreateEvent}/>
      </Router>
    );
  }
}


export default App;
