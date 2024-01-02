export const Player2Hand = ({ hands }) => {
    return (
        <>
            <h1>Player 2 Hand</h1>
            <img className="handCard" src={hands[1].image} alt="card back" />
            <img className="handCard" src={hands[3].image} alt="card back" />
            <img className="handCard" src={hands[5].image} alt="card back" />
            <img className="handCard" src={hands[7].image} alt="card back" />
            <img className="handCard" src={hands[9].image} alt="card back" />
            <img className="handCard" src={hands[11].image} alt="card back" />
        </>
    )
}