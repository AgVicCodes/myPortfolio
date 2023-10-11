import { useState } from 'react';

function buttonState () {
    const [current, setCurrent] = useState(0);
}

export default function State() {
    return (<>
        <button className="bg-gree-600 hover:bg-green-800 border-md rounded-md">Click me</button>
    </>
    );
}
