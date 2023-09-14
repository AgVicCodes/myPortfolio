import React from 'react'
import '../logo192.png';

const Victor = {
    name: "Agbeleye Victor",
    style: {
        backgroundImage: './logo192.png',
        color: 'pink'
    },
    level: "BSc Graduate",
}

export function PropExample() {
    return <>
        <h1 style={Victor.style}>{Victor.name}</h1>
    </>
}
