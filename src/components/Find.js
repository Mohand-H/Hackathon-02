import React, { Component} from 'react';
import './navbar.css'
import './Home.css'
import {Grid, Row, Col,Image} from 'react-bootstrap'
import Navbar from "./navbar.js"
import {Link} from 'react-router-dom'



class Profils extends Component {
    constructor(props){
        super(props);
        this.state = {
          profils: []
        }
      }

      componentDidMount(){ 
        fetch(`https://akabab.github.io/starwars-api/api/all.json`)
        .then(response => response.json())
        .then(data => {
          let recupProfils = data.map(characters => {
            return (
              <div key={characters.id}>
                <p>{characters.name}</p>
                <a href="#Profil" class="thumbnail">
                <img src={characters.image}/>
                
                </a>
              </div>
            )
          })

          this.setState({ profils: recupProfils })
        })
        
      }
    
    render(){
        return(
            <div class="row">
                <Navbar />
                {this.state.profils} 
            </div>
        );
    }

}


export default Profils