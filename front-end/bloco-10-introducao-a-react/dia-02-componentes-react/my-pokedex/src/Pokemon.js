import React from "react";

class Pokemon extends React.Component {
  render() {
    
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div>
        <h4>Nome: { name }</h4>
        <img src={image} alt={ name }></img>
        <p>Tipo: { type }</p>
        <p>Peso médio: { averageWeight.value }{ averageWeight.measurementUnit }</p>
      </div>
    )
  }
}

export default Pokemon;
