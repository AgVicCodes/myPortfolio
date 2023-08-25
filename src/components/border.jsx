import React from 'react'

export default function Border() {
    return <>
        <div className="flex">
            <h1 className='border-l mx-64'>Heading</h1>
            <h6 className='border-b'>Small text</h6>
            <br />
            <br />
            <br />
            <input className='w-64 h-10 border-solid rounded-md shadow-inner border-2' type="text" name="name" id="username" />
            <input className='w-64 h-10 border-solid rounded-md shadow border-2' type="text" name="name" id="username" />
            <input className='w-64 h-10 border-solid rounded-md shadow-md border-2' type="text" name="name" id="username" />
            <input className='w-64 h-10 border-solid rounded-md shadow-xl border-2' type="text" name="name" id="username" />
            <input className='w-64 h-10 border-solid rounded-md shadow-2xl border-2' type="text" name="name" id="username" />
        </div>
    </>
}Edited JSX
