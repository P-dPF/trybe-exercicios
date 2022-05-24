// src/App.js
import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Connections from './components/Connections';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showProfile: true,
    };

    this.changeProfile = this.changeProfile.bind(this);
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  componentDidMount() {
    const myUser = 'P-dPF'; //Preencha myUser com o seu user do GitHub.
    try {
      const url = `https://api.github.com/users/${myUser}`;
      const response = await fetch(url)
      const dataJson = await response.json()
      this.setState({ api: dataJson })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { showProfile } = this.state;
    return (
      <div className="gitNetwork d-flex flex-column justify-content-center">
        {showProfile ? <Profile /> : null}
        <div className="central d-flex justify-content-center">
          <button
            className="btn btn-dark align-self-center"
            type="button"
            onClick={this.changeProfile}
          >
            Mostrar / Ocultar Perfil
          </button>
        </div>
        <Connections />
      </div>
    );
  }
}

export default App;