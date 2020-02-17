import React, { useState } from "react";
import "../styles/App.css";

export default function SortingVisualizer(props) {
    const UPPER_BOUND = 200;
    const ARRAY_SIZE = 200;

    const [array, updateArray] = useState(fillArrayWithRandomValues);

    function fillArrayWithRandomValues() {
        // updateArray([]);
        let tempArray = [];
        for (let i = 0; i < ARRAY_SIZE; i++) {
            tempArray.push(Math.floor(Math.random() * UPPER_BOUND) + 5);
        }
        return tempArray;
    }

    return (
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
    );
}
