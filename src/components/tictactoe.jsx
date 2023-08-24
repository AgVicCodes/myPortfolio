import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import { useState } from "react";

var myChar = "X";
// var nextChar = "Y";

function Square() {
    const[value, setValue] = useState(null);

    function handleClick() {
        setValue(myChar);
    }
    
    return <button onClick={handleClick} className="square">{value}</button>  
}

function setChar() {
    if (myChar === 'X') {
        myChar = 'O';
    } else if (myChar === 'O') {
        myChar = 'X';
    }
}

function clearBoard() {
    if (myChar) {
        console.log("I'm alive");
    }
}



export default function Board() {
    return <>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>
    <div className="board-row">
        <Square />
        <Square />
        <Square />
    </div>

    <button onClick={setChar} className="w-32 mt-4 h-16 shadow-sm bg-slate-200 rounded-md">Swap Letters</button>
    <button onClick={clearBoard} className="w-32 mt-4 h-16 shadow-sm bg-slate-200 rounded-md">Clear Board</button>
    </>
}