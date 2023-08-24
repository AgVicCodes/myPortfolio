import React from "react";
// import { useState } from "react";

function Square(value) {
    const[value, setValue] = useState(null);
    
    function handleClick() {
        setValue = "X";
    }
    
    return <button onClick={handleClick} className="square">{value}</button>  
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
    </>
}