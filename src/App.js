import React, { Component } from 'react'
// import getRandomId from './components/random.js'
import './App.css'
// import Data from './data/dataApi'
import Navbar from './components/navbar'
import './components/navbar.css'
import {BrowserRouter as Router, Switch} from "react-router-dom"
import Route from 'react-router-dom/Route'
// import {BrowserRouter as Router, Switch} from "react-router-dom"
// import Route from 'react-router-dom/Route'
import Home from './components/Home'
// import Find from './components/Find.js'
import WhichOne from './components/WhichOne'
import Profils from './components/Find.js'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/Find" component={Profils}/> 
        </Switch>
      </Router>
     </div>
    )
  }
}

export default App;