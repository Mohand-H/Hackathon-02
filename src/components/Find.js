import React, { Component} from 'react';
import './navbar.css'
import './Home.css'
import {Grid, Row, Col,Image} from 'react-bootstrap'
import Navbar from "./navbar.js"
import {Link} from 'react-router-dom'



class Find extends Component {
render(){
    return(
        <div container-fluid>
             <Navbar />
          <div>
              <h1>test</h1>
              </div>
        </div>
        
    )
}
}

export default Find