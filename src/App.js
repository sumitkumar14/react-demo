import logo from './logo.svg';
import AddTask from './components/AddTask.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTask/>
      <header className="App-header">
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
