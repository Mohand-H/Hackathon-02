import React, { Component} from 'react';
import './navbar.css'
//import Homepic from './Homepic.js'
import './Home.css'
import {  Grid, Row, Col, Image} from 'react-bootstrap'
//import Navbar from "./navbar.js"
import Navbar from "./Match"
import { Link} from 'react-router-dom'
import Find from './Find.js'



class Home extends Component {
render(){
    return(
        <div class='navBar' container-fluid>
         <Grid>
             <Navbar />
            <Row>
            <Col xs={6} md={4}>
            </Col>
            </Row>
        </Grid>
        
        </div>
        
    )
}
}

export default Home