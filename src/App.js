import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import PlayerList from './players/PlayerList';

class App extends Component {
  state = {
    greeting: 'Something',
    players: [
      {id: 1, name: "Sam"},
      {id: 2, name: "Joe"},
      {id: 3, name: "Tom"},
    ]
  }

  render() {
    return (
      <div className="App">
        <h2> {this.state.greeting} </h2>
      
        <button onClick = {this.greetTeam}>Greet</button>

        <PlayerList players = {this.state.players}/>

      </div>
    );
  }

  greetTeam = () => {
    this.setState({greeting: 'hello developers'});
  }

}

export default App;
