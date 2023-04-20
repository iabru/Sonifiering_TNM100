import './App.css';
import { Piano } from './components/piano/Piano.js'
import Graph from './components/graph/Graph.js'

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Piano />
        <Graph/>
      </div>
    </div>
  );
}

export default App;