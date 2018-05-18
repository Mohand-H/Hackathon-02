import React, { Component} from 'react';
import './navbar.css'
import './Home.css'
// import {  Grid, Row, Col, Image} from 'react-bootstrap'
import Navbar from "./navbar.js"
import { Link} from 'react-router-dom'
// import Find from './Find.js'
import WhichOne from './WhichOne'

class Home extends Component {
  state = {
    selectedNumber: null,
    // error: '',
  }

  handleInput = event => {
    const selectedNumber = Number(event.currentTarget.value)
    // gerer si c'est pas un nombre ou si c'est pas dans l'echelle
    this.setState({ selectedNumber: selectedNumber })
  }
  
render(){
  if (this.state.selectedNumber !== null) {
    // faire le random
    // selectionner le bon match
    // appeller le composant qui affiche le match
    return(
    <div> 
       <Navbar />
      <h1> Tu a choisi {this.state.selectedNumber} !</h1>
    </div>
    )
  }
  return(
    <div>
      <Navbar />
      <WhichOne handleInput={this.handleInput} />
      {/* <span>{this.state.error}</span> */}
    </div>     
    )
  }
}

export default Home