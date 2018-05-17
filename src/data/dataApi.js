import React, {Component} from 'react';
import { render } from 'react-dom';

class Data extends Component {  
  constructor(props){
    super(props);
    this.state = {
      profils: []
    }
  }
 
  componentDidMount(){ 
    fetch(`https://akabab.github.io/starwars-api/api/all.json`)
    .then(respons => respons.json())
    .then(data => { 

      let recupProfils = data.map(characters => {console.log(characters)
        return (
          <div className='showProfil'>
             <div key={characters.id}></div> 
             <img src={characters.image}/>
             <h4>{characters.name}</h4>
             <p>{characters.gender}</p>  
             <p>{characters.species}</p>           
          </div>
        )
      })
      this.setState({ profils: recupProfils })
    })
    
  }

  render() {
    return (
      <div>
        Profils : {this.state.profils} 
        
    
      </div>  
    );
  }
}
export default Data;