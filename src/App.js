// Счетчик кликов

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello word!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
