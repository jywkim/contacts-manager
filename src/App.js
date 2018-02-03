import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contacts Manager</h1>
        </header>

        <Contact name="Jonathan Kim"/>

      </div>
    );
  }
}

export default App;
