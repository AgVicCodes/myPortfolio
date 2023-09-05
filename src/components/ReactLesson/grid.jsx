import React from 'react'

export default function Grid() {
	return (
		<>
			<div className="Parent ">	
				<div className="grid px-2 grid-cols-4 grid-flow-col-dense xs:grid-flow-row-dense  text-white bold">
					<div className='m-2 row-span-4 col-span-2 col-start-3 px-40 py-12 bg-red-200 rounded-lg shadow-md'><h1 className=''>Element 1</h1></div>
					<div className='m-2 col-span-2 px-40 py-12 bg-red-300 rounded-lg shadow-md'>Element 2</div>
					<div className='m-2 px-40 py-12 bg-red-400 rounded-lg shadow-md'>Element 3</div>
					<div className='m-2 px-40 py-12 bg-red-500 rounded-lg shadow-md'>Element 4</div>
					<div className='m-2 px-40 py-12 bg-red-200 rounded-lg shadow-md'>Element 5</div>
					<div className='m-2 col-span-2 px-40 py-12 bg-red-300 rounded-lg shadow-md'>Element 6</div>
					<div className='m-2 px-40 py-12 bg-red-400 rounded-lg shadow-md'>Element 7</div>
					<div className='m-2 px-40 py-12 bg-red-500 rounded-lg shadow-md'>Element 8</div>
					<div className='m-2 col-span-2 px-40 py-12 bg-red-200 rounded-lg shadow-md'>Element 9</div>
					<div className='m-2 px-40 py-12 bg-red-300 rounded-lg shadow-md'>Element 10</div>
					<div className='m-2 px-40 py-12 bg-red-400 rounded-lg shadow-md'>Element 11</div>
					<div className='m-2 px-40 py-12 bg-red-500 rounded-lg shadow-md'>Element 12</div>
				</div>
			</div>  
		</>
	)
}
