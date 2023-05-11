import React, { useState } from 'react';
import './App.css';
import { Piano } from './components/piano/Piano.js'
import Graph from './components/graph/Graph.js'
import Switch from './components/switch/Switch.js';

function App() {
  /* Av någon anledning klickas bara den ena switchen igång... */
  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(false);

  return (
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
        <Piano />
        <Graph/>
      </div>
    </div>
  );
}

export default App;