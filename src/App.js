import React, { useState, useEffect } from 'react';
import { Crib } from './components/Crib';
import { CardDeck } from './components/CardDeck';
import { Player1Hand } from './components/Player1Hand';
import { Player1Score } from './components/Player1Score';
import { Player2Hand } from './components/Player2Hand';
import { Player2Score } from './components/Player2Score';
import './App.css';

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hands, setHands] = useState([]);
    const [crib, setCrib] = useState([]);
    const [gamePhase, setGamePhase] = useState('The Crib');
    const [clickedIndexes, setClickedIndexes] = useState([]);
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [winState, setWinState] = useState(false);
    const [winner, setWinner] = useState(null);
    const [dealer, setDealer] = useState("Player 1")

    const updatePlayer1Score = (newScore) => {
        setPlayer1Score(newScore);
        if (newScore > 120) {
            setWinState(true)
            setWinner(1)
        }
    };

    const newGame = () => {
        setHands([]);
        setCrib([]);
        setGamePhase("The Crib");
        setClickedIndexes([]);
        setPlayer1Score(0);
        setPlayer2Score(0);
        setWinState(false);
        setWinner(null);
        setDealer("Player 1")
        handleDeal();
    }

    const updatePlayer2Score = (newScore) => {
        setPlayer2Score(newScore);
        if (newScore > 120) {
            setWinState(true)
            setWinner(2)
        }
    };

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
            if (dealer === "Player 1") {
                setDealer("Player 2");
            }   else {
                setDealer("Player 1");
            }
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

    if (winState === false) {
        return (
            <React.Fragment>
                <br></br>
                <br></br>
                <div className='deckAndCrib'>
                    <CardDeck gamePhase={gamePhase} hands={hands} onDeal={handleDeal} />
                    <Crib crib={crib} dealer={dealer} gamePhase={gamePhase} />
                </div>
                <hr />

                <div id='hands'>
                    <div id='player1hand'>
                        <Player1Hand
                            clickedIndexes={clickedIndexes}
                            gamePhase={gamePhase}
                            hands={hands}
                            putCardInCrib={putCardInCrib}
                            score={player1Score}
                            dealer={dealer}
                            setGamePhase={setGamePhase} />
                        <br></br>
                        <Player1Score score={player1Score} setScore={updatePlayer1Score} />
                    </div>
                    <div id='player2hand'>
                        <Player2Hand
                            clickedIndexes={clickedIndexes}
                            gamePhase={gamePhase}
                            hands={hands}
                            putCardInCrib={putCardInCrib}
                            score={player2Score}
                            dealer={dealer}
                            setGamePhase={setGamePhase}  />
                        <br></br>
                        <Player2Score score={player2Score} setScore={updatePlayer2Score} />
                    </div>
                </div>
                <div id='scores'>


                </div >

            </React.Fragment>
        );
    } else {
        return (
            <>
                <img id='winGif' src='https://media4.giphy.com/media/Ceq96LjQ9Wmpq/giphy.gif' alt='win'></img>
                    <h1 id='winH1'>Player {winner} Wins!</h1>
                    <button id='playAgainButton' className='scoreButton' type='click' onClick={newGame}>Play Again</button>
            </>
        )
    }
}

export default App;
