// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <div className="App text-text flex flex-col h-screen">
      <Header />
      <Game />
      <footer className='w-full'>
        <p>&copy; 2024 Bradley Titus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;