import React, { Component } from 'react';
import HiFiveContainer from './HiFive.container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <i className="fa fa-hand-rock-o fa-5x bro-con" />
          <h2>Bro as a Service Bro! It's bro-tactular broseph!</h2>
        </div>
        <p className="App-intro">
          <HiFiveContainer />
        </p>
      </div>
    );
  }
}

export default App;
