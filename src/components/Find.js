import React, { Component} from 'react';
import Data from "../data/dataApi"
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

             <div className="showProfil" container-fluid>
                 <Grid>

                     <Data />

                     <Row>

                     <Col xs={6} md={4}>
                     </Col>

                     </Row>
                     
                 </Grid>
             </div>
        </div>
        
    )
}
}

export default Find

