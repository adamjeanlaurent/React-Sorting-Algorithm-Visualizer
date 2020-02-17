import React, { useState } from "react";
import "../styles/App.css";
import { Header } from "./Header";

export default function SortingVisualizer(props) {
    const LOWER_BOUND = 5;
    const UPPER_BOUND = 200;
    const ARRAY_SIZE = 200;

    const [array, updateArray] = useState(fillArrayWithRandomValues);

    // returns a random number between bounds inclusive
    function randomNumberBetweenBounds() {
        return Math.floor(Math.random() * UPPER_BOUND) + LOWER_BOUND;
    }

    // fills array with random values
    function fillArrayWithRandomValues() {
        let tempArray = [];
        for (let i = 0; i < ARRAY_SIZE; i++) {
            tempArray.push(randomNumberBetweenBounds());
        }
        return tempArray;
    }

    return (
        <div>
            <Header />
            <div className="array-container">
                {array.map((value, idx) => {
                    return (
                        <div
                            style={{ height: `${value * 2}px` }}
                            className="array-bar"
                            key={idx}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}
