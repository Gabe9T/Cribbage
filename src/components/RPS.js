// eslint-disable-next-line
import React, { useState, useEffect } from 'react';

export const SelectForm = ({ setGamePhase }) => {
    const [values] = useState([
        "Air", "Airplane", "Alien", "Axe", "Baby", "Beer", "Bicycle", "Bird", "Blood", "Book", "Bowl", "Brain", "Butter", "Cage", "Camera", "Car", "Castle", "Cat", "Chain", "Chainsaw", "Church", "Cloud", "Cockroach", "Community", "Computer", "Cross", "Cup", "Death", "Devil", "Diamond", "Dragon", "Duck", "Dynamite", "Electricity", "Fence", "Film", "Fire", "Fish", "Gold", "Grass", "Guitar", "Gun", "Heart", "Helicopter", "Home", "King", "Laser", "Law", "Lightning", "Man", "Math", "Medusa", "Money", "Monkey", "Moon", "Mountain", "Noise", "Nuke", "Paper", "Peace", "Pit", "Planet", "Platimum", "Poison", "Police", "Porcupine", "Power", "Prayer", "Prince", "Princess", "Queen", "Quicksand", "Rain", "Rainbow", "Robot", "Rock", "Satan", "School", "Scissors", "Sky", "Snake", "Spider", "Sponge", "Sun", "Sword", "T.V.", "Tank", "Toilet", "Tornado", "Train", "Tree", "Turnip", "U.F.O.", "Vampire", "Video Game", "Vulture", "Wall", "Water", "Whip", "Wolf", "Woman"
    ]);
    const [rps1, setRPS1] = useState('');
    const [rps2, setRPS2] = useState('');
    const [winner, setWinner] = useState(null);
    const [loser, setLoser] = useState(null);
    const [verb, setVerb] = useState(null);

    const RPS = async () => {
        try {
            const response = await fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${rps1}&object_two=${rps2}`);
            if (!response.ok) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            const jsonifiedresponse = await response.json();
            setWinner(jsonifiedresponse.winner);
            setLoser(jsonifiedresponse.loser);
            setVerb(jsonifiedresponse.outcome);
            return jsonifiedresponse.winner;
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const handleRPS1Change = (event) => {
        setRPS1(event.target.value);
    };

    const handleRPS2Change = (event) => {
        setRPS2(event.target.value);
    };

    const newGame = () => {
        setGamePhase('The Crib')
    }

    if (verb === null) {
        return (
            <>
                <div className='rpsForms'>
                    <div>
                        <select id='player1RPS' onChange={handleRPS1Change}>
                            {values.map((value, index) => (
                                <option key={index} value={value.toLowerCase()}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p className='vs'>VS</p>
                    <div>
                        <select id='player2RPS' onChange={handleRPS2Change}>
                            {values.map((value, index) => (
                                <option key={index} value={value.toLowerCase()}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button id='shootButton' onClick={RPS}>PLAY</button>
            </>
        );
    } else {
        return (
            <>
                <div className='rpsForms'>
                    <div>
                        <select id='player1RPS' onChange={handleRPS1Change}>
                            {values.map((value, index) => (
                                <option key={index} value={value.toLowerCase()}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p className='vs'>VS</p>
                    <div>
                        <select id='player2RPS' onChange={handleRPS2Change}>
                            {values.map((value, index) => (
                                <option key={index} value={value.toLowerCase()}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button id='shootButton' className='scoreButton' onClick={RPS}>PLAY</button>
                <h2>{winner} Wins! {winner} {verb} {loser}. Whoever chose {winner} is player 1 and will deal first.</h2>
                <button id='beginGame' onClick={newGame}>Start Game</button>
            </>
        );
    }
};

export default SelectForm;