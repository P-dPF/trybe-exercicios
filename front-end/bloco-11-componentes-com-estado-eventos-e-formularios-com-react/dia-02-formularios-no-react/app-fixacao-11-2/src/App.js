import React from 'react';
import './App.css';

class App extends React.Component {
  /* constructor() {
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
  }; */

  constructor() {
    super();
    
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selecField: '',
      textField: '',
      numberField: '',
      textAreaField:'',
      checkboxField: false,
    }
  }

  handleChange(event) {
    const { name } = event.target
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {

    return (
      <>
        <h1>Formulário Fixação Dia 11.2</h1>
        <form>
          <select name="selecField" value={this.state.selecField} onChange={this.handleChange}>
            <option>Opção A</option>
            <option>Opção B</option>
          </select>
          <input type="text" name="textField" value={this.state.textField} onChange={this.handleChange}></input>
          <input type="number" name="numberField" value={this.state.numberField} onChange={this.handleChange}></input>
          <textarea name="textAreaField" value={this.state.textAreaField} onChange={this.handleChange}></textarea>
          <fieldset>
            <legend>Fieldset Exemplo</legend>
            <input type="checkbox" name="checkboxField" onChange={this.handleChange}></input>
            <input type="file"></input>
          </fieldset>
        </form>
      </>
    );
  }
}

export default App;
