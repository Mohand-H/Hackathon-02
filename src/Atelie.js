import React,{Component}from 'react';

class Atelie extends Component {  
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
    
    //.then(parsedJSON => console.log(parsedJSON.results))
    //.catch(error => console.log('parsing faild', error))
  }

  render() {
    return (
      <div>
        {/* <h1>Hello {this.props.firstName}</h1> */}
        Profils : {this.state.profils} 
      </div>  
    );
  }
}
export default Atelie;
