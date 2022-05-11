import React from "react";
import pokemons from "../data";

class Pokemon extends React.Component {
  render() {
    return (
      pokemons.map(pokemon => (
        <div key={pokemon.id}>
          <h3>{this.props.pokemon.name}</h3>
          <p>{this.props.pokemon.type}</p>
          <p>Average weight{this.props.averageWeight.value}{this.props.averageWeight.value}</p>
        </div>
      ))
    );
  }
}

export default Pokemon;
