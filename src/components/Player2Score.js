import React from "react";

export const Player2Score = ({ score, setScore }) => {

    const add1 = () => {
        setScore(score + 1);
    };

    const add2 = () => {
        setScore(score + 2);
    };

    const add3 = () => {
        setScore(score + 3);
    };

    const add4 = () => {
        setScore(score + 4);
    };

    const add5 = () => {
        setScore(score + 5);
    };

    const minus1 = () => {
        setScore(score - 1);
    };

    return (
        <>
            <button className="scoreButton" type="click" onClick={add1}>Knobs</button>
            <button className="scoreButton" type="click" onClick={add2}>Fifteen</button>
            <button className="scoreButton" type="click" onClick={add2}>Thirty-One</button>
            <button className="scoreButton" type="click" onClick={add2}>Pair</button>
            <button className="scoreButton" type="click" onClick={add3}>Run of 3</button>
            <button className="scoreButton" type="click" onClick={add4}>Run of 4</button>
            <button className="scoreButton" type="click" onClick={add5}>Run of 5</button>
            <button className="scoreButton" type="click" onClick={add4}>Flush of 4</button>
            <button className="scoreButton" type="click" onClick={add5}>Flush of 5</button>
            <button className="scoreButton" type="click" onClick={add1}>Last Card</button>
            <button id="twoMinus" className="scoreButton" type="click" onClick={minus1}>-1</button>
        </>
    );
};