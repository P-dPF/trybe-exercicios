import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    
    this.state = {
      cliquesPrimeiroBotao: 0,
      cliquesSegundoBotao: 0,
      cliquesTerceiroBotao: 0,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSecondClick = this.handleSecondClick.bind(this);
    this.handleThirdClick = this.handleThirdClick.bind(this);
  }

  handleClick() {
    console.log('Botão apertado!');
    console.log(this);
    /* this.setState(() => ({ cliquesPrimeiroBotao:1 })) */
    this.setState((estadoAnterior, _props) => ({
      cliquesPrimeiroBotao: estadoAnterior.cliquesPrimeiroBotao + 1
    }))
  }
  
  handleSecondClick() {
    console.log('Falei para não apertar!');
    console.log(this);
    /* this.setState(() => ({ cliquesSegundoBotao: 1 })) */
    this.setState((estadoAnterior, _props) => ({
      cliquesSegundoBotao: estadoAnterior.cliquesSegundoBotao + 1
    }))
  }
  
  handleThirdClick() {
    console.log('Pare de desobedecer!');
    console.log(this);
    /* this.setState(() => ({ cliquesTerceiroBotao:1 })) */
    this.setState((estadoAnterior, _props) => ({
      cliquesTerceiroBotao: estadoAnterior.cliquesTerceiroBotao + 1
    }))
  }

  changeBkgColor = (numClicks) => {
    if (numClicks % 2 === 0) 
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Aperte Aqui! {this.state.cliquesPrimeiroBotao}</button>
        <button onClick={this.handleSecondClick}>Não aperte esse! {this.state.cliquesSegundoBotao}</button>
        <button onClick={this.handleThirdClick}>Não aperte aqui também! {this.state.cliquesTerceiroBotao}</button>
      </div>
    );   
  }
}

export default App;
