import React, { Component} from 'react';
import './navbar.css'
import './Home.css'
import {  Grid, Row, Col, Image} from 'react-bootstrap'
import Navbar from "./navbar.js"
import { Link} from 'react-router-dom'
import Find from './Find.js'



class Home extends Component {
render(){
    return(
        <div container-fluid>
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