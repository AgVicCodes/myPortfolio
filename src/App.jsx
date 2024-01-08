import "./App.css";
import Victor from "./images/Victor1.png"
import php from "./images/tech-icons/Dedicated/php.png"
import js from "./images/tech-icons/Dedicated/js.png"
import css from "./images/tech-icons/Dedicated/css.png"
import laravel from "./images/tech-icons/Dedicated/laravel.png"
import react from "./images/tech-icons/Dedicated/react.png"
import bootstrap from "./images/tech-icons/Dedicated/bootstrap.png"
import mysql from "./images/tech-icons/Dedicated/mysql.png"
import tailwind from "./images/tech-icons/Dedicated/tailwind.png"
import adobe from "./images/tech-icons/Dedicated/xd.png"
import figma from "./images/tech-icons/Dedicated/figma.png"
import photoshop from "./images/tech-icons/Dedicated/photoshop.png"
import illustrator from "./images/tech-icons/Dedicated/illustrator.png"
import pc from "./images/Projects/final_sustento.png"
import tab from "./images/Projects/Web_Apps.png"

function List({ children }) {
	return <li className="my-8 mx-5 text-white hover:font-semibold transition ease-in-out duration-300">{children}</li>;
}

function HeroText({ children }) {
	return <h1 className="mt-0 pt-20 text-neutral-300 py-0">{children}</h1>
}

function SubText({ children }) {
	return <h6 className="mt-0 pt-8 text-lg font-thin text-neutral-300 py-0">{children}</h6>
}

// function GridContent({ children }) {
// 	return <div className="mt-12 w rounded-lg text-neutral-200 subHead col-start-5 flex justify-center col-span-4">{children}</div>
// }

// function Card() {
// 	return (
// 		<>
// 			<div className="h-64 pt-4 col-end-10 col-start-2 card-div text-white bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3 lg:col-start-4">FirstCard</div>
// 			<div className="h-64 pt-4 col-end-10 col-start-2 text-white opacity-80 card-div bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3">Second card</div>
// 			<div className="h-64 pt-4 col-end-10 col-start-2 text-white opacity-80 card bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3 lg:col-start-4">Third card</div>
// 			<div className="h-64 pt-4 col-end-10 col-start-2 text-white opacity-80 card bg-neutral-950 flex justify-center p-auto rounded-xl lg:col-span-3">Fourth card</div>
// 		</>
// 	);
// }

function CtaMain ({children}) {
	return <button className="bg-purple-600 hover:bg-purple-800 border-purple-500 hover:border-purple-700 p-3 text-neutral-200 rounded-md border-4 mt-8">{children}</button>
}

function Header() {
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
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#9333ea" className="bi bi-github" viewBox="0 0 16 16">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
						</svg>
					</a>
					<a href="https://twitter.com/VictorAgbeleye">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#9333ea" className="bi bi-twitter" viewBox="0 0 16 16">
							<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
						</svg>
					</a>
					<a href="https://linkedin.com/AgbeleyeVictor">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#9333ea" className="bi bi-linkedin" viewBox="0 0 16 16">
							<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
						</svg>
					</a>
					
					<a href="https://github.com/AgVicCodes">
						{/* <svg xmlns="http://www.w3.org/2000/svg" height="2em" className="mr-4" viewBox="0 0 496 512">
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
							3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
						</svg> */}
					</a>
				</div>
			</nav>
		</header>
	</>);
}

export default function Myapp() {
	return (
	<>
		<body>
			<Header />
			<div className="container mx-auto">
				<div className="grid grid-cols-12 gap-12">
					<div className="h-auto col-start-2 col-span-11 lg:col-span-5 lg:col-start-2 lg:col-end-7 row-span-1 flex justify-y-center py-3 rounded-lg opacity-30">
						<div className="hero-section">
							<h1 className="mt-0 pt-20 text-neutral-300 py-0">Hello there! <br />I'm Agbeleye Victor,  <br />a Backend-end Web developer and UI/UX designer!</h1>
							<h6 className="mt-0 pt-8 text-lg font-thin text-neutral-300 py-0">Looking towards working with companies with passion for creating intriguing User interfaces and experience.</h6>
							<CtaMain>Let's Talk</CtaMain>
						</div>
					</div>
					<div className="mt-12 col-span-5 col-start-7 col-end-12 flex justify-end rounded-lg img-blur">
						<img src={Victor} className="rounded-full opacity-50 purple_grad" alt="Myself" />
					</div>
				</div>
			</div>
			<div className="tech-stacks mt-16 pb-32">
				<div className="container mx-auto">
					<div className="grid grid-cols-6 gap-12 lg:grid-cols-12">
						<h2 className="mt-16 w-auto col-span-6 lg:col-span-12 text-white flex justify-center uppercase">Languages & Frameworks</h2>
						<div className="col-start-2 col-end-3 lg:col-start-5 lg:col-end-6">
							<img className="mb-4 opacity-40" src={php} alt="php" />
							<h6 className="flex justify-center text-neutral-50">PHP</h6>
						</div>
						<div className="col-start-3 col-end-4 lg:col-start-6 lg:col-end-7">
							<img className="mb-4 opacity-40" src={js} alt="js" />
							<h6 className="flex justify-center text-neutral-50">Javascript</h6>
						</div>
						<div className="col-start-4 col-end-5 lg:col-start-7 lg:col-end-8">
							<img className="mb-4 opacity-40" src={css} alt="css" />
							<h6 className="flex justify-center text-neutral-50">CSS</h6>
						</div>
						<div className="col-start-5 col-end-6 lg:col-start-8 lg:col-end-9">
							<img className="mb-4 opacity-40" src={mysql} alt="mysql" />
							<h6 className="flex justify-center text-neutral-50">Mysql</h6>
						</div>
						<div className="w-100"></div>
						<div className="col-start-2 col-end-3 lg:col-start-5 lg:col-end-6">
							<img className="mb-4 opacity-40" src={laravel} alt="laravel" />
							<h6 className="flex justify-center text-neutral-50">Laravel</h6>
						</div>
						<div className="col-start-3 col-end-4 lg:col-start-6 lg:col-end-7">
							<img className="mb-4 opacity-40" src={react} alt="react" />
							<h6 className="flex justify-center text-neutral-50">React</h6>
						</div>
						<div className="col-start-4 col-end-5 lg:col-start-7 lg:col-end-8">
							<img className="mb-4 opacity-40" src={bootstrap} alt="bootstrapt" />
							<h6 className="flex justify-center text-neutral-50">Bootstrap</h6>
						</div>
						<div className="col-start-5 col-end-6 lg:col-start-8 lg:col-end-9">
							<img className="mb-4 opacity-40" src={tailwind} alt="tailwind" />
							<h6 className="flex justify-center text-neutral-50">Tailwind</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="tech-stacks mt-16 pb-32">
				<div className="container mx-auto">
					<div className="grid grid-cols-6 lg:grid-cols-12 gap-12">
						<h2 className="mt-16 w-auto col-span-6 lg:col-span-12 text-white flex justify-center uppercase">Design Tools</h2>
						<div className="col-start-2 col-end-3 lg:col-start-5 lg:col-end-6">
							<img className="mb-4 opacity-40" src={adobe} alt="Adobe" />
							<h6 className="flex justify-center text-neutral-50">Adobe XD</h6>								
						</div>
						<div className="col-start-3 col-end-4 lg:col-start-6 lg:col-end-7">
							<img className="mb-4 opacity-40" src={figma} alt="Figma" />
							<h6 className="flex justify-center text-neutral-50">Figma</h6>
						</div>
						<div className="col-start-4 col-end-5 lg:col-start-7 lg:col-end-8">
							<img className="mb-4 opacity-40" src={photoshop} alt="Photoshop" />
							<h6 className="flex justify-center text-neutral-50">Photoshop</h6>
						</div>
						<div className="col-start-5 col-end-6 lg:col-start-8 lg:col-end-9">
							<img className="mb-4 opacity-40" src={illustrator} alt="Illustrator" />
							<h6 className="flex justify-center text-neutral-50">Illustrator</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-16 pb-32">
				<div className="container mx-auto">
					<div className="grid grid-cols-12 gap-4">
						<h2 className="mt-16 w-auto col-span-12 text-white flex justify-center uppercase">Recent Projects</h2>
						<div className="flex justify-center col-span-12">
							<img className="mt-16 mb-4" draggable="false" src={pc} alt="design" />
						</div>
						<div className="flex justify-center col-span-12">
							<img className="mt-16 mb-4" draggable="false" src={tab} alt="web_app" />
						</div>
					</div>
				</div>
			</div>
			

			<h2 className="w-auto col-span-12 text-white flex justify-center uppercase">Testimonials</h2>

			<footer className="bg-neutral-600 flex justify-between h-24 px-16 lg:px-32">
				<div className="text-xs lg:text-xl p-8 text-neutral-300">
					Copyright &#169 AgVictor. All rights Reserved! Designed by AgVictorCodes ♥
				</div>
			</footer>
		</body>
	</>
	);
}
