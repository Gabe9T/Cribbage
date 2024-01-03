export const CardDeck = ({ hands, onDeal, gamePhase}) => {
    const handleClick = () => {
        onDeal()
    };

    if (gamePhase !== "The Crib") {
        return (
            <>
                <div id="deck">
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src={hands[12].image} alt="flipped card" />
                </div>
                <button type="click" onClick={handleClick}>Deal a Hand</button>
            </>
        )
    } else {
        return (
            <>
                <div id="deck">
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    
                </div>
                <button type="click" onClick={handleClick}>Deal a Hand</button>
            </>
        )
    }
}