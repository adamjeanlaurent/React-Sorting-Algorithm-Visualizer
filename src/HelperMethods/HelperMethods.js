const LOWER_BOUND = 5;
const UPPER_BOUND = 100;
const ARRAY_SIZE = 100;

const HelperMethods = {
    disableButtons: () => {
        let buttons = document.querySelectorAll("button");
        for (let button of buttons) {
            button.disabled = true;
        }
    },

    enableButtons: () => {
        let buttons = document.querySelectorAll("button");
        for (let button of buttons) {
            button.disabled = false;
        }
    },

    turnAllOtherBarsBlue: (indexToKeepRed, arrayToUpdate) => {
        for (let i = 0; i < arrayToUpdate.length; i++) {
            let current = document.getElementById(`${i}`);
            if (i !== indexToKeepRed) {
                current.style.backgroundColor = "#b9cced";
            }
        }
    },

    removeAllHighlightedBars: () => {
        for (let i = 0; i < ARRAY_SIZE; i++) {
            document.getElementById(`${i}`).style.backgroundColor = "#b9cced";
        }
    },

    // returns a random number between bounds inclusive
    randomNumberBetweenBounds: () => {
        return Math.floor(Math.random() * UPPER_BOUND) + LOWER_BOUND;
    },

    // fills array with random values
    fillArrayWithRandomValues: () => {
        let tempArray = [];
        for (let i = 0; i < ARRAY_SIZE; i++) {
            tempArray.push(HelperMethods.randomNumberBetweenBounds());
        }
        return tempArray;
    }
};

export default HelperMethods;
