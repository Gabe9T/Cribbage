export const Player1Hand = ({hands}) => {
    console.log(hands);
    return (
        <>
    <h1>Player 1 Hand</h1>
    <img className="handCard" src={hands[0].image} alt="card back"/>
    <img className="handCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back"/>
    <img className="handCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back"/>
    <img className="handCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back"/>
    <img className="handCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back"/>
    <img className="handCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back"/>
    </>
    )
}