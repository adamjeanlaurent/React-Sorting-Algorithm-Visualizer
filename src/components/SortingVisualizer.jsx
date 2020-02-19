import React, { useState } from "react";
import "../styles/App.css";
import { Header } from "./Header";
import HelperMethods, {
    fillArrayWithRandomValues,
    turnAllOtherBarsBlue,
    removeAllHighlightedBars,
    randomNumberBetweenBounds
} from "../HelperMethods/HelperMethods";

export default function SortingVisualizer(props) {
    let arrayCache = [];
    let animations = [];
    const [array, updateArray] = useState(fillArrayWithRandomValues);

    function animatedBubbleSort() {
        let tempArr = array.slice();
        let len = tempArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (tempArr[j] > tempArr[j + 1]) {
                    let tmp = tempArr[j];
                    tempArr[j] = tempArr[j + 1];
                    tempArr[j + 1] = tmp;
                    arrayCache.push(tempArr.slice());
                    animations.push(j);
                    setTimeout(() => {
                        let indexToTurnRed = animations.shift();
                        let highlightedBar = document.getElementById(
                            `${indexToTurnRed}`
                        );
                        highlightedBar.style.backgroundColor = "red";
                        let arrayToUpdate = arrayCache.shift();
                        turnAllOtherBarsBlue(indexToTurnRed, arrayToUpdate);
                        if (arrayCache.length == 0) {
                            removeAllHighlightedBars();
                        }
                        updateArray(arrayToUpdate);
                    }, i * 1);
                }
            }
        }
    }

    return (
        <div>
            <Header
                bubbleSort={animatedBubbleSort}
                randomize={() => {
                    updateArray(fillArrayWithRandomValues);
                }}
            />
            <div className="array-container">
                {array.map((value, idx) => {
                    return (
                        <div
                            style={{ height: `${value * 2}px` }}
                            className="array-bar"
                            key={idx}
                            id={idx}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}
