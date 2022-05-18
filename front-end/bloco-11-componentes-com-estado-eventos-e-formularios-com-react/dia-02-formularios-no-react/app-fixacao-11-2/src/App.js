import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
    /* this.handleTextareaChange = this.handleTextareaChange(this);
 */
    this.state = {
      options: '',
      textInput: '',
      numberInput: 0,
      textarea: '',
    }
  }

  handleSelectChange(event) {
    this.setState({
      options: event.target.value,
    });
  };

  handleTextInputChange(event) {
    this.setState({
      textInput: event.target.value,
    })
  };

  handleNumberInputChange(event) {
    this.setState({
      numberInput: event.target.value,
    })
  };

  /* handleTextareaChange(event) {
    this.setState({
      textarea: event.target.value,
    })    
  };
 */
  render() {

    const { options, textInput, numberInput } = this.state;

    return (
      <>
        <h1>Formulário Fixação Dia 11.2</h1>
        <form>
          <select value={options} onChange={this.handleSelectChange}>
            <option>Opção A</option>
            <option>Opção B</option>
          </select>
          <input type="text" value={textInput} onChange={this.handleTextInputChange}></input>
          <input type="number" value={numberInput} onChange={this.handleNumberInputChange}></input>
          {/* <textarea value={textarea} onChange={this.handleTextareaChange}></textarea> */}
        </form>
      </>
    );
  }
}

export default App;
