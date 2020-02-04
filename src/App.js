import React from 'react';
import './App.css';
import {Router, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import history from './history'

class App extends React.Component{
  
  render(){
    return (
      <Router history={history}>
        <Navbar/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path ='/login' component={Login}/>
        <Route exact path='/' component={Home}/>

      </Router>
    );
  }
}

export default App;
