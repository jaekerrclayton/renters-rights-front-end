import React from 'react';
import logo from './logo.svg';
import './App.css';
import EvictionTypeList from './components/evictionTypesComponents/evictionTypesList';
import evictionTypesJson from './components/evictionTypesComponents/evictionTypesData.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EvictionTypeList types={evictionTypesJson}/>
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
