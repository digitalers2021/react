import './App.css';
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Logo2 from './components/Logo2'
import Contador from './components/Contador'
import Contador2 from './components/Contador2'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const msg = "Hola mundo!";

function App() {
  return (
    <Router>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cursos">Cursos</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/cursos">
          <Cursos></Cursos>
        </Route>
       <Route path="/about">
          <About></About>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>

      </Switch>
      </div>
    </Router>
    
  );
}


function Home(){
  return <div className="App">
      <Logo2 msg={msg}></Logo2>
      <header className="App-header">
      <Logo></Logo>
      <Contador nombre="incrementar"></Contador>
      <Contador nombre="incrementar 2"></Contador>
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
}

function About() {
  return <div class="about">
    <h1>About</h1>
    <p>Esta es un ejercicio para ver el router en react</p>

  </div>

}


function Cursos() {
  return <div class="cursos">
    <h1>Cursos</h1>
    <ul>
      <li>Python</li>
      <li>React</li>

    </ul>

  </div>

}

export default App;
