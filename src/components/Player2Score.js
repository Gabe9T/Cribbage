import React, { useState } from "react";

export const Player2Score = () => {
    const [score, setScore] = useState(0);

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
            <h1>Player 2 Score</h1>
            <button type="click" onClick={add1}>Knobs</button>
            <button type="click" onClick={add2}>Fifteen</button>
            <button type="click" onClick={add2}>Pair</button>
            <button type="click" onClick={add3}>Run of 3</button>
            <button type="click" onClick={add4}>Run of 4</button>
            <button type="click" onClick={add5}>Run of 5</button>
            <button type="click" onClick={add4}>Flush of 4</button>
            <button type="click" onClick={add5}>Flush of 5</button>
            <button type="click" onClick={minus1}>-1</button>
            <h3>Score: {score}</h3>
        </>
    );
};