import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
   
    this.state = {
      textInput: '',
    }
  }

  handleTextInputChange(event) {
    this.setState({
      textInput: event.target.value,
    })
  };

  render() {

    return (
      <>
        <h1>Formulário Fixação Dia 11.2</h1>
        <form>
          <select>
            <option>Opção A</option>
            <option>Opção B</option>
          </select>
          <input type="text" value={this.state.textInput} onChange={this.handleTextInputChange}></input>
          <input></input>
          <textarea></textarea>
        </form>
      </>
    );
  }
}

export default App;
