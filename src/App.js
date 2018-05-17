import React, { Component } from 'react';
import './App.css';
// import Data from './data/dataApi'
// import Navbar from './components/navbar';
import './components/navbar.css';
// import {BrowserRouter as Router, Switch} from "react-router-dom"
// import Route from 'react-router-dom/Route'
// import Home from './components/Home'
// import Find from './components/Find.js'
import WhichOne from './components/WhichOne'



class App extends Component {
  state = {
    selectedNumber: null,
    error: '',
  }

  handleInput = event => {
    const selectedNumber = Number(event.currentTarget.value)
    // gerer si c'est pas un nombre ou si c'est pas dans l'echelle
    this.setState({ selectedNumber: selectedNumber })
  }

  render() {
    if (this.state.selectedNumber !== null) {
      // faire le random
      // selectionner le bon match
      // appeller le composant qui affiche le match
      return <h1> Tu a choisi {this.state.selectedNumber} !</h1>
    }

    return (
      <div>
        <WhichOne handleInput={this.handleInput} />
        <span>{this.state.error}</span>
      </div>
    )
  }
}



export default App;