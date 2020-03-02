import React, { useState } from "react";
import "../styles/App.css";
import { Header } from "./Header";
import HelperMethods from "../HelperMethods/HelperMethods";

export default function SortingVisualizer(props) {
    let arrayCache = [];
    let animations = [];
    const [array, updateArray] = useState(
        HelperMethods.fillArrayWithRandomValues
    );

    function highlightRedPointer() {
        let indexToTurnRed = animations.shift();
        let highlightedBar = document.getElementById(`${indexToTurnRed}`);
        highlightedBar.style.backgroundColor = "red";
        let arrayToUpdate = arrayCache.length === 0 ? array : arrayCache[0];
        HelperMethods.turnAllOtherBarsBlue(indexToTurnRed, arrayToUpdate);
        if (arrayCache.length === 0) {
            HelperMethods.removeAllHighlightedBars();
            HelperMethods.enableButtons();
        }
    }

    function handleSwap() {
        let arrayToUpdate = arrayCache.shift();
        updateArray(arrayToUpdate);
    }

    function animatedSelectionSort() {
        let tempArr = array.slice();
        let len = tempArr.length;
        for (let i = 0; i < len; i++) {
            let min = i;
            for (var j = i + 1; j < len; j++) {
                animations.push(j);
                if (tempArr[min] > tempArr[j]) {
                    min = j;
                }
            }
            if (min !== i) {
                let tmp = tempArr[i];
                tempArr[i] = tempArr[min];
                tempArr[min] = tmp;
                arrayCache.push(tempArr.slice());
                setTimeout(() => {
                    handleSwap();
                }, i * 50);
            }
        }
    }
    // problems, it's getting progessively faster, and what is the best time interval to use, is both of them happening
    // at the same time what we want ??? Refactor Bubble sort and once that is working refactor selection sort
    function animatedBubbleSort() {
        let tempArr = array.slice();
        let len = tempArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                animations.push(j);
                setTimeout(() => {
                    highlightRedPointer();
                }, (i + 51) * (j + 51));
                if (tempArr[j] > tempArr[j + 1]) {
                    let tmp = tempArr[j];
                    tempArr[j] = tempArr[j + 1];
                    tempArr[j + 1] = tmp;
                    arrayCache.push(tempArr.slice());
                    setTimeout(() => {
                        handleSwap();
                    }, (i + 50) * (j + 50));
                }
            }
        }
    }

    return (
        <div>
            <Header
                bubbleSort={() => {
                    animatedBubbleSort();
                    HelperMethods.disableButtons();
                }}
                randomize={() => {
                    updateArray(HelperMethods.fillArrayWithRandomValues);
                }}
                selectionSort={() => {
                    animatedSelectionSort();
                    HelperMethods.disableButtons();
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
