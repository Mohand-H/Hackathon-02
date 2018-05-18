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
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
              <Link className="navbar-brand" to="/">GalaxyLove ♥ </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="home"><span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/Find">Find The One</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" to="/">Which one?</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Beat The Odds!
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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