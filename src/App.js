import './App.css';
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Logo2 from './components/Logo2'
import Contador from './components/Contador'
import Contador2 from './components/Contador2'

const msg = "Hola mundo!";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Logo2 msg={msg}></Logo2>
      <header className="App-header">
      <Logo></Logo>
      <Contador></Contador>
      <Contador></Contador>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Esto es un ejemplo para Digitalers</p>

        <Contador2></Contador2>
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
