import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Crib } from './components/Crib';
import { CardDeck } from './components/CardDeck';
import { Player1Hand } from './components/Player1Hand';
import { Player1Score } from './components/Player1Score';
import { Player2Hand } from './components/Player2Hand';
import { Player2Score } from './components/Player2Score';
import { PhaseSelector } from './components/PhaseSelector';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hands, setHands] = useState([]);
  const [crib, setCrib] = useState([]);
  const [gamePhase, setGamePhase] = useState('The Crib');
  const [clickedIndexes, setClickedIndexes] = useState([]);

  const fetchNewHand = async () => {
    try {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=13');
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const jsonifiedresponse = await response.json();
      return jsonifiedresponse.cards;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    if (hands.length === 0) {
      fetchNewHand()
        .then(newHand => {
          setHands(newHand);
          setIsLoaded(true);
        })
        .catch(error => {
          setError(error.message);
          setIsLoaded(true);
        });
    }
  }, [hands]);

  const handleDeal = () => {
    fetchNewHand()
      .then(newHand => {
        setHands(newHand);
        setCrib([]);
        setGamePhase("The Crib")
        setClickedIndexes([])
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const putCardInCrib = (card) => {
    const newCrib = [...crib, card]
    setCrib(newCrib);
    if (newCrib.length === 4) {
      setGamePhase("The Go")
    }
    
  };

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>;
  }


  return (
    <React.Fragment>
      <Header />
      <br></br>
      <br></br>
      <CardDeck gamePhase={gamePhase} hands={hands} onDeal={handleDeal} />
      <Crib crib={crib} gamePhase={gamePhase} />
      <PhaseSelector gamePhase={gamePhase} setGamePhase={setGamePhase} />
      <div id='hands'>
        <Player1Hand clickedIndexes={clickedIndexes} gamePhase={gamePhase} hands={hands} putCardInCrib={putCardInCrib} />
        <Player2Hand clickedIndexes={clickedIndexes} gamePhase={gamePhase} hands={hands} putCardInCrib={putCardInCrib} />
      </div>
      <div id='scores'>
        <Player1Score />
        <Player2Score />
      </div >

    </React.Fragment>
  );
}

export default App;
