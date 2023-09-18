import React from 'react'

function Item({isPacked, itemName}) {
    return(
        <li>
            {isPacked? itemName + " ✔" : itemName +" ✖"}
        </li>
    );
}

export default function Conditional() {
    return <>
        <Item 
            itemName={'Doings'}
            isPacked={true}
        />
        <Item 
            itemName={'Spendings'}
            isPacked={false}
        />
    </>
}
