import React from 'react';
import logo from './logo.png';
import './App.scss';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Timer bla</h1>
      </header>
      <Timer />
      <Countdown />
    </div>
  );
}

export default App;
