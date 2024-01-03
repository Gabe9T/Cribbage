export const Crib = ({ crib, gamePhase, dealer }) => {

    if (gamePhase === "The Count") {
        return (
            <>
                <h2>{dealer}'s Crib</h2>
                <img className="cribCard" src={crib[0].image} alt="card back" />
                <img className="cribCard" src={crib[1].image} alt="card back" />
                <img className="cribCard" src={crib[2].image} alt="card back" />
                <img className="cribCard" src={crib[3].image} alt="card back" />
            </>
        )
    } else {
        if (crib.length === 4) {
            return (
                <>
                    <h2>{dealer}'s Crib</h2>
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                </>
            )
        } else if (crib.length === 3) {
            return (
                <>
                    <h2>{dealer}'s Crib</h2>
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                </>
            )
        } else if (crib.length === 2) {
            return (
                <>
                    <h2>{dealer}'s Crib</h2>
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                </>
            )
        } else if (crib.length === 1) {
            return (
                <>
                    <h2>{dealer}'s Crib</h2>
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                    <img className="cribCard" src="https://deckofcardsapi.com/static/img/back.png" alt="card back" />
                </>
            )
        } else if (crib.length === 0) {
            return (
                <>
                    <h2>{dealer}'s Crib</h2>
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                    <img className="blankCribCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/591px-White_card.svg.png" alt="card back" />
                </>
            )
        } else {
            return (
                <>
                    <h2>{dealer}'s Crib</h2>
                </>
            )
        }
    }
}