import React from 'react';
import "./image.jpg";

// Reading props inside child component
function Button ({size, color, text="yellow", bdr}) {
    return <>
        <button width="100" 
        style={{
            color: text,
            backgroundColor: color,
            borderRadius: size,
            border: bdr,
        }}>
            Click Me
        </button>
    </>
}

// Nested prop
function Card ({children}) {
    return <>
        <h1>Hello, this is my:
            {children}
        </h1>
    </>
}

export function PropExample() {
    return <>
        <h1>Hello World!</h1>
        <Button 
            color={'#777777'}
            size={5}
            bdr={"2px solid #ffff00"}
        />
        <Button 
            color={'#d76b7a'}
            size={1}
            bdr={"2px solid #ffff00"}
        />
        <Button 
            color={'#352700'}
            text={'white'}
            size={10}
            bdr={"2px solid #ffff00"}
        />

        <Card>
            <img src="./image.jpg" alt="A chart" />
        </Card>
    </>
}

// // Curly JSX Lesson
// const Victor = {
//     name: "Agbeleye Victor",
//     style: {
//         backgroundImage: './logo192.png',
//         color: 'pink'
//     },
//     level: "BSc Graduate",
// }

{/* <h1 style={Victor.style}>{Victor.name}</h1> */}