import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MasterContainer from './containers/MasterContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MasterContainer />
      </div>
    );
  }
}

export default App;
