import './App.css';
import './Todo.js';
import Header from './Header.js';
import Learn from './learn.jsx';
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
		<Learn />
	</>;

	// return <>
	// 	<div className="Container">
	// 		<Header />
	// 		<Mytext />
	// 		<button className="submitt">Click here to Begin!</button>
	// 	</div>
	// </> 
}






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
