import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from './components/Signup'

class App extends React.Component{
  
  render(){
    return (
      <Router>
      <Route exact path='/signup' component={Signup}/>
      </Router>
    );
  }
}

export default App;
