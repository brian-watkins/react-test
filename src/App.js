import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.doStuff = this.doStuff.bind(this);
  }

  doStuff(evt) {
    // console.log("Doing stuff", evt.target.value)
    this.setState({ value: evt.target.value })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <input type="text" onChange={this.doStuff} />
        </p>
        <p id="output">
          You wrote: { this.state.value }
        </p>
      </div>
    );
  }
}

export default App;
