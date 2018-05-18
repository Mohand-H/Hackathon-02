import React, {Component} from 'react';

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
      let recupProfils = data.map(characters => {
        return (
          <div key={characters.id}>
            <p>{characters.name}</p>
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