import { useState } from "react";

import Screen from "./Screen.jsx";
import Keys from "./Keys.jsx";

let digit; //to save the digit just clicked (either number or ".")
let number = ''; //to save the number made with the combination of digits clicked 

export default function Calculator() {
    const [screenDisplay, setScreenDisplay] = useState("_"); //stores what's shown on screen

    function nbrClicked(nbr) {
        digit = nbr;
        number += nbr
        
        /* Changes what is stored on screen
        (since it's a useState variable, its change will force the "Screen" component to be updated) */
        if (screenDisplay == "_") {
            setScreenDisplay(nbr)
        } else {
            setScreenDisplay(wasScreenDisplay => wasScreenDisplay + nbr)
        }
    }

    function symbolClicked(symbol) {
        console.log(symbol);
    }

    return (
        <main>
            <Screen screenDisplay={screenDisplay}/>
            <Keys nbrClicked={nbrClicked} symbolClicked={symbolClicked}/>
        </main>
    )
}