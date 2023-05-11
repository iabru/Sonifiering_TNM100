import './App.css';
import React, { useState } from 'react';
import { Piano } from './components/piano/Piano.js'
import Graph from './components/graph/Graph.js'
import Switch from './components/switch/Switch.js'
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

  // Till switches
  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(false);
  
  return (
    <>
    <div className="App">
      <div className="Switches">
        <p className="subhead-text">Piano</p>
        <Switch
          id="piano"
          isOn={value}
          onColor="#CBF3F0"
          handleToggle={() => setValue(!value)}
        />
        <p className="subhead-text">Data 1</p>
        <Switch className="data-switch"
          id="data"
          isOn={value2}
          onColor="#CBF3F0"
          handleToggle={() => setValue2(!value2)}
        />
        <p className="subhead-text">Data 2</p>
      </div>
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
