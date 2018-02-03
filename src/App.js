import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from "./components/ContactList";

const contacts = [
  { id: 1, name: "Jonathan Kim" },
  { id: 2, name: "LeBron Curry" },
  { id: 3, name: "DeMar Lowry" },
  { id: 4, name: "Kobe Jordan" }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contacts Manager</h1>
        </header>

        <ContactList contacts={contacts} />

      </div>
    );
  }
}

export default App;
