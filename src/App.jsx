import './App.css';
import './Todo.js';
import './Header.js';

// function Mytext() {
// 	return <h1>Welcome here!</h1>
// }

// function Username() {
// 	return (
// 		<h1>user.name</h1>
// 	) 
// }

function Header() {
	return (
		<>
			<header className="header">
				<nav className="navbar">
					<div className="float-right uppercase">
						<ul className='flex flex-rows mx-4'>
							<li className='text-sm m-4'>Home</li>
							<li className='text-sm m-4'>Projects</li>
							<li className='text-sm m-4'>About</li>
							<li className='text-sm m-4'>Contact</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}

export default function Myapp() {
	return <Header />

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
