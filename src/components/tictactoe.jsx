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
    const [xIsNext, setxIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null)); 
    
    // function handleFirstClick() {
    //     handleClick(0);
    // }

    function handleClick(i) {
        
        // if (squares[i]) {
        //     return;
        // }

        if (squares[i] || checkWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
    
        
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        
        setSquares(nextSquares);
        setxIsNext(!xIsNext);
    }

    const winner = checkWinner(squares);
    let status;

    if (winner) {
        status = "Winner is " + winner;
    } else {
        status = "Next player is " + (xIsNext ? 'X' : 'O');
    }

    

    return <>
    
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>

    </>

    function checkWinner(squares) {
        const lines = [
            [0, 1, 2],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        } 
        return null;
    }
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