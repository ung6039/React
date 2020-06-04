import React from 'react';
import logo from './logo.svg';
import './App.css';

///JSX (javascript이지만 xml형식으로 처리
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
          React~Hello !
        </a>
      </header>
    </div>
  );
}

export default App;
