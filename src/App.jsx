import "./App.css";
import Victor from "./images/Victor1.jpg"

function List ({children}) {
	return <li className="my-8 mx-5 text-white hover:font-semibold transition ease-in-out duration-300">{children}</li>;
}

function HeroText ({children}) {
	return <h1 className="mt-12 pt-20 text-neutral-300 py-0">{children}</h1>
}

function GridContent ({children}) {
	return <div className="h-16 mt-12 rounded-lg text-neutral-200 subHead col-start-5 flex justify-center col-span-4  -600 opacity-30">{children}</div>
}

function Card ({children}) {
	return <div className="h-64 pt-4 col-span-10 col-start-2 text-white opacity-80 card bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3 lg:col-start-4">{children}</div>

}

export default function Myapp() {
	return (<>
			<header>
				<nav className="opacity-50 flex flex-wrap items-center justify-between w-full bg-neutral-900">
					<h3 className="my-8 mx-5 text-white ">AgVictor</h3>
					
					<ul className="flex">
						<List>Projects</List>
						<List>Contact</List>
						<List>About</List>
					</ul>
					
					<div className="social flex flex-row">
						<a href="https://github.com/AgVicCodes">
							<svg xmlns="http://www.w3.org/2000/svg" height="2em" className="mr-4" viewBox="0 0 496 512">
							<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 
							2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 
							6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 
							3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 
							110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 
							15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 
							38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 
							0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 
							69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 
							61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 
							22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 
							496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 
							1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 
							4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 
							5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 
							3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
						</a>
						<a href="https://github.com/AgVicCodes">
							<svg xmlns="http://www.w3.org/2000/svg" height="2em" className="mr-4" viewBox="0 0 496 512">
							<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 
							2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 
							6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 
							3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 
							110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 
							15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 
							38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 
							0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 
							69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 
							61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 
							22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 
							496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 
							1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 
							4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 
							5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 
							3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
						</a>
					</div>
				</nav>
			</header>
			<body>
				<div className="container mx-auto">
					<div className="grid grid-cols-12 gap-12">
						<div className="h-auto col-start-2 col-span-11 lg:col-span-5 lg:col-start-2 lg:col-end-7 row-span-1 flex justify-y-center py-5 rounded-lg opacity-30">
							<div>
								<HeroText>Hello, I'm Victor! <br />A Backend Developer! <br />With a bit of frontend knowledge!😂😂😂</HeroText>
							</div>
						</div>
						<div className="mt-12 col-span-5 col-start-7 col-end-12 flex justify-end rounded-lg opacity-30">
							<img src={Victor} height={750} width={750} className="rounded-full opacity-30" alt="Myself" />
						</div>
						<GridContent>My Skills</GridContent>
						<Card></Card>
						<div className="h-64 pt-4 col-span-10 col-start-2 text-white opacity-80 card bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3">Second card</div>
						<div className="h-64 pt-4 col-span-10 col-start-2 text-white opacity-80 card bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3 lg:col-start-4">Third card</div>
						<div className="h-64 pt-4 col-span-10 col-start-2 text-white opacity-80 card bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3">Fourth card</div>
						<GridContent>My Projects</GridContent>
						<Card>First card</Card>
						<div className="h-64 pt-4 col-span-10 col-start-2 text-white opacity-80 card bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3">Second card</div>
						<div className="h-64 pt-4 col-span-10 col-start-2 text-white opacity-80 card bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3 lg:col-start-4">Third card</div>
						<div className="h-64 pt-4 col-span-10 col-start-2 text-white opacity-80 card bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3">Fourth card</div>
						<GridContent>Download CV</GridContent>
					</div>
				</div>
				<footer className="w-full bg-neutral-600 h-24 grid grid-cols-10">
					<div className="text-xl pt-8 flex text-neutral-300 justify-center col-start-2 col-span-3">
						Copyright @ AgVictor. All rights Reserved!
					</div>
					<div className="text-xl p-8 flex text-neutral-300 justify-center col-start-7 col-span-4">
						Designed by AgVictorCodes✨
					</div>
				</footer>
			</body>
		</>
	);
}
