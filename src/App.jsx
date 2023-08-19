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
			{/* <header className="Parent header bg-neutral-400">
				<nav className="flex sm:justify-center space-x-4">
					{[
						['Home', '/dashboard'],
						['Team', '/team'],
						['Projects', '/projects'],
						['Reports', '/reports'],
					].map(([title, url]) => (
						<ul className='my-4'>
							<li><a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a></li>
						</ul>
					))}
				</nav>
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
			</header> */}
			
			{/* <div className="Parent">	
				<div className="flex px-2 flex-row justify-center">
					<div className='w-32 m-2 h-32 bg-red-100 rounded-lg shadow-md'></div>
					<div className='w-32 m-2 h-32 bg-red-200 rounded-lg shadow-md'></div>
					<div className='w-32 m-2 h-32 bg-red-300 rounded-lg shadow-md'></div>
					<div className='w-32 m-2 h-32 bg-red-400 rounded-lg shadow-md'></div>
					<div className='w-32 m-2 h-32 bg-red-500 rounded-lg shadow-md'></div>
					<div className='w-32 m-2 h-32 bg-red-600 rounded-lg shadow-md'></div>
					<div className='w-32 m-2 h-32 bg-red-700 rounded-lg shadow-md'></div>
					<div className='w-32 m-2 h-32 bg-red-800 rounded-lg shadow-md'></div>
					<div className='w-32 m-2 h-32 bg-red-800 rounded-lg shadow-md'></div>
					<div className='w-32 m-2 h-32 bg-red-950 rounded-lg shadow-md'></div>
				</div>
			</div> */}

			{/* Drawing shapes with CSS */}
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
