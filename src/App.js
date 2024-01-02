import React from 'react';
import { Header } from './components/Header';
import { Crib } from './components/Crib';
import { CardDeck } from './components/CardDeck';
import { Player1Hand } from './components/Player1Hand';
import { Player1Score } from './components/Player1Score';
import { Player2Hand } from './components/Player2Hand';
import { Player2Score } from './components/Player2Score';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header />
      <CardDeck />
      <Crib />
      <div id='hands'>
        <Player1Hand />
        <Player2Hand />
      </div>
      <div id='scores'>
        <Player1Score />
        <Player2Score />
      </div >

    </React.Fragment>
  );
}

export default App;
