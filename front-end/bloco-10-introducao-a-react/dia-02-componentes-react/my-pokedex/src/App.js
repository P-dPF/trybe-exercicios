import './App.css';
import React from 'react';
import Pokemon from './Components/Pokemon';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {pokemons.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default App;
