import './App.css';
import React from 'react';
import Pokemon from './Components/Pokemon';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Pokemon pokemon='' />
      </div>
    );
  }
}

export default App;
