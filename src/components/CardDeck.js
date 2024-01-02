export const CardDeck = () => {
    return (
        <>
        <h1>cardDeck</h1>
        <button type="click">Deal a Hand</button>
            <div id="deck">
                <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                <img className="deckCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                <img className="deckCard" src="https://deckofcardsapi.com/static/img/KH.png" alt="flipped card" />
            </div>
        </>
    )
}