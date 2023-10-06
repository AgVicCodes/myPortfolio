import { useState } from 'react';

function buttonState () {
    const [current, setCurrent] = useState(0);
}

export default function State() {
    return (<>
        <div>state</div>
    </>
    );
}
