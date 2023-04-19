import './App.css';
import { Piano } from './components/piano/Piano.js'
import Graph from './components/graph/Graph.js'

function App() {
  return (
    <div className="App">
      <header className="Content">
        <Piano />
        <Graph/>
      </header>
    </div>
  );
}

export default App;