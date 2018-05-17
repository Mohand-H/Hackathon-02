import React from 'react';

const WhichOne = (props) => {
    return (
        <div>
            <h1> Impénétrable, la voie de l'amour est</h1>
            <div> img </div>
            <h2> La voie de l'amour, tu trouveras,
                Un numéro entre 1 et 8, tu choisiras
            </h2>
            <input onChange={props.handleInput}/>
            Ta destinée, tu partageras
            <div id="image"> </div>
        </div>
    )
}

export default WhichOne
