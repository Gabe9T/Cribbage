import { useState, useEffect } from "react";

export const Player2Hand = ({ hands, putCardInCrib, gamePhase, clickedIndexes, score, dealer, setGamePhase }) => {
    const [displayedHand, setDisplayedHand] = useState([]);
    const [handClickedIndexes, setHandClickedIndexes] = useState(clickedIndexes);

    useEffect(() => {
        setHandClickedIndexes(clickedIndexes);
    }, [clickedIndexes]);

    useEffect(() => {
        setDisplayedHand(hands.slice(6, 12));
    }, [hands]);

    const handleCardClick = (index) => {
        if (gamePhase === "The Crib") {
            putCardInCrib(displayedHand[index]);
            setDisplayedHand(prevDisplayedHand =>
                prevDisplayedHand.filter((_, i) => i !== index)
            );
        } else {
            setHandClickedIndexes(prevIndexes => {
                if (!prevIndexes.includes(index)) {
                    return [...prevIndexes, index];
                }
                return prevIndexes;
            });
        }
        if (dealer === "Player 2" && handClickedIndexes.length === 3) {
            setGamePhase("The Count")
        }
    };

    return (
        <>
            <div className="playerRow">
                <h2 id="player2h1">Player Two</h2>
                <h2>Score: {score}</h2>
            </div>
            {displayedHand.map((card, index) => (
                <button
                    key={index}
                    className="handCardButton"
                    onClick={() => handleCardClick(index)}
                >
                    <img
                        className={`handCardImage ${handClickedIndexes.includes(index) ? "slide-up" : ""}`}
                        src={card.image}
                        alt="card back"
                    />
                </button>
            ))}
        </>
    );
};