//U67724813
//Alaina Musselwhite 

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Gallery from './Gallery';
import Header from './Header';

const teamMembers = [
  { name: 'Alaina', role: 'CEO', photo: 'file:///Users/alainamusselwhite/Downloads/photo%201.webp' },
  { name: 'Tyler', role: 'CTO', photo: 'file:///Users/alainamusselwhite/Downloads/team%202.webp' },
  { name: 'Nic', role: 'CFO', photo: 'file:///Users/alainamusselwhite/Downloads/team%203.webp' }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
