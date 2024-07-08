//U67724813
//Alaina Musselwhite 

import React from 'react';
import './App.css';
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
      <Header title="Meet the Team" />
      <Gallery members={teamMembers} />
    </div>
  );
}

export default App;