export const Player1Hand = ({hands}) => {
    return (
        <>
    <h1>Player 1 Hand</h1>
    <img className="handCard" src={hands[0].image} alt="card back"/>
    <img className="handCard" src={hands[2].image} alt="card back"/>
    <img className="handCard" src={hands[4].image} alt="card back"/>
    <img className="handCard" src={hands[6].image} alt="card back"/>
    <img className="handCard" src={hands[8].image} alt="card back"/>
    <img className="handCard" src={hands[10].image} alt="card back"/>
    </>
    )
}