import React from "react";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      loading: true,
      randomUser: undefined,
    }
  }

  componentDidMount() {
    const url = 'https://api.randomuser.me/';
    /* this.setState({ loading: true }) */
    console.log('montou');

   /*  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data.response)); */
  }

  /* buildProfile() {
    const { randomUser } = this.state;
    return (
      <div>
        <img src={ randomUser[0] } />
      </div>
    )
  } */

  render() {
    const { loading, randomUser } = this.state;
    const loadingMessage = <div>Carregando...</div>

    return (
      <div className="App">
        {/* {loading ? loadingMessage : } */}
      </div>
    );
  }
}

export default App;
