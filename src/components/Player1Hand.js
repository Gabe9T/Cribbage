import { useState, useEffect } from "react";

export const Player1Hand = ({ hands, putCardInCrib }) => {
    const [displayedHand, setDisplayedHand] = useState([]);

    useEffect(() => {
        // Set the displayed hand initially and update when 'hands' prop changes
        setDisplayedHand(hands.slice(0, 6));
    }, [hands]);

    const handleCardClick = (index) => {
        putCardInCrib(hands[index]);

        // Update the displayed hand by removing the clicked card
        setDisplayedHand(prevDisplayedHand =>
            prevDisplayedHand.filter((_, i) => i !== index)
        );

        console.log(`Clicked on card ${index + 1}: ${hands[index].image}`);
        // You can call a function here or perform any other action
    };

    return (
        <>
            <h1>Player 1 Hand</h1>
            {displayedHand.map((card, index) => (
                <button
                    key={index}
                    className="handCardButton"
                    onClick={() => handleCardClick(index)}
                >
                    <img
                        className="handCardImage"
                        src={card.image}
                        alt="card back"
                    />
                </button>
            ))}
        </>
    );
};