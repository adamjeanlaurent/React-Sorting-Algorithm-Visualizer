import React, { useState } from "react";
import "../styles/App.css";
import { Header } from "./Header";
import {
    fillArrayWithRandomValues,
    turnAllOtherBarsBlue,
    removeAllHighlightedBars,
    disableButtons,
    enableButtons
} from "../HelperMethods/HelperMethods";

export default function SortingVisualizer(props) {
    let arrayCache = [];
    let animations = [];
    const [array, updateArray] = useState(fillArrayWithRandomValues);

    function highlightRedBar() {
        let indexToTurnRed = animations.shift();
        let highlightedBar = document.getElementById(`${indexToTurnRed}`);
        highlightedBar.style.backgroundColor = "red";
        let arrayToUpdate = arrayCache.shift();
        turnAllOtherBarsBlue(indexToTurnRed, arrayToUpdate);
        if (arrayCache.length === 0) {
            removeAllHighlightedBars();
            enableButtons();
        }
        updateArray(arrayToUpdate);
    }

    function animatedBubbleSort() {
        let tempArr = array.slice();
        let len = tempArr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                animations.push(j);
                if (tempArr[j] > tempArr[j + 1]) {
                    let tmp = tempArr[j];
                    tempArr[j] = tempArr[j + 1];
                    tempArr[j + 1] = tmp;
                    arrayCache.push(tempArr.slice());

                    /*


                    Note on possibly enhancing performance, maybe we can just swap 
                    elements in the DOM and update the state at the end in timeouts.
                    
                    Maybe after that I can increase the array size to 200 ? 

                    what is the point of updating the entire state every time when in reality only two bars will be different
                    from before? 




                    */
                    setTimeout(() => {
                        highlightRedBar();
                    }, i * 1);
                }
            }
        }
    }

    return (
        <div>
            <Header
                bubbleSort={() => {
                    animatedBubbleSort();
                    disableButtons();
                }}
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
