import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    greeting: 'Something'
  }

  render() {
    return (
      <div className="App">
        <h2> {this.state.greeting} </h2>
        <h2> </h2>
        <button onClick = {this.greetTeam}>Greet</button>
      </div>
    );
  }

  greetTeam = () => {
    this.setState({greeting: 'hello developers'});
  }

}

export default App;
