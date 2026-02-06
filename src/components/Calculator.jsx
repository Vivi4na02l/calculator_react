import { useState } from "react";

import Screen from "./Screen.jsx";
import Keys from "./Keys.jsx";

export default function Calculator() {
    const [equation, setEquation] = useState([]); //stores all the numbers and symbols of the equation
    const [dotLocked, setDotLocked] = useState(false); //turns "true" if the "." button has already been clicked for the number currently being typed
    const [isEquationOver, setIsEquationOver] = useState(false); //turns "true" if equation is over

    /**
     * when a button of a number is clicked, this function adds the number the "equation" array that is both used to, in the future, count the result of the equation, and also to add the numbers and operators to the screen display
     * @param {*} nbr number of the button clicked
     */
    function nbrClicked(nbr) {
        if (!isEquationOver) {
            if (nbr != ".") {
                setEquation(prevEquation => [...prevEquation, nbr]) // pushes "nbr" to the useState "equation" array
            } else {
                if (nbr == "." && !dotLocked) {
                    setDotLocked(true);
                    setEquation(prevEquation => [...prevEquation, nbr]) // pushes "nbr" to the useState "equation" array
                }
            }
        }
        
        // debug:
        console.log(nbr);
        console.log(equation);
    }

    /**
     * adds symbol to the screen and allows the user to switch between symbols before adding a new number to the screen
     * @param {*} symbol 
     */
    function symbolClicked(symbol) {
        console.log(symbol);

        if (equation.length > 0 && !isEquationOver) { //the first character of the equation CAN'T be a symbol AND if the equation isn't over yet
            if (symbol.name == "Equal") { //if the symbol pressed is "="...
                setEquation(prevEquation =>
                    [...prevEquation, `=${eval(prevEquation.join(''))}`] //adds to the array of the equation "=" and its result
                )

                setIsEquationOver(true);
            } else {
                if (equation[equation.length-1] != "*"
                    && equation[equation.length-1] != "/"
                    && equation[equation.length-1] != "+"
                    && equation[equation.length-1] != "-"
                ) { // if the last character on the equation wasn't an operator symbol...
                    setEquation(prevEquation => [...prevEquation, symbol.op]); // pushes "symbol" to the useState "equation" array
                    setDotLocked(false);

                } else { // if it was...
                    setEquation(prevEquation =>
                        prevEquation.map((item, pos) => 
                            pos == prevEquation.length - 1 ? symbol.op : item
                        )
                    )
                }
            }
        }
    }

    /**
     * restarts the equation when button "AC" is clicked
     */
    function acClicked() {
        setEquation([]);
        setDotLocked(false);
        setIsEquationOver(false);
    }

    return (
        <main>
            <Screen screenDisplay={equation.length == 0 ? "_" : equation.join('')} acClicked={acClicked}/>
            <Keys nbrClicked={nbrClicked} symbolClicked={symbolClicked}/>
        </main>
    )
}