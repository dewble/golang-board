import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './About';


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Router>
        <Route path="/about" component={About} />
        </Router>
      </header>
    </div>
  );


}

export default App;
