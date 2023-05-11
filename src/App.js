import './App.css';
import React, { useState } from 'react';
import { Piano } from './components/piano/Piano.js'
import Graph from './components/graph/Graph.js'
import SideMenu from './SideMenu/SideMenu';
import Synth from './components/Synth.js';

function App() {
  
  const [keysPressed, setKeysPressed] = useState(false);

  console.log(keysPressed);
  const [historyUpdate, setHistoryUpdate] = useState({
    "tab1Option": [0,0],
    "tab2Option": [0,0,0],
    "tab3Option": [0,0],
    "tab4Option": [0,0]
  });
  
  return (
    <>
    <div className="App">
      <div className="Content">
        <Piano keysPressed={keysPressed} updateKeysPressed={setKeysPressed}/>
        <Graph history={historyUpdate} keysPressed={keysPressed} updateKeysPressed={setKeysPressed}/>
        <Synth keysPressed={keysPressed} historyUpdate={historyUpdate}></Synth>
      </div>
    </div>
    <SideMenu history={historyUpdate} updateHistory={setHistoryUpdate}/>
    </>
  );
}

export default App;
