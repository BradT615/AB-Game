// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <div className="App text-zinc-100 flex flex-col h-screen">
      <Header />
      <Game />
    </div>
  );
}

export default App;