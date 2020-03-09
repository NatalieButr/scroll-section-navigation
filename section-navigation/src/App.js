import React from 'react';

import './App.css';
import Characters from './components/Characters';
import CharactersList from './components/CharactersList';
import Header from './components/Header/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
