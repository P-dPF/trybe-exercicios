import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handleSecondClick = this.handleSecondClick(this);
    this.handleThirdClick = this.handleThirdClick(this);
  }

  handleClick() {
    console.log('Botão apertado!');
  }
  
  handleSecondClick() {
    console.log('Falei para não apertar!');
  }
  
  handleThirdClick() {
    console.log('Pare de desobedecer!');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Aperte Aqui!</button>
        <button onClick={this.handleSecondClick}>Não aperte esse!</button>
        <button onClick={this.handleThirdClick}>Não aperte aqui também!</button>
      </div>
    );   
  }
}

export default App;
