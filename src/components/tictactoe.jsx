import React from "react";
import { useState } from "react";


function Square({value, onSquareClick}) {
    // const [value, setValue] = useState(null);

    // function handleClick() {
    //     setValue('V'); 
    // }

    return (
        <button className="square" onClick={onSquareClick}>{value}</button>  
    )
}



export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null)); 

    // function handleFirstClick() {
    //     handleClick(0);
    // }

    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        setSquares(nextSquares);
    }

    return <>
    <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}  />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick()} />
    </div>
    <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick()} />
        <Square value={squares[7]} onSquareClick={() => handleClick()} />
        <Square value={squares[8]} onSquareClick={() => handleClick()} />
    </div>

    </>
}

 /* <button onClick={handleClick} className="w-32 mt-4 mr-4 h-16 shadow-sm bg-slate-200 rounded-md">Swap Letters</button> */
/* <button onClick={clearBoard} className="w-32 mt-4 h-16 shadow-sm bg-slate-200 rounded-md">Clear Board</button> */

// var myChar = "X";
// var nextChar = "Y";

// function setChar() {
//     if (myChar === 'X') {
//         myChar = 'O';
//     } else if (myChar === 'O') {
//         myChar = 'X';
//     }
// }

/* import React from "react";
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

    <button onClick={setChar} className="w-32 mt-4 mr-4 h-16 shadow-sm bg-slate-200 rounded-md">Swap Letters</button>
    <button onClick={clearBoard} className="w-32 mt-4 h-16 shadow-sm bg-slate-200 rounded-md">Clear Board</button> }
    </>
} 

*/