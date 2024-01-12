import logo from './source_files/logo.svg';
import './App.css';
import {useState} from 'react'

function Nekaj(){
   const [tekst, setTekst]= useState("originalni tekst");
   const  tekst1="nekaj 1"
   const tekst2 = "nekaj 2"
  return(
    <>
        <div id  = 'neke'>Text v Nekaj funkciji</div>
        <p>nekaj nobega v nekaj</p>
        <button onClick={(e)=>{setTekst(!tekst)}}>klikni me</button>
        <span>{tekst? tekst1: tekst2}</span>
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
