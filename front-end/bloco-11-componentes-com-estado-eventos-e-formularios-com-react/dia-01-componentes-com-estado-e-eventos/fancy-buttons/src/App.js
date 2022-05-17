import React from 'react';
import './App.css';

function handleClick() {
  console.log('Botão apertado!');
}

function handleSecondClick() {
  console.log('Falei para não apertar!');
}

function handleThirdClick() {
  console.log('Pare de desobedecer!');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={handleClick}>Aperte Aqui!</button>
        <button onClick={handleSecondClick}>Não aperte esse!</button>
        <button onClick={handleThirdClick}>Não aperte aqui também!</button>
      </div>
    );   
  }
}

export default App;
