import React, { Component} from 'react';
import './navbar.css'
import './Home.css'
// import {  Grid, Row, Col, Image} from 'react-bootstrap'
import Navbar from "./navbar.js"
import { Link} from 'react-router-dom'
// import Find from './Find.js'
import WhichOne from './WhichOne'
import getRandomId from './random'
class Home extends Component {
  state = {
    selectedNumber: null,
    profils: [],
  
    // error: '',
  }

  handleInput = event => {
    
    const finalNumber = Number(event.currentTarget.value) + '' +  Math.floor(Math.random() * 9);
    
    
    // gerer si c'est pas un nombre ou si c'est pas dans l'echelle
    this.setState({ selectedNumber: finalNumber })
  }
  componentDidMount(){ 
    fetch(`https://akabab.github.io/starwars-api/api/all.json`)
    .then(response => response.json())
    .then(data => {
      let recupProfil = data
      this.setState({ profils: recupProfil })
    })
    
  }

render(){
  if (this.state.selectedNumber !== null) {
    // faire le random
    // selectionner le bon match
    // appeller le composant qui affiche le match
    console.log(this.state.profils)
    const selectedProfil = this.state.profils[this.state.selectedNumber]
    console.log(selectedProfil)
    console.log(this.state.selectedNumber)
    return(
     

    <div> 
       <Navbar />
      <h1> Ton elu est {this.state.selectedNumber} !</h1>
      <p>{selectedProfil.name}</p>
      <a href="#Profil" class="thumbnail">
                <img src={selectedProfil.image}/>
                </a>
      
      
     
     
    </div> 
    )
  }
  else{
    const characters = this.state.profils
  console.log(characters)
  return(


    <div>
      <Navbar />
      <WhichOne handleInput={this.handleInput} />
      {/* <span>{this.state.error}</span> */}
      
    </div>  

    )
  }
  }
}

export default Home