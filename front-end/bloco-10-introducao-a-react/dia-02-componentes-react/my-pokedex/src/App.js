import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default App;
