export const CardDeck = ({ hands }) => {
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
            <button type="click">Deal a Hand</button>
        </>
    )
}