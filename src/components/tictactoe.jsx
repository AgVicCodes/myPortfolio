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
    <button onClick={setChar} className="w-32 mt-4 h-16 shadow-sm bg-slate-200 rounded-md">Clear Board</button>
    </>
}