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

function Nav() {
	return (
		<>
			<div className="Parent header bg-slate-600">
				<nav className="navbar">
					<div className="flex uppercase justify-center bg-zinc-400">
						<ul className='flex flex-rows mx-4 my-1 text-neutral-700'>
							<li className='text-sm m-4 hover:text-gray-900 hover:font-bold ease-in-out duration-300'>Home</li>
							<li className='text-sm m-4 hover:text-gray-900 hover:font-bold ease-in-out duration-300'>Projects</li>
							<li className='text-sm m-4 hover:text-gray-900 hover:font-bold ease-in-out duration-300'>About</li>
							<li className='text-sm m-4 hover:text-gray-900 hover:font-bold ease-in-out duration-300'>Contact</li>
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
}

export default function Myapp() {
	return <Nav />

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
