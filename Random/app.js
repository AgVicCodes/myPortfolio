console.log("About to Install React");

export function Garbage (text) {
    // import { useState } from 'react';
    // import Board from "./components/tictactoe";    
    // import './App.css';
    // import './Todo.js';
    // import Border from './components/border';
    // import Header from './components/header.js';
    // import Container from './components/container.jsx';
    // import Grid from './components/grid.jsx';
    // import Flex from './components/flex.jsx';
	// import car from "../images/m3.jpg";
	// import bmw from "../images/m4.jpg";
	// import beamer from "../images/m5.jpg";
        {/* <Board /> */}
        {/* <Nav /> */}
        {/* <Container /> */}
        {/* <Grid /> */}
        {/* <Flex /> */}
	// 	// return <button className="square">{value}</button>;
	// 	const [value, setValue] = useState(null);
		
	// 	function handClicked() {
	// 		setValue('X');
	// 	}

	// 	return <button className="square" onClick={handClicked} > {value} </button>;
	// }

	// export default function Board() {
	// 	return <>
	// 		<div className="board-row">
	// 				<Square />
	// 				<Square />
	// 				<Square />
	// 		</div>
	// 		<div className="board-row">
	// 				<Square />
	// 				<Square />
	// 				<Square />
	// 		</div>			
	// 		<div className="board-row">
	// 				<Square />
	// 				<Square />
	// 				<Square />
	// 		</div>					
	// 	</>
	// }

    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9

	/* function Square({ value, onSquareClick }) {
		return (
			<button className="square" onClick={onSquareClick}>
			{value}
			</button>
		);
	}

	function Board({ xIsNext, squares, onPlay }) {
		function handleClick(i) {
			if (calculateWinner(squares) || squares[i]) {
				return;
			}

			const nextSquares = squares.slice();
			if (xIsNext) {
				nextSquares[i] = 'X';
			} else {
				nextSquares[i] = 'O';
			}
			onPlay(nextSquares);
		}

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Winner: ' + winner;
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O');
	}

	return (
		<>

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
	);
	}

	export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
	}

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = 'Go to move #' + move;
		} else {
			description = 'Go to game start';
		}
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
	}

	function calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
			}
		}
		return null;
	} */

    // function Mytext() {
    // 	return <h1>Welcome here!</h1>
    // }

    // function Username() {
    // 	return (
    // 		<h1>user.name</h1>
    // 	) 
    // }

    // function Nav() {
    // 	return (
    // 		<>
    // 			<Header />

    // 			{/* Drawing shapes with CSS */}
    // 		</>
    // 	);
    // }
// }

/* <div className="Container">
	<button className="submitt">Click here to Begin!</button>
</div> */

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p className="text-red-500">Adding Tailwind to React</p>
// 				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Learn React</a>
// 			</header>
// 		</div>
// 	);
// }

// export default App;

}

// Reading props inside child component
/*function Button ({size, color, text="yellow", bdr}) {
    return <>
        <button width="100" 
        style={{
            color: text,
            backgroundColor: color,
            borderRadius: size,
            border: bdr,
        }}>
            Click Me
        </button>
    </>
}*/

// Nested prop
/*function Card ({children}) {
    return <>
        <h1>Hello, this is my:
            <h6>{children}</h6>
        </h1>
    </>
}*/

/*export function PropExample() {
    return <>
    <h1>Hello World!</h1>
        <Button 
            color={'#777777'}
            size={5}
            bdr={"2px solid #ffff00"}
        />
        <Button 
        color={'#d76b7a'}
        size={1}
        bdr={"2px solid #ffff00"}
        />
        <Button 
                    color={'#352700'}
            text={'white'}
            size={10}
            bdr={"2px solid #ffff00"}
        />

        <Card>
            Text
        </Card>

        <img src={logo} alt="A car" />
        <h1 style={Victor.style}>{Victor.name}</h1>

    </>
}*/


// // Curly JSX Lesson
// const Victor = {
//     name: "Agbeleye Victor",
//     style: {
//         backgroundImage: './logo192.png',
//         color: 'pink'
//     },
//     level: "BSc Graduate",
// }



// // Passing prop to components
// function Avatar({person, size = 500, radius = 30 }) {
//     return <>
//         <h1>{person.userName}</h1>
//         <img src={person.url} alt="myCar" width={size} height={size} style={{ borderRadius: radius }}/>
//     </>
// }

// export default function Gallery() {
//     return <>
//         <Avatar
//             className = "first" 
//             person = {{
//                 userName: "Victor's First car",
//                 url: car
//             }}
//             size = {100}
//             radius = {10}
//         />
//         <Avatar
//             className = "first" 
//             person = {{
//                 userName: "Victor's Second car",
//                 url: bmw
//             }}
//             size = {300}
//         />
//         <Avatar
//             className = "first" 
//             person = {{
//                 userName: "Victor's Third car",
//                 url: beamer
//             }}
//             radius = {50}
//         />
//     </>
// }

