import React from 'react'

export default function Header() {
	return (
		<>
			<header className="Parent header bg-neutral-400">
				{/* <nav className="flex sm:justify-center space-x-4">
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
				</nav> */}
				<nav className="navbar">
					<div className="flex uppercase justify-center bg-zinc-400">
						<ul className='flex flex-rows mx-4 my-1 text-neutral-700'>
							<li className='text-sm m-4 text-red-800 hover:text-gray-900 hover:font-bold ease-in-out duration-300'>Home</li>
							<li className='text-sm m-4 hover:text-gray-900 hover:font-bold ease-in-out duration-300'>Projects</li>
							<li className='text-sm m-4 hover:text-gray-900 hover:font-bold ease-in-out duration-300'>About</li>
							<li className='text-sm m-4 hover:text-gray-900 hover:font-bold ease-in-out duration-300'>Contact</li>
						</ul>
					</div>
				</nav>
			</header>
			
			{/* <header>
				<nav>
					<ul>
						<li>Home</li>
						<li>Projects</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header> */}
		</>
	)
}