import './App.css';
import './Todo.js';
import Header from './Header.js';
// import Grid from './grid.jsx';
import Flex from './flex.jsx';

// function Mytext() {
// 	return <h1>Welcome here!</h1>
// }

// function Username() {
// 	return (
// 		<h1>user.name</h1>
// 	) 
// }

function Nav() {
	return (
		<>
			<Header></Header>
			

			{/* Drawing shapes with CSS */}
		</>
	);
}

export default function Myapp() {
	return <>
		<Nav />
		{/* <Grid /> */}
		<Flex/>

		<div className="Parent ">	
			<div className="grid px-2 grid-cols-4 mx-auto">
				<div className='m-2 h-32 bg-red-200  rounded-lg shadow-md'><h1 className='text-white bold'>Element 1</h1></div>
				<div className='m-2 h-32 bg-red-300 rounded-lg shadow-md'>Element 2</div>
				<div className='m-2 h-32 bg-red-400 rounded-lg shadow-md'>Element 3</div>
				<div className='m-2 h-32 bg-red-500 rounded-lg shadow-md'>Element 4</div>
				<div className='m-2 h-32 bg-red-200 rounded-lg shadow-md'>Element 5</div>
				<div className='m-2 h-32 bg-red-300 rounded-lg shadow-md'>Element 6</div>
				<div className='m-2 h-32 bg-red-400 rounded-lg shadow-md'>Element 7</div>
				<div className='m-2 h-32 bg-red-500 rounded-lg shadow-md'>Element 8</div>
				<div className='m-2 h-32 bg-red-200 rounded-lg shadow-md'>Element 9</div>
				<div className='m-2 h-32 bg-red-300 rounded-lg shadow-md'>Element 10</div>
				<div className='m-2 h-32 bg-red-400 rounded-lg shadow-md'>Element 11</div>
				<div className='m-2 col-start-1 col-end-4 h-32 bg-red-500 rounded-lg shadow-md'>Element 12</div>
			</div>
		</div>  
	</>;

	
}




// return <>
	// 	<div className="Container">
	// 		<Header />
	// 		<Mytext />
	// 		<button className="submitt">Click here to Begin!</button>
	// 	</div>
	// </> 

// import logo from './logo.svg';

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
