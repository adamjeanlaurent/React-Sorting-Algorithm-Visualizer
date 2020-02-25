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

    function highlightRedBar() {
        let indexToTurnRed = animations.shift();
        let highlightedBar = document.getElementById(`${indexToTurnRed}`);
        highlightedBar.style.backgroundColor = "red";
        let arrayToUpdate = arrayCache.shift();
        HelperMethods.turnAllOtherBarsBlue(indexToTurnRed, arrayToUpdate);
        if (arrayCache.length === 0) {
            HelperMethods.removeAllHighlightedBars();
            HelperMethods.enableButtons();
        }
        updateArray(arrayToUpdate);
    }

    function animatedSelectionSort() {
        let mult = 1;
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
                    highlightRedBar();
                });
            }
        }
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


                    CONCERNS: re-rendering the DOM is what applies the ley id values based on the idexes, if we don't re-render the ids will be out of order highlist the wrong 
                    bars
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
