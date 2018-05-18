import React, { Component} from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'
import Find from './Find.js'



class Navbar extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
              <Link className="navbar-brand" to="/">GalaxyLove ♥ </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="home"><span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Find">Find The One</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Which one?</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Beat The Odds!
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <Link className="dropdown-item" to="/">Homeworld</Link>
                      <Link className="dropdown-item" to="/">Species</Link>
                      <Link className="dropdown-item" to="/About">Gender</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar