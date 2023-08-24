import React from 'react';
import { useState } from 'react';

function Square() {
    // return <button className="square">{value}</button>;
    const [value, setValue] = useState(null);
    
    function handClicked() {
        setValue('X');
    }

    return <button className="square" onClick={handClicked} > {value} </button>;
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
