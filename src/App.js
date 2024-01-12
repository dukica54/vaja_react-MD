import logo from './source_files/logo.svg';
import './App.css';

function Nekaj(){
  return(
    <>
        <div id  = 'neke'>Text v Nekaj funkciji</div>
        <p>nekaj nobega v nekaj</p>
    </>

  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Nekaj/>
      </header>
    </div>
  );
}

export default App;
