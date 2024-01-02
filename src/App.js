import React, {useState, useEffect} from 'react';
import { Header } from './components/Header';
import { Crib } from './components/Crib';
import { CardDeck } from './components/CardDeck';
import { Player1Hand } from './components/Player1Hand';
import { Player1Score } from './components/Player1Score';
import { Player2Hand } from './components/Player2Hand';
import { Player2Score } from './components/Player2Score';
// import { Deal } from './components/Deal';
import './App.css';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hands, setHands] = useState([]);

  useEffect(() => {
    if (hands.length === 0) {
      fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=12')
          .then(response => {
              if (!response.ok) {
                  throw new Error(`${response.status}: ${response.statusText}`);
              } else {
                  return response.json().then(jsonifiedresponse => {
                      setHands(jsonifiedresponse.cards);
                      setIsLoaded(true);
                      return jsonifiedresponse;
                  });
              }
          })
          .catch((error) => {
              setError(error.message)
              setIsLoaded(true)
          });
        }
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>;
} else if (!isLoaded) {
    return <h1>...Loading...</h1>;
} 

  return (
    <React.Fragment>
      <Header />
      <CardDeck />
      <Crib />
      <div id='hands'>
        <Player1Hand hands={hands}/>
        <Player2Hand hands={hands}/>
      </div>
      <div id='scores'>
        <Player1Score />
        <Player2Score />
      </div >

    </React.Fragment>
  );
}

export default App;
