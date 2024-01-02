import React, { useState, useEffect } from 'react';

export const Deal = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hands, setHands] = useState([]);

    useEffect(() => {
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=12')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                } else {
                    return response.json().then(jsonifiedresponse => {
                        setHands(jsonifiedresponse.cards);
                        setIsLoaded(true);
                        return jsonifiedresponse;
                    });
                }
            })
            .then((jsonifiedresponse) => {
                setHands(jsonifiedresponse.cards)
                setIsLoaded(true)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoaded(true)
            });
    }, [])
    console.log(hands);

    // if (error) {
    //     return <h1>Error: {error}</h1>;
    // } else if (!isLoaded) {
    //     return <h1>...Loading...</h1>;
    // } else {
    //     return (
    //         <React.Fragment>
    //             <h1>Hands</h1>
    //             <ul>
    //                 {hands.map((card, index) =>
    //                     <li key={index}>
    //                         <img src={card.image} alt='card' />
    //                     </li>
    //                 )}
    //             </ul>
    //             {/* <img src={hands[1].image} alt='card' /> */}
    //         </React.Fragment>
    //     );
    // }
}